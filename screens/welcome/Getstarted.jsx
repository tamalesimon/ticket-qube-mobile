import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, ICONS } from '../../constants';
const GenericButton = React.lazy(() => import('../../components/buttons/genericButton'))

import globalStyles from '../../styles/globalStyles';
import Display from '../../utils/Display';

export default function GetStarted({ navigation }) {

  return (
    <ImageBackground source={require('../../assets/images/get-started.png')} style={{ flex: 1, height: "100%", width: "100%" }} resizeMode="cover">
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <View>
          <View style={{ flexDirection: 'column', gap: 8, marginTop: Display.setHeight(22) }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: Display.setHeight(8) }}>
              <Image source={require('../../assets/images/Artboard.png')} resizeMode='contain' style={{ width: "40%" }} />
            </View>
            <View>
              <View style={{ gap: 12, }}>
                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Continue with Email"} onPress={() => navigation.navigate('Signin')} shouldCenterButton />
                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="white" label={"Continue with Google"} iconName={"GoogleIcon"} shouldCenterButton />
                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="white" label={"Continue with Apple"} iconName={"AppleIcon"} shouldCenterButton />
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 40 }}>
                <Text style={{ fontFamily: FONTS.NotoSansJPRegular, fontWeight: 400, color: COLORS.gray100, marginRight: 2 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={{ fontFamily: FONTS.NotoSansJPRegular, fontWeight: 700, color: COLORS.primaryBase }}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
