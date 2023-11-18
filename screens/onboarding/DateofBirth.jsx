import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import DropDown from '../../components/inputField/Dropdown';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import PopularLocations from './PopularLocations';
import { Footer } from '../event/components';
import { TextInput } from 'react-native-gesture-handler';

export default function DateofBirth({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 23 }}>
            <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                <View style={{ flexDirection: 'column', }}>
                    <Text style={{ ...globalStyles.Heading4, textAlign: 'left', }} >Enter your date of Birth</Text>
                    <Text style={styles.subComment}>Please tell us how old you are.</Text>
                </View>
                <View style={{ marginTop: 24, gap: 12, flexDirection: 'row' }}>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} placeholder='DD' />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} placeholder='MM' />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} placeholder='YYYY' />
                    </View>
                    {/* <Text style={{ marginHorizontal: 24, textAlign: "center", color: COLORS.gray400, fontSize: 14, fontFamily: FONTS.NotoSansJPRegular }}>Or</Text>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 12, borderRadius: 16, borderStyle: 'dashed', borderWidth: 1, padding: 24, borderColor: COLORS.gray200, width: '100%', paddingHorizontal: 69.5, alignItems: 'center' }}>
                            <ICONS.CurrentLocationIcon />
                            <Text>Use my current location</Text>
                        </View>
                    </TouchableOpacity> */}
                    {/* <View style={{ width: '100%' }}>
                        <PopularLocations />
                    </View> */}
                </View>
            </View>
            <Footer label={"Next"} handleClickButton={() => navigation.navigate('Location')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.gray400
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500,
        fontSize: 14,
        color: COLORS.primaryBase
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray50,
        borderRadius: 16,
        padding: 20,
        width: '21%'
    },
    textInput: {
        // marginLeft: 12,
        // height: 40,
        flex: 1,
        textAlign: 'center',
        width: '100%',
        borderRadius: 16,
        borderWidth: 0, // This will remove the border
        borderColor: 'transparent', // This will make the border color transparent
        borderRadius: 0, // This will make the border edges straight
        backgroundColor: 'transparent', // This will make the background color transparent
    },
})
