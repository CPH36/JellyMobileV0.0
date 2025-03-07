import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const ChartPage = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [price, setPrice] = useState<string>("Loading...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scaleAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/jellffishcoin/market_chart?vs_currency=usd&days=7&interval=daily"
        );
        const data = await response.json();

        if (!data || !data.prices) {
          throw new Error("Invalid data received from API");
        }

        const prices = data.prices.map((entry: [number, number]) => entry[1]);
        const timestamps = data.prices.map((entry: [number, number]) =>
          new Date(entry[0]).toLocaleDateString()
        );

        setChartData(prices);
        setLabels(timestamps);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setError("Failed to load market data. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=jellffishcoin&vs_currencies=usd"
        );
        const data = await response.json();

        if (!data || !data.jellffishcoin || data.jellffishcoin.usd === undefined) {
          throw new Error("Price data unavailable");
        }

        setPrice(data.jellffishcoin.usd.toFixed(7));
      } catch (error) {
        console.error("Error fetching price:", error);
        setPrice("N/A");
      }
    };

    fetchChartData();
    fetchPrice();

    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require("../../assets/jelly_bit.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Your Portal</Text>

        <Image source={require("../../assets/jelly_logo.png")} style={styles.logo} />

        {[
          {
            title: "Buy On Birdeye",
            url: "https://www.birdeye.so/token/GFreY9SAUz96P7qkF19A4dtA4TmZgtL9Gmu8gV9Kpump?chain=solana",
          },
          {
            title: "Buy On Dex Screener",
            url: "https://dexscreener.com/solana/6bbxefmfevby5upkld8ekpueezvbds1iey24tn7zax1q",
          },
          {
            title: "Buy On Jupiter",
            url: "https://jup.ag/swap/SOL-Jellyfc",
          },
        ].map((item, index) => (
          <Animated.View key={index} style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => openLink(item.url)}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}

        <Text style={styles.priceText}>JellyFish Coin Price: ${price}</Text>

        <Text style={styles.title}>JellyFish Coin 7 Day Chart</Text>
        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <LineChart
            data={{
              labels: [],
              datasets: [{ data: chartData }],
            }}
            width={Dimensions.get("window").width - 20}
            height={220}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#121212",
              backgroundGradientFrom: "#1E1E1E",
              backgroundGradientTo: "#121212",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={styles.chart}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the background image covers the screen
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds a slight overlay to make text readable
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "#00b8e6",
    marginBottom: 40,
    textShadowColor: "green",
    textShadowOffset: { width: 4, height: 0 },
    textShadowRadius: 5,
    letterSpacing: 1.5,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#1ad1ff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "gold",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: "grey",
  },
  buttonText: {
    color: "#121212",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "grey",
    textShadowOffset: { width: 4, height: 0 },
    textShadowRadius: 8,
    fontFamily: "monospace",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B570C2",
    marginBottom: 20,
    fontFamily: "monospace",
  },
  title: {
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "#656D9D",
    marginBottom: 20,
  },
  loadingText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 10,
  },
});

export default ChartPage;
