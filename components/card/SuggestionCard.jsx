import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS, images }  from '../../constants'

export default function SuggestionCard() {
  return (
    <TouchableOpacity style={styles.container}>
        <ImageBackground
            source={{ uri:'https://images.saymedia-content.com/.image/t_share/MTk3MjQ3NTQ5MzUyOTc3NzI3/romantic-poetry-definition-characteristics.png'}}
            style={styles.imageIcon}
        >
            <View style={styles.dateContainer}>
                <Text style={styles.dateDay}>12</Text>
                <Text style={styles.dateMonth}>Jul</Text>
            </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Impressionable Poetry: National Theatre</Text>
            <View style={styles.detailsSubtitle}>
                <View style={styles.locationContainer}>
                    <icons.MapPinSmallIcon/>
                    <Text style={styles.location}>National Theatre, KLA</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>Free</Text>
                </View>
            </View>
        </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: COLORS.white,
    padding:12,
    borderRadius:16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#111827",
    gap:12,
    shadowColor: "#111827",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
},
imageIcon: {
    width: 88,
    height:96,
    borderRadius:12,
    paddingTop:8,
    paddingLeft:8,
    overflow: 'hidden',
},
dateContainer: {
    padding:4,
    backgroundColor:COLORS.white,
    borderRadius:8,
    width:32,
    height:32,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
},
dateDay: {
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:700,
    fontSize:12,
    lineHeight:17,
    color:COLORS.grayBase
},
dateMonth: {
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:500,
    fontSize:8,
    lineHeight:12,
    color:COLORS.gray400
},
detailsContainer: {
    flexDirection: 'column',
    gap:16,
    width:'70.5%'
},
detailsTitle:{
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight:700,
    fontSize:14,
    color: COLORS.grayBase,
},
detailsSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    fontSize:12
},
locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:4
},
location:{
    fontFamily:FONTS.NotoSansJPRegular,
    fontWeight:500,
    color: COLORS.gray400,
    fontSize:12,

},
price: {
    paddingHorizontal:17,
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
