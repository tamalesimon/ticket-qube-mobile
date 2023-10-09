import React from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, ICONS } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";

const ResetSuccess = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View>
                <View style={{ flexDirection: 'column', gap: 8, marginTop: 100 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/images/IllustrationSuccessReset.png')} resizeMode='contain' />
                        <View style={{ alignItems: 'center', width: 292, marginTop: 32 }}>
                            <Text style={{ fontFamily: FONTS.NotoSansJPRegular, fontWeight: 700, fontSize: 20, textAlign: 'center', width: 292 }}>You have successfully changed your password</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 320 }}>
                        <GenericButton bgColor={"primaryBase"} label={"Login"} fontColor={"white"} onPress={() => navigation.navigate('signin')} />
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
        marginTop: 32,
        marginBottom: 24
    },
    inputBox: {
        borderRadius: 16,
        width: 56,
        height: 56,
        backgroundColor: COLORS.gray50,
        marginRight: 11.75
    },
    inputText: {
        paddingHorizontal: 21,
        paddingVertical: 10,
        textAlign: 'center',
        // borderColor:COLORS.primaryBase,
        borderRadius: 16,
        // borderWidth: 1,
    },
    inputFocus: {
        borderColor: COLORS.primaryBase,
    },
    resendCode: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: 14,
        color: COLORS.primaryBase,
    },
    message: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.gray400
    },
    messageEmail: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: 14,
        color: COLORS.secondaryBase
    }
})