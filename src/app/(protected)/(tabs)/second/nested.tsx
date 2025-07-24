import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function SecondNestedScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Second Nested Screen</AppText>
      <Link href={"/second/also-nested"} push asChild>
        <Button title="push to /second/also-nested" />
      </Link>
    </View>
  );
}
