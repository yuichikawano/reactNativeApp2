import { Stack, usePathname } from "expo-router";

/**
 * ここにStackを配置することで、上のナビゲーションと1個下の階層としてStackが作成される
 * →上のTabナビゲーションにこのフォルダの要素が追加されない。
 */
export default function Layout() {
  const pathname = usePathname();
  return (
    <Stack
      screenOptions={{
        animation: pathname.startsWith("/second") ? "default" : "none",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Second Screen" }} />
      <Stack.Screen name="nested" options={{ title: "Second Nested Screen" }} />
      <Stack.Screen
        name="also-nested"
        options={{ title: "Second Also Nested Screen" }}
      />
    </Stack>
  );
}
