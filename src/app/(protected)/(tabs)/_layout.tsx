import { Tabs } from "expo-router";
import "../../../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "teal",
        headerTitleStyle: {
          fontFamily: "RampartOne",
        },
      }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontFamily: "RampartOne",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-1-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          headerShown: false,
          title: "Second",
          popToTopOnBlur: true,
          tabBarLabelStyle: {
            fontFamily: "RampartOne",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-2-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          title: "Third",
          tabBarLabelStyle: {
            fontFamily: "RampartOne",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-3-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fourth"
        options={{
          // href: null,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "black",
            color: "white",
          },
          tabBarLabelStyle: {
            fontFamily: "RampartOne",
          },
          title: "Fourth",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-4-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
