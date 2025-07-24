import React from "react";
import { useRouter } from "expo-router";
import { useAsyncStorageState } from "@/hooks/useAsyncStorage";

export const AuthContextState = React.createContext({
  isLoggedIn: false,
  isReady: false,
});
export const AuthContextAction = React.createContext({
  login: () => {},
  logout: () => {},
});
export const useAuthProvider = () => {
  const router = useRouter();

  const { asyncStorageState, setAsyncStorageState, isReady } =
    useAsyncStorageState();

  const login = async () => {
    await setAsyncStorageState({ isLoggedIn: true });
    /**
     * (Tips)
     * ここはログイン画面に戻させないようにreplaceする
     */
    router.replace("/");
  };

  const logout = async () => {
    await setAsyncStorageState({ isLoggedIn: false });
    /**
     * (Tips)
     * ここも元の画面に戻させないようにreplaceする
     */
    router.replace("/login");
  };

  return { isLoggedIn: asyncStorageState?.isLoggedIn, login, logout, isReady };
};

export function useAuthState() {
  return React.useContext(AuthContextState);
}
export function useAuthAction() {
  return React.useContext(AuthContextAction);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, login, logout, isReady } = useAuthProvider();
  return (
    <AuthContextState.Provider
      value={{
        isLoggedIn: isLoggedIn ?? false,
        isReady: isReady,
      }}
    >
      <AuthContextAction.Provider
        value={{
          login,
          logout,
        }}
      >
        {children}
      </AuthContextAction.Provider>
    </AuthContextState.Provider>
  );
}
