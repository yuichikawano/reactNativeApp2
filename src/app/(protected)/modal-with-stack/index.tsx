import { Button, View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";

export default function ModalWithStack() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Modal With Stack Screen</AppText>
      <Link href={"/modal-with-stack/nested"} push asChild>
        <Button title="push to /modal-with-stack/nested" />
      </Link>
    </View>
  );
}
