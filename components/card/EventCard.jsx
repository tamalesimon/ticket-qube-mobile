import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS, images }  from '../../constants'

export default function EventCard() {
return (
    <View>
        <ImageBackground
            source={{uri: 'https://img.freepik.com/premium-photo/abstract-futuristic-contemporary-modern-watercolor-art_93314-4483.jpg'}}
            style={styles.container}
        >
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>29</Text>
                <Text style={styles.dateMonth}>Sep</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Contemporary Art Festival: Ndere Center 29-30</Text>
                <View style={styles.detailsSubtitle}>
                    <Text style={styles.locationTime}>Kisaasi - 10:00 PM</Text>
                    <TouchableOpacity style={styles.price}>
                        <Text style={styles.priceText}>UGX 50k - 2M</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    height: 290,
    width:250,
    borderRadius:16,
    overflow: 'hidden',
    padding:12,
    shadowColor: "#111827",
shadowOffset: {
    width: 0,
    height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24
},
dateContainer: {
    position:'absolute',
    left:'85%',
    top:'4.8%',
    right:'4.8%',
    bottom:'84.14%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:4,
    backgroundColor:COLORS.white,
    borderRadius:10,
    width:48,
},
dateText:{
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:700,
    fontSize:14,
    color:COLORS.grayBase,
    lineHeight:21,
},
dateMonth:{
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:400,
    fontSize:12,
    color:COLORS.gray400,
    lineHeight:15
},
detailsContainer: {
    position:'absolute',
    left:'4.8%',
    right:'4.8%',
    top:'59.31%',
    bottom:'4.14%',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:12,
    backgroundColor:COLORS.white,
    borderRadius:16,
    gap:8,
    shadowColor: "#111827",
    shadowOffset: {
    width: 0,
    height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7
},
detailsTitle:{
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight:700,
    fontSize:14,
    color: COLORS.grayBase
},
detailsSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    fontSize:12
},
locationTime:{
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:400,
    color: COLORS.gray400,
    fontSize:12
},
price: {
    paddingHorizontal:13,
    paddingVertical:7,
    backgroundColor:COLORS.primary100,
    borderRadius:8
},
priceText: {
    fontFamily:FONTS.NotoSansJPRegular,
    color: COLORS.primaryBase,
    fontWeight:500,
    fontSize:12
}

})
