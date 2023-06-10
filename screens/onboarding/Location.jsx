import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import PopularLocations from './PopularLocations'

export default function Location({navigator}) {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1, padding:23}}>
            <View style={{ flexDirection: 'column',  gap:8, marginTop:32 }}>
                <View style={{flexDirection: 'column', width:327,}}>
                    <Text style={{...globalStyles.Heading4, textAlign:'left', }} >Choose your location</Text>
                    <Text style={styles.subComment}>Let's find you that unforgettable event. Choose a location below to get started.</Text>
                </View>
                <View style={{ marginTop:24, marginBottom:16, }}>
                        <InputField
                            placeholder="Search event based on location"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.MapPin}
                            inputType={'text'}
                        />
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap:12, borderRadius: 16, borderStyle: 'dashed', borderWidth: 1, paddingVertical:17.5, borderColor:COLORS.gray200, width:'100%', paddingHorizontal:69.5, alignItems: 'center'}}>
                                <icons.CurrentLocationIcon/>
                                <Text>Use my current location</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width:'100%'}}>
                            <PopularLocations/>
                        </View>
                </View>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:400,
        fontSize:14,
        color:COLORS.gray400
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:500,
        fontSize:14,
        color:COLORS.primaryBase
    }
})
