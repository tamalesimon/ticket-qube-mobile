import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import DropDown from '../../components/inputField/Dropdown';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import PopularLocations from './PopularLocations';
import { Footer } from '../event/components';

export default function Location({ navigation }) {

    const countries = [
        { id: 0, country: 'United States Of America' },
        { id: 1, country: 'Uganda' },
        { id: 2, country: 'Kenya' },
        { id: 3, country: 'Tanzania' },
        { id: 4, country: 'The Republic of Congo' },
        { id: 5, country: 'Rwanda' },
    ]
    const [isClicked, setIsClicked] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState("Select Location")
    const [data] = useState(countries)

    useEffect(() => {
        navigation.setOptions({
            // headerShown: !isClicked,
            headerStyle: {
                backgroundColor: isClicked ? '#7F7F7F': 'white'
            }
        });
    }, [isClicked])

    function toggleDropdown() {
        setIsClicked(!isClicked);
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 23 }}>
            <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                <View style={{ flexDirection: 'column', width: 327, }}>
                    <Text style={{ ...globalStyles.Heading4, textAlign: 'left', }} >Please select your country</Text>
                    <Text style={styles.subComment}>Let's find you that unforgettable event. Choose a location below to get started.</Text>
                </View>
                <View style={{ marginTop: 24, gap: 12 }}>
                    <DropDown
                        placeholder="Select country"
                        placeholderTextColor={COLORS.gray400}
                        // icon={ICONS.MapPin}
                        inputType={'text'}
                        isClicked={isClicked}
                        toggleDropdown={toggleDropdown}
                        selectedLocation={selectedLocation}
                    />

                    <Text style={{ marginHorizontal: 24, textAlign: "center", color: COLORS.gray400, fontSize: 14, fontFamily: FONTS.NotoSansJPRegular }}>Or</Text>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 12, borderRadius: 16, borderStyle: 'dashed', borderWidth: 1, padding: 17, borderColor: COLORS.gray200, width: '100%', alignItems: 'center', justifyContent:'center' }}>
                            <ICONS.CurrentLocationIcon />
                            <Text>Use my current location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer label={"Next"} handleClickButton={() => navigation.navigate('FollowOrganiser')} />
            {
                isClicked &&
                <View style={styles.modalBack}>
                    <View style={styles.dropdownArea}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.countryList} onPress={() => {
                                    setSelectedLocation(item.country)
                                    setIsClicked(!isClicked)
                                }}>
                                    <Text>{item.country}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            }
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
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.gray50,
        borderRadius: 16,
        padding: 20,
    },
    dropdownArea: {
        borderRadius: 16,
        position:'absolute',
        top:"30%",
        padding: 16,
        width: "90%",
        backgroundColor: 'white',
        height: 300,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginTop: 10
    },
    countryList: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#E5E7EB',
        backgroundColor: "#F9FAFB",
        padding: 20,
        borderRadius: 16,
        marginBottom: 12

    },
    modalBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})
