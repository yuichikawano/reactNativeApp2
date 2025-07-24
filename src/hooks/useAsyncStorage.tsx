import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen } from "expo-router";

interface AsyncStorageState {
  isLoggedIn: boolean;
}
const AUTH_STORAGE_KEY = "auth-key";
SplashScreen.preventAutoHideAsync();

export function useAsyncStorageState() {
  const [asyncStorageState, setAsyncStorageState] =
    useState<AsyncStorageState | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    (async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
        const jsonValue = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (!isSubscribed) return;

        if (jsonValue != null) {
          const parsedState = JSON.parse(jsonValue) as AsyncStorageState;
          setAsyncStorageState(parsedState);
        } else {
          setAsyncStorageState(null);
        }
        setIsReady(true);
      } catch (error) {
        if (!isSubscribed) return;
        console.error("認証状態の読み込みに失敗しました:", error);
        setAsyncStorageState(null);
        setIsReady(true);
      }
    })();
    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  const setAsyncStorageStateHandler = async (newState: AsyncStorageState) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, jsonValue);
      setAsyncStorageState(newState);
    } catch (error) {
      console.error("認証状態の保存に失敗しました:", error);
    }
  };

  return {
    asyncStorageState,
    setAsyncStorageState: setAsyncStorageStateHandler,
    isReady,
  };
}
