import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants';
import artwork from '../../assets/patterns/Artboard 6.png';


const CategoryCard = ({ cardColor, title, second }) => {
    const cardTitle = "Art & Crafts";
    const titleParts = title?.split("&");
    return (
        <TouchableOpacity>
            <ImageBackground source={{ uri: ""}} style={{ ...styles.container, backgroundColor: cardColor }}>
                <View>
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
                </View>
                {/* <View>
                    <Image source={{ uri: "../../assets/patterns/Artboard 6.png" }} style={{
                        width: 200,
                        height: 150,
                        // borderRadius: 12,
                        // paddingTop: 8,
                        // paddingLeft: 8,
                        overflow: 'hidden',
                        opacity:0.1
                    }} />
                </View> */}
            </ImageBackground>

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
        flexDirection: "row",
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