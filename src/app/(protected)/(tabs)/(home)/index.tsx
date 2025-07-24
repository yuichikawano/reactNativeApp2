import {
  Alert,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  View,
} from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link, useRouter } from "expo-router";
import { useModal } from "@/hooks/useModal";
import { useAssets } from "expo-asset";

export default function IndexScreen() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const handleOpenAlert = () => {
    // Alert.alert("Alert Title");
    Alert.alert("Alert Title", "Alert Message", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      },
    ]);
  };
  const [assets] = useAssets([
    require("../../../../../assets/images/room.jpeg"),
  ]);

  const { isOpen, open, close } = useModal();

  const {
    isOpen: isPageSheetModalOpen,
    open: pageSheetModalOpen,
    close: pageSheetModalClose,
  } = useModal();
  const { width } = Dimensions.get("window"); // 画面の幅を取得
  return (
    <ScrollView>
      <View className="justify-center flex-1 p-4">
        <AppText center>Index Screen</AppText>
        <Link href={"/home-nested"} push asChild>
          <Button title="入れ子HOMEスクリーン" />
        </Link>
        {canGoBack ? (
          <Button
            title="Back"
            theme="secondary"
            onPress={() => {
              router.back();
            }}
          />
        ) : null}
        <Button
          title="Open アラート Modal"
          theme="secondary"
          onPress={() => {
            handleOpenAlert();
          }}
        />
        <Button title="Open 背景透過 Modal" theme="secondary" onPress={open} />
        <Button
          title="Open ページシート Modal"
          theme="secondary"
          onPress={pageSheetModalOpen}
        />
        <Link href={"/modal"} push asChild>
          <Button title="push to /modal" />
        </Link>
        <Link href={"/modal-with-stack"} push asChild>
          <Button title="push to /modal-with-stack" />
        </Link>
        {assets && assets[0] && (
          <Image
            source={{ uri: assets[0].uri }}
            style={{ width, height: width * 0.75 }} // 縦横比に合わせて調整
            resizeMode="contain" // 内容全体を収める
          />
        )}
        {assets && assets[0] && (
          <Image
            source={{ uri: assets[0].uri }}
            style={{ width, height: width * 0.75, marginTop: 20 }} // 縦横比に合わせて調整
            resizeMode="contain" // 内容全体を収める
          />
        )}
        <Modal
          visible={isOpen}
          animationType="slide" // slide animation
          transparent // 背景透明
          onRequestClose={close}
        >
          <View className="flex-1 justify-center items-center">
            <View className="p-20 bg-white">
              <AppText center>Modal Screen</AppText>
              <Button title="Close" theme="secondary" onPress={close} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={isPageSheetModalOpen}
          animationType="slide" // slide animation
          // transparent // 背景透明
          presentationStyle="pageSheet"
          onRequestClose={pageSheetModalClose}
        >
          <View className="flex-1 justify-center items-center">
            <View className="p-20 bg-white">
              <AppText center>Modal Screen</AppText>
              <Button
                title="Close"
                theme="secondary"
                onPress={pageSheetModalClose}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
