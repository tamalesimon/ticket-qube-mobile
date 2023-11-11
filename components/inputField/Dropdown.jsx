import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import { set } from 'react-native-reanimated';

export default function DropDown({ isClicked, toggleDropdown, selectedLocation }) {

    return (
        <View style={{ ...styles.container }}>
            <TouchableOpacity style={styles.touchable} onPress={toggleDropdown}>
                <View>
                    <Text style={styles.textInput}>{selectedLocation}</Text>
                </View>
                <View style={{ alignContent: 'flex-end' }}>
                    {isClicked ? <ICONS.ChevronDown /> : <ICONS.ChevronUp />}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // alignItems: 'center',

        width: '100%',
        gap: 4

    },
    showIcon: {
        position: 'absolute',
        // top: 20,
        right: 20
    },
    textInput: {
        // marginLeft: 12,
        // height: 40,
        // width: '70%',
        borderRadius: 16,
        borderWidth: 0, // This will remove the border
        borderColor: 'transparent', // This will make the border color transparent
        borderRadius: 0, // This will make the border edges straight
        backgroundColor: 'transparent', // This will make the background color transparent
    },
    textInfocus: {
        color: COLORS.grayBase,
        fontFamily: FONTS.NotoSansJPMedium
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
        // padding: 16,
        backgroundColor: 'white',
        height: 250,
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
