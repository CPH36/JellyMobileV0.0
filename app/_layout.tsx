import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";

    if (!authState?.authenticated && inAuthGroup) {
      router.replace("./login");
    } else if (authState?.authenticated === true) {
      router.replace("./(protected)");
    }
  }, [authState]);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" }, // Dark mode background
        headerTintColor: "#F5F5F5", // White text
        contentStyle: { backgroundColor: "#000000" }, // Ensures dark mode throughout
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <AuthProvider>
      <ThemeProvider value={DarkTheme}> {/* 🔹 Enables Dark Mode */}
        <StatusBar style="light" /> {/* 🔹 White text in status bar */}
        <StackLayout />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default RootLayoutNav;
