import { Pressable, PressableProps, Text } from "react-native";
import React from "react";
import { cn } from "../utils/cn";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
} & PressableProps;

// from SDK 53 (React 19) onwards, forwardRef is no longer needed, as ref is now a prop
export function Button({
  title,
  onPress,
  theme = "primary",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border",
        theme === "primary" && "bg-cyan-600 border-cyan-700",
        theme === "secondary" && "bg-violet-200 border-violet-300",
        theme === "tertiary" && "bg-transparent border-transparent",
        disabled && "opacity-50",
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={cn(
          "font-semibold text-lg tracking-wider",
          theme === "secondary" && "text-black",
          theme === "primary" && "text-b",
          theme === "tertiary" && "text-gray-800",
        )}
        style={{
          fontFamily: "RampartOne",
        }}
      >
        {title} {disabled}
      </Text>
    </Pressable>
  );
}
