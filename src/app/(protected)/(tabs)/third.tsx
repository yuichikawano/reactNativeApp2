import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function ThirdScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Third Screen</AppText>
      <Button
        title="Back"
        theme="secondary"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
}
