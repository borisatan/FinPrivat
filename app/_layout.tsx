import { SplashScreen, Stack } from "expo-router";
import Toast from 'react-native-toast-message';
import "./global.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { AuthProvider } from "./(root)/context/AuthContext";
import { ThemeProvider } from "./(root)/context/ThemeContext";

export default function RootLayout() {
  const fontsLoaded = useFonts({
    "Rubik-Bold" : require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Regular" : require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium" : require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold" : require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Light" : require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-ExtraBold" : require("../assets/fonts/Rubik-ExtraBold.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(root)" />
        </Stack>
        <Toast />
      </AuthProvider>
    </ThemeProvider>
  )
}
