import { Redirect, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("auth_token");
        setIsLoggedIn(!!token); // Convert token to boolean (true if exists, false otherwise)
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsLoggedIn(false); // Assume logged out on error
      }
    };

    checkAuth();
  }, []);

  if (isLoggedIn === null) {
    return null; // Prevent flickering while checking authentication
  }

  return isLoggedIn ? <Redirect href="/dashboard" /> : <Redirect href="/login" />;
}
