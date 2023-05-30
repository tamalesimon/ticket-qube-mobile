import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
const GenericButton  = React.lazy(() => import('../../components/buttons/genericButton'))

import globalStyles from '../../styles/globalStyles';
import Display from '../../utils/Display';

export default function GetStarted({navigation}) {
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor:COLORS.white, flex:1}}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap:8, marginTop:84 }}>
        <Text style={globalStyles.Heading5} >Let's Get Started</Text>
        <Text style={{ fontSize:FONTSIZE.medium, color:COLORS.gray400, fontFamily:FONTS.NotoSansJPRegular, textAlign:"center", fontWeight:400, width:Display.setWidth(261), marginTop:8, marginBottom:20}}>Sign up or log in to see what happening near you.</Text>
        <Image source={require('../../assets/images/illustration.png')} resizeMode='contain'/>
        <View style={{ gap:12, flex:1, alignItems:'flex-start', flexDirection:'column', marginBottom:51,}}>
            <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Continue with Email"} onPress={() => navigation.navigate('Signin')}/>
            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Continue with Google"}  icon={icons.GoogleIcon}/>
            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Continue with Apple"}  icon={icons.AppleIcon}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:20}}>
          <Text style={{fontFamily:FONTS.NotoSansJPRegular, fontWeight:400, lineHeight:24, marginRight:2 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontFamily:FONTS.NotoSansJPRegular, fontWeight:700, lineHeight:24, color:COLORS.primaryBase }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
