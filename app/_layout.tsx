import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName={"auth/Onboarding"}>
      <Stack.Screen name="auth/Onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="auth/Login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        options={{
          title: "Recognizing Music",
        }}
        name="audioRecognizer/AudioRecognizer"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="search/Search"
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
