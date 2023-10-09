import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { FONTS, COLORS, ICONS } from '../../../constants';

const PaymentMethod = () => {
    return (
        <View style={styles.payment_method}>
            <View style={styles.payment_method_change}>
                <Text style={styles.order_section_title}>Payment method</Text>
                <TouchableOpacity style={styles.change_button}>
                    <Text style={styles.change_button_text}>Change</Text>
                    <ICONS.CheronRightIcon style={{ paddingTop: 3}} />
                </TouchableOpacity>
            </View>
            <View style={styles.payment_method_items}>
                <View>
                    <Text>MoMo</Text>
                    <Text>+256779813251</Text>
                </View>
                <Text>Icon here</Text>
            </View>
        </View>
    )
}

export default PaymentMethod;

const styles = StyleSheet.create({
    payment_method: {
        gap: 16
    },
    payment_method_change: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    change_button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    change_button_text: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: COLORS.primaryBase
    },
    payment_method_items: {
        borderColor: COLORS.gray100,
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    order_section_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        fontStyle: 'normal',
    },
})