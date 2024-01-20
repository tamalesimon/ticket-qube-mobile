import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../constants';
import GenericButton from '../../../components/buttons/genericButton';
import { checkImageURL } from '../../../utils/utils';

export default function EventShareStrip({ data }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imageRect} resizeMode='cover' source={{ uri: checkImageURL(data?.picture) ? data.picture : require('../../../assets/images/test_image.jpg') }} />
            <View style={{ gap: 8 }}>
                <Text style={styles.eventTitle}>{data?.name}</Text>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.eventLinkContainer}>
                        <Text style={styles.eventLink}>https://qube.event...</Text>
                    </View>
                    <TouchableOpacity style={styles.copyLinkContainer}>
                        <ICONS.LinkIcon />
                        <Text style={styles.copyLink}>Copy link</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageRect: {
        height: 80,
        width: 80,
        borderRadius: 12,
        marginRight: 16,
    },
    eventTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 700,
        color: COLORS.grayBase,
        lineHeight: 21,
    },
    eventLinkContainer: {
        padding: 8,
        backgroundColor: COLORS.gray50,
        borderRadius: 8,
    },
    eventLink: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        color: COLORS.gray400,
        lineHeight: 18,
    },
    copyLinkContainer: {
        padding: 8,
        flexDirection: 'row',
        borderColor: COLORS.primaryBase,
        borderWidth: 1,
        borderRadius: 8,
        gap: 4,
        alignItems: 'center'

    },
    copyLink: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        color: COLORS.primaryBase,
        lineHeight: 18,
    },

    line: {
        width: 50,
        height: 4,
        backgroundColor: COLORS.gray100,
        borderRadius: 20,
    },
})