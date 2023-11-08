import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import DropDown from '../../components/inputField/Dropdown';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import PopularLocations from './PopularLocations';
import { Footer } from '../event/components';

export default function DateofBirth({ navigator }) {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 23 }}>
            <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                <View style={{ flexDirection: 'column',  }}>
                    <Text style={{ ...globalStyles.Heading4, textAlign: 'left', }} >Enter your date of Birth</Text>
                    <Text style={styles.subComment}>Please make sure you're above the age of 18 years.</Text>
                </View>
                <View style={{ marginTop: 24, gap: 12 }}>
                    <InputField
                        placeholder="DD/MM/YYYY"
                        placeholderTextColor={COLORS.gray400}
                        inputType={'DOB'}
                    />

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
            <Footer label={"Next"} handleClickButton={() => navigation.navigate('ResetSuccess')} />
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
    }
})
