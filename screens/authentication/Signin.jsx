import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";

import globalStyles from '../../styles/globalStyles';
import { color } from "react-native-reanimated";


const Signin = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
        <View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap:8, marginTop:32 }}>
                <Text style={globalStyles.Heading4} >Hello Again!</Text>
                <Text style={{ fontSize:FONTSIZE.medium, color:COLORS.gray400, fontFamily:FONTS.NotoSansJPRegular, textAlign:"center", fontWeight:400, width:261, marginTop:8,}}>Welcome back, you've been missed</Text>
                <View style={{ marginTop:24, marginBottom:16 }}>
                    <View>
                        <icons.EmailIcon style={{ position: 'absolute', top:16, left:20}} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            style={{ flex:1, backgroundColor:COLORS.gray50, borderRadius:16, height:56, width:327, padding:16, paddingLeft:50,  marginBottom:16}}/>
                    </View>
                    <View>
                        <icons.LockIcon style={{ position: 'absolute', top:16, left:20}} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            secureTextEntry={showPassword}
                            style={{ flex:1, backgroundColor:COLORS.gray50,  borderRadius:16, height:56, width:327, padding:16, paddingLeft:50, marginBottom:16}}/>
                        <TouchableOpacity onPress={toggleShowPassword} style={{position:'absolute', top:16, right:20}}>
                            {showPassword ?  <icons.EyeOffIcon/> : <icons.EyeIcon/>}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{ fontSize: FONTSIZE.medium, textAlign:'right', color: COLORS.grayBase, fontFamily: FONTS.NotoSansJPRegular, lineHeight:21, fontWeight:700 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop:24}}>
                        <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign In"}/>
                        <Text style={{ fontFamily:FONTS.NotoSansJPRegular, color:COLORS.gray400, fontWeight:400, fontSize:FONTSIZE.medium, textAlign: "center", marginTop:24, marginBottom:24}}>Or</Text>
                        <View style={{gap:12}}>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Google"}  icon={icons.GoogleIcon}/>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Apple"}  icon={icons.AppleIcon}/>
                        </View>
                        <View style={{ marginTop:50}}>
                        <Text style={{ width:305, textAlign: "center", fontSize:FONTSIZE.xsmall, color:COLORS.gray400, fontFamily:FONTS.NotoSansJPRegular }}>
                         By sign in, I accept the Terms of Service and Community Guidelines and have read Privacy Policy.
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    inputText: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: FONTSIZE.medium,
        color: COLORS.grayBase
    }
})