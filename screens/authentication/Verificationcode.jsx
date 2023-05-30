import React from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";

import globalStyles from '../../styles/globalStyles';


const Verify = () => {
    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
        <View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap:8, marginTop:32 }}>
                <Image source={require('../../assets/images/verify.png')} resizeMode='contain'/>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop:32 }}>
                    <Text style={{ ...globalStyles.Heading4, fontWeight:700, marginBottom:8}}>Verification Code</Text>
                    <Text style={styles.message}>We have sent the verification code to your email</Text>
                    <Text style={styles.messageEmail}>ta****@gmail.com.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <TextInput style={[globalStyles.Heading4, styles.inputText] }></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={[globalStyles.Heading4, styles.inputText] }></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={[globalStyles.Heading4, styles.inputText] }></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={[globalStyles.Heading4, styles.inputText] }></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={[globalStyles.Heading4, styles.inputText] }></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={{ marginBottom: 180}}>
                        <Text style={styles.resendCode}>Resend code</Text>
                </TouchableOpacity>
                <GenericButton bgColor={"primaryBase"} label={"Verify"} fontColor={"white"}/>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Verify

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