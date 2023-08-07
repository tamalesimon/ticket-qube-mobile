import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';

export default function SectionHeaders({ sectionTitle }) {
    return (
        <View style={styles.headers}>
            <Text style={styles.headerTitle}>{sectionTitle}</Text>
            <TouchableOpacity>
                <Text style={styles.headerSubTitle}>See All</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.grayBase,
        fontWeight: 700
    },
    headerSubTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        color: COLORS.gray400
    },
})
