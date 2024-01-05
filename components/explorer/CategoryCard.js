import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants';
import artwork from '../../assets/patterns/Artboard 6.png';


const CategoryCard = ({ cardColor, title, second }) => {
    const cardTitle = "Art & Crafts";
    const titleParts = title?.split("&");
    return (
        <TouchableOpacity style={{ flexDirection: 'row' }}>
            <View style={{ ...styles.container, backgroundColor: cardColor }}>
                <View>
                    <Text style={{ ...styles.cardTitle }}>
                        {titleParts.map((part, index) => (
                            <React.Fragment key={index}>
                                <Text>{part.trim()} {"\n"}{index === 0 && <Text style={styles.cardTitle}>&</Text>} </Text>
                            </React.Fragment>
                        ))}
                    </Text>
                </View>
                <View style={{ ...styles.cardTicker, backgroundColor: second }}>
                    <Text style={{ ...styles.cardSubtitle, }}>12 upcoming events</Text>
                </View>
                <View><Image source={{ uri: '../../assets/patterns/Artboard 6.png' }} style={{ resizeMode: "center" }} /></View>
            </View>

        </TouchableOpacity>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: 171,
        padding: 16,
        // gap: 24,
        backgroundColor: "#2DD4BF",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    cardTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 24,
        color: COLORS.white,
        lineHeight: 36,
        letterSpacing: -0.2
    },
    cardTicker: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#2ACBB7",
        alignSelf: 'flex-start'
    },
    cardSubtitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        color: COLORS.white,
        lineHeight: 15,
    }
})