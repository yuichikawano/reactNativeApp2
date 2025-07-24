import { ConfigContext, ExpoConfig } from "expo/config";
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.yuichikawano.reactnativeapp2.dev";
  }

  if (IS_PREVIEW) {
    return "com.yuichikawano.reactnativeapp2.preview";
  }

  return "com.yuichikawano.reactnativeapp2";
};

const getAppName = () => {
  if (IS_DEV) {
    return "reactNativeApp2(Dev)";
  }

  if (IS_PREVIEW) {
    return "reactNativeApp2(Preview)";
  }

  return "reactNativeApp2";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "reactNativeApp2",
  scheme: "expo-starter",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getUniqueIdentifier(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["expo-router"],
  extra: {
    router: {},
    eas: {
      projectId: "c3ef1606-afa6-438e-9a06-f388dad72c40",
    },
  },
  owner: "yuichi_kawano",
});
