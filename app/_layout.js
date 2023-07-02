import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from '../store';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [FontsLoaded] = useFonts({
      NotoSansJPBlack: require('../assets/fonts/NotoSansJP-Black.ttf'),
      NotoSansJPBold: require('../assets/fonts/NotoSansJP-Bold.ttf'),
      NotoSansJPExtraBold: require('../assets/fonts/NotoSansJP-ExtraBold.ttf'),
      NotoSansJPExtraLight: require('../assets/fonts/NotoSansJP-ExtraLight.ttf'),
      NotoSansJPLight: require('../assets/fonts/NotoSansJP-Light.ttf'),
      NotoSansJPMedium: require('../assets/fonts/NotoSansJP-Medium.ttf'),
      NotoSansJPRegular: require('../assets/fonts/NotoSansJP-Regular.ttf'),
      NotoSansJPSemiBold: require('../assets/fonts/NotoSansJP-SemiBold.ttf'),
      NotoSansJPThin: require('../assets/fonts/NotoSansJP-Thin.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (FontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [FontsLoaded]);


    if(!FontsLoaded) return null;
    return (
      <Stack onLayout={onLayoutRootView} screenOptions={{headerShown: false}}/>
    )
}

export default function Layout() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}