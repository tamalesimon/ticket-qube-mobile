import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import { useSelector, useDispatch } from 'react-redux';
import { addUserInterest } from "../../redux/interestSlice"
import globalStyles from '../../styles/globalStyles';
import { Footer } from '../event/components';

export default function PickInterest() {
    const dispatch = useDispatch()
    const { interests, selectedInterests, loading, error } = useSelector(state => state.interests)
    const [selectedItems, setSelectedItems] = useState([])
    const [interest, setInterest] = useState([])


    const handlePress = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i !== item))
            setInterest(interest.filter((i) => i.categoryId !== item.id))
        } else {
            setSelectedItems([...selectedItems, item])
            setInterest([...interest, { categoryId: item.id }])
        }
    }

    useEffect(() => {
        console.log("my selected interests: ", selectedItems)
        console.log(interest)
    }, [selectedItems]);

    const handleAddInterests = () => {
        dispatch(addUserInterest(interest))
            // .then(() => {
            //     navigation.navigate('NavigationTabs')
            // }).catch(err => console.log(err))
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
                    {interests.map((item) => {
                        const isSelected = selectedItems.includes(item)
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => handlePress(item)}
                                style={[styles.listItem, isSelected && { borderColor: COLORS.primaryBase, flexDirection: 'row', alignItems: 'center', gap: 8 }
                                ]}>
                                {isSelected ? <ICONS.CheckIcon /> : <ICONS.DotIcon />}
                                <>
                                    <Text style={[styles.listText, isSelected && { color: COLORS.primaryBase }]}>{item.name}</Text>
                                </>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <Footer label={"Finish"} handleClickButton={handleAddInterests} />
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
        // justifyContent: 'center'
    },
    listItem: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.gray200,
        // paddingVertical: 8,
        paddingHorizontal: 16,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8
    },
    listText: {
        color: COLORS.grayBase,
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14
    }
})
