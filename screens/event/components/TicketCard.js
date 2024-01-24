import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { COLORS, FONTS, ICONS } from '../../../constants';
import { moneyFormat } from '../../../utils/utils';
import DashedLine from 'react-native-dashed-line';
import { setTotalTicketAmount } from '../../../redux/events/eventSlice';

const TicketCard = ({ item, title, handleTicketSelect, selectedTicket, setTicketAmount }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [showmore, setShowmore] = useState(false);
  const currency = item?.currency
  const price = item?.price

  const handleShowMore = () => {
    setShowmore(!showmore)
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  const handleDecrement = async () => {
    if (selectedTicket === item.ticketId && count > 0) {
      setCount((prevCount) => prevCount - 1)
      dispatch(setTotalTicketAmount(price * (count - 1)))
    }
  }
  const handleIncrement = async () => {
    if (selectedTicket === item.ticketId) {
      const newCount = count < 10 ? count + 1 : 1;
      setCount(newCount);
      dispatch(setTotalTicketAmount(price * newCount));
    }
  }
  const clicked = { backgroundColor: COLORS.secondaryBase, color: COLORS.white }
  const borderClicked = { borderColor: COLORS.grayBase }
  const notClicked = { backgroundColor: COLORS.gray50 }

  return (
    <View style={[styles.cardContainer, selectedTicket === item.ticketId ? borderClicked : null,
    ]}>
      <TouchableOpacity onPress={handleTicketSelect}>
        <View style={[styles.cardHeader, notClicked, selectedTicket === item.ticketId ? clicked : null]}>
          <Text style={[styles.cardTitle, selectedTicket === item.ticketId ? clicked : '']}>{item?.name}</Text>
          {selectedTicket === item.ticketId ? <ICONS.CheckCircleSelected /> : <ICONS.CheckCircle />}
        </View>
      </TouchableOpacity>
      <View style={styles.cardDetails}>
        <View style={styles.cardSpecifics} >
          <Image style={styles.imageRect} source={require('../../../assets/images/test_image.jpg')} resizeMode='cover' />
          <View>
            <View style={{ paddingRight: 2 }}>
              <Text style={styles.eventTitle}>{title}</Text>
            </View>
            <View style={styles.priceSpots}>
              <Text style={styles.spotsLeft}>10 spots left</Text>
              <Text style={styles.price}>{moneyFormat("ugx", price)}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 16.5 }}>
          <DashedLine dashLength={10} dashThickness={1} dashColor={"#EBEEF2"} />
        </View>
        <View style={styles.showBenefitsCounter}>
          <TouchableOpacity onPress={handleShowMore} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            {
              showmore ? <ICONS.ChevronDownIcon /> : <ICONS.CheronRightIcon />
            }
            <Text style={styles.showBenefits}>Show benefits</Text>
          </TouchableOpacity>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={handleDecrement}>
              <ICONS.MinusIcon />
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={handleIncrement}>
              <ICONS.PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        {showmore && <View style={styles.showDetails}>
          <Text>
            {item?.description}
          </Text>
        </View>}
      </View>
    </View>
  )
}

export default TicketCard

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray100,
    marginBottom: 16
  },
  cardHeader: {
    backgroundColor: COLORS.gray50,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageRect: {
    height: 72,
    width: 72,
    borderRadius: 12,
    // marginRight: 16,
  },
  cardTitle: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 12,
    color: COLORS.grayBase,
    fontWeight: 500,
    lineHeight: 18
  },
  cardSpecifics: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  eventTitle: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.grayBase,
    lineHeight: 21,
    width: 200
  },
  priceSpots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  spotsLeft: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.gray400,
    lineHeight: 18,
  },
  price: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.grayBase,
    lineHeight: 21,
  },
  cardDetails: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24
  },
  showDetails: {
    marginTop: 16
  },
  counterContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  dividerLine: {
    borderWidth: 1,
    backgroundColor: COLORS.gray100,
    // marginVertical:33
  },
  dividerContainer: {
    marginVertical: 16.5,
    alignItems: 'center',
    backgroundColor: COLORS.gray100,
  },
  showBenefitsCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showBenefits: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 12,
    fontWeight: 500,
    color: COLORS.primaryBase,
    lineHeight: 18,
  }
})