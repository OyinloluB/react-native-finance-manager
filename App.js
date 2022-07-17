import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Navigation } from './src/navigation';

export default function App(props) {
  let [interLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!interLoaded) {
    return null;
  }

  return (
    <>
      <Navigation />
      <StatusBar barStyle="light-content" />
    </>
  );
}
