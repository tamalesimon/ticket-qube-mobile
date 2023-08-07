import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router'
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
const GenericButton = React.lazy(() => import('../../components/buttons/genericButton'))

import globalStyles from '../../styles/globalStyles';
import Display from '../../utils/Display';

export default function GetStarted({ navigation }) {
  const router = useRouter();
  return (
    <ImageBackground source={require('../../assets/images/get-started.png')} style={{ flex: 1, height: "100%", width: "100%" }} resizeMode="cover">
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <View>
          <View style={{ flexDirection: 'column', gap: 8, marginTop: Display.setHeight(22) }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: Display.setHeight(28) }}>
              {/* <Text style={globalStyles.Heading5} >Let's Get Started</Text>
              <Text style={{ fontSize: FONTSIZE.medium, color: COLORS.gray400, fontFamily: FONTS.NotoSansJPRegular, textAlign: "center", fontWeight: 400, width: 261, marginBottom: 20 }}>Sign up or log in to see what happening near you.</Text> */}
              {/* <Image source={require('../../assets/Shape.png')} resizeMode='contain' /> */}
              <Image source={require('../../assets/LogoTitle.png')} resizeMode='contain' />
            </View>
            <View>
              <View style={{ gap: 12, }}>
                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Continue with Email"} onPress={() => navigation.navigate('Signin')} />
                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="white" label={"Continue with Google"} icon={icons.GoogleIcon} />
                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="white" label={"Continue with Apple"} icon={icons.AppleIcon} />
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
