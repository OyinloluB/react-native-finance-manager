import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SplashScreen } from "./src/screens/splash";

export default function App() {
  return (
    <View>
      <SplashScreen />
      <StatusBar style="light" />
    </View>
  );
}
