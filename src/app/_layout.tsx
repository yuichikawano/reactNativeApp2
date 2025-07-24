import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import React from "react";
import { AuthProvider } from "@/utils/authContext";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    RampartOne: require("../../assets/fonts/WDXLLubrifontJPN-Regular.ttf"),
  });

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "RampartOne",
          },
        }}
      >
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            animation: "none",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
