import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import { DummyData } from '../../utils/DummyData';

export default function PickInterest() {
    const [selectedItems, setSelectedItems] = useState([])

    const handlePress = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i !== item))
        } else {
            setSelectedItems([...selectedItems, item])
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                <View style={{ flexDirection: 'column', width: 327, }}>
                    <Text style={{ ...globalStyles.Heading4, textAlign: 'left', }} >Pick your interest</Text>
                    <Text style={styles.subComment}>Pick your event interest to find events in your favourite categories.</Text>
                </View>
                <View style={{ marginTop: 24, marginBottom: 16, }}>
                    <InputField
                        placeholder="Search event based on interest"
                        placeholderTextColor={COLORS.gray400}
                        icon={ICONS.SearchIcon}
                        inputType={'text'}
                    />
                </View>
                <View style={styles.listContainer}>
                    {DummyData.map((item) => {
                        const isSelected = selectedItems.includes(item)
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => handlePress(item)}
                                style={[styles.listItem, isSelected && { borderColor: COLORS.primaryBase, flexDirection: 'row', alignItems: 'center', gap: 8 }
                                ]}>
                                {isSelected && <ICONS.CheckIcon />}
                                <Text style={[styles.listText, isSelected && { color: COLORS.primaryBase }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ marginTop: 95 }}>
                    <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Finish"} onPress={() => navigation.navigate('Home')} />
                </View>
            </View>
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
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center'
    },
    listItem: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    listText: {
        color: COLORS.grayBase,
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14
    }
})
