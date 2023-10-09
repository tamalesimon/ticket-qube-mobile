import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS, COLORS, ICONS } from '../../../constants'

const OrderSummary = () => {
    return (
        <View style={styles.order_summary}>
            <Text style={styles.order_section_title}>Order summary</Text>
            <View style={styles.order_items}>
                <View style={styles.order_summary_item}>
                    <Text style={styles.order_item_text}>1x Premium price</Text>
                    <Text style={styles.order_item_money}>UGX 150,000</Text>
                </View>
                <View style={styles.order_summary_item}>
                    <Text style={styles.order_item_text}>Subtotal</Text>
                    <Text style={styles.order_item_money}>UGX 150,000</Text>
                </View>
                <View style={styles.order_summary_item}>
                    <Text style={styles.order_item_text}>Fees</Text>
                    <Text style={styles.order_item_money}>UGX 2,000</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.order_summary_item}>
                    <Text style={styles.order_total}>Total</Text>
                    <Text style={styles.order_total_money}>UGX 152,000</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderSummary;

const styles = StyleSheet.create({
    order_summary: {
        gap: 16
    },
    order_items: {
        gap: 8,
        borderColor: COLORS.gray100,
        borderRadius: 16,
        borderWidth: 1,
        padding: 16
    },
    order_item_text: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
        color: COLORS.gray400
    },
    order_item_money: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        // fontStyle:'bold',
        color: COLORS.grayBase
    },
    order_summary_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    order_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    order_section_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        fontStyle: 'normal'
    },
    order_total: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: COLORS.gray400
    },
    order_total_money: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 27,
        color: COLORS.grayBase
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: COLORS.gray200,
        borderStyle: 'dashed',
        marginVertical: 16
    }
})