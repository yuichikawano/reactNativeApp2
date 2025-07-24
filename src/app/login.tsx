import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { useAuthAction } from "@/utils/authContext";
import { Button } from "@/components/Button";

export default function Login() {
  const { login } = useAuthAction();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Login Screen</AppText>
      <Button title={"Login"} onPress={login} />
    </View>
  );
}
