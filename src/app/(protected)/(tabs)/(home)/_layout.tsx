import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "RampartOne",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="home-nested" options={{ title: "Home Nested" }} />
    </Stack>
  );
}
