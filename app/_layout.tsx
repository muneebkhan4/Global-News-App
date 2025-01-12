import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="(home)"
          options={{ headerTitle: "Global News App" }}
        />
      </Stack>
    </>
  );
}
