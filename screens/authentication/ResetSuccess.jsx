import React from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";

const ResetSuccess = () => {
    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
        <View>
            <View style={{ flexDirection: 'column', alignItems: 'center', gap:8, marginTop:100 }}>
                <Image source={require('../../assets/images/IllustrationSuccessReset.png')} resizeMode='contain'/>
                <View style={{ alignItems: 'center', width:292, marginTop:32 }}>
                    <Text style={{ fontFamily:FONTS.NotoSansJPRegular, fontWeight:700, fontSize:20, textAlign: 'center', width:292 }}>You have successfully changed your password</Text>
                </View>
                <View style={{marginTop:335}}>
                    <GenericButton bgColor={"primaryBase"} label={"Login"} fontColor={"white"}/>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default ResetSuccess

const styles = StyleSheet.create({
    inputText: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: FONTSIZE.medium,
        color: COLORS.grayBase
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:32,
        marginBottom:24
    },
    inputBox:{
        borderRadius: 16,
        width:56,
        height:56,
        backgroundColor: COLORS.gray50,
        marginRight:11.75
    },
    inputText:{
        paddingHorizontal:21,
        paddingVertical:10,
        textAlign: 'center',
        // borderColor:COLORS.primaryBase,
        borderRadius:16,
        // borderWidth: 1,
    },
    inputFocus:{
        borderColor: COLORS.primaryBase,
    },
    resendCode:{
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize:14,
        color: COLORS.primaryBase,
    },
    message:{
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:400,
        fontSize:14,
        color:COLORS.gray400
    },
    messageEmail:{
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize:14,
        color:COLORS.secondaryBase
    }
})