import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants'
import { checkImageURL, returnDateDay, returnDateMonth, moneyFormat, shortenEventName } from '../../utils/utils';
import useImageErrorHandler from '../../hooks/useImageErrorHandler'

export default function SuggestionCard({ item, selectedEvent, handleEventClicked }) {
    const [imageSource, handleImageError] = useImageErrorHandler(item?.imageUrl)
    return (
        <TouchableOpacity style={styles.container} onPress={handleEventClicked}>
            <ImageBackground
                source={{ uri: checkImageURL(imageSource) ? imageSource : '../../assets/images/no-image.png' }}
                style={styles.imageIcon}
                onError={handleImageError}
            >
                <View style={styles.dateContainer}>
                    <Text style={styles.dateDay}>{returnDateDay(item.startTime)}</Text>
                    <Text style={styles.dateMonth}>{returnDateMonth(item.startTime)}</Text>
                </View>
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>{item.name}</Text>
                <View style={styles.detailsSubtitle}>
                    <View style={styles.locationContainer}>
                        <ICONS.MapPinSmallIcon />
                        <Text style={styles.location}>{shortenEventName(item.location)}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{moneyFormat(item.tickets[1].currency, item.tickets[1].price)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 122,
        backgroundColor: COLORS.gray50,
        padding: 12,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginHorizontal: 2,
        // zIndex: 99,
        gap: 12,
        overflow: 'hidden',
        // shadowColor: "white",
        // shadowOffset: {
        //     width: 0,
        //     height: 18,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 20.00,
        // elevation: 24
    },
    imageIcon: {
        width: 88,
        height: 96,
        borderRadius: 12,
        paddingTop: 8,
        paddingLeft: 8,
        overflow: 'hidden',
    },
    dateContainer: {
        padding: 4,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        width: 32,
        height: 32,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateDay: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 17,
        color: COLORS.grayBase
    },
    dateMonth: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500,
        fontSize: 8,
        lineHeight: 12,
        color: COLORS.gray400
    },
    detailsContainer: {
        flexDirection: 'column',
        gap: 16,
        width: '70.5%'
    },
    detailsTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 700,
        fontSize: 14,
        color: COLORS.grayBase,
    },
    detailsSubtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 12,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    location: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500,
        color: COLORS.gray400,
        fontSize: 12,
        // width: 140

    },
    price: {
        // paddingHorizontal: 17,
        padding: 4,
        backgroundColor: COLORS.primary100,
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    priceText: {
        fontFamily: FONTS.NotoSansJPRegular,
        color: COLORS.primaryBase,
        fontWeight: 500,
        fontSize: 12
    }
})
