import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function SecondAlsoNestedScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Second Also Nested Screen</AppText>
      <Link href={"/second"} push asChild>
        <Button title="push to /second" />
      </Link>
    </View>
  );
}
