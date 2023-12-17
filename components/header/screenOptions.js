import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'expo-router'
import { ICONS, FONTS, COLORS } from '../../constants'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSheet } from "../../redux/layoutSlice"
import HeaderLeft from './home/HeaderLeft'
import HeaderRight from './home/HeaderRight'
import ExploreRight from './explore/ExploreRight'
import BackLeft from './explore/BackLeft'
import VerticalDots from './VerticalDotsIcon'
import LikesHeart from '../../screens/event/components/LikesHeart'
import Upload from '../../screens/event/components/Upload'
import CircleQuestion from '../../screens/event/components/CircleQuestion'
import CloseIcon from '../../screens/event/components/CloseIcon'

export const screenOptions = {
  // headerShown: false,
  headerStyle: {
    backgroundColor: COLORS.white, //turn it back to white
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  tabBarActiveTintColor: COLORS.primaryBase,
  tabBarStyle: {
    height: 70,
    paddingTop: 12,
    borderTopWidth: 0, // Set the top border width to 0
    borderTopColor: 'transparent', // Set the top border color to transparent
  },
  tabBarLabelStyle: {
    paddingBottom: 12,
  },
}

export const homeScreenOptions = {
  ...screenOptions,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  headerTitle: '',
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabBarIconContainer}>
      {focused ? <ICONS.HomeIconActive /> : <ICONS.HomeIcon />}
    </View>
  ),
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <HeaderLeft />
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerButtonContainer}>
      <HeaderRight />
    </View>
  ),
}

export const exploreScreenOptions = {
  ...screenOptions,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabBarIconContainer}>
      {focused ? <ICONS.SearchIconActive /> : <ICONS.SearchIcon />}
    </View>
  ),
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerButtonContainer}>
      <ExploreRight />
    </View>
  ),
  headerTitle: "Explore",
  headerTitleAlign: "center",
}

export const favoritesScreenOptions = {
  ...screenOptions,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabBarIconContainer}>
      {focused ? <ICONS.HeartIconActive /> : <ICONS.HeartIcon />}
    </View>
  ),
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerTitle: 'Favorites',
  headerTitleAlign: 'center',
}

export const ticketsScreenOptions = {
  ...screenOptions,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabBarIconContainer}>
      {focused ? <ICONS.TicketIconActive /> : <ICONS.TicketIcon />}
    </View>
  ),
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerButtonContainer}>
      <VerticalDots />
    </View>
  ),
  headerTitle: 'Tickets',
  headerTitleAlign: 'center',
}

export const profileScreenOptions = {
  ...screenOptions,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabBarIconContainer}>
      {focused ? <ICONS.ProfileIconActive /> : <ICONS.ProfileIconCircle />}
    </View>
  ),
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerButtonContainer}>
      <VerticalDots />
    </View>
  ),
  headerTitle: 'Profile',
  headerTitleAlign: 'center',
}

export const eventDetailsScreenOptions = {
  ...screenOptions,
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerRight: () => {
    return (
      <View style={styles.headerButtonContainer}>
        <View style={styles.sharedContainer}>
          <Upload handlePress={() => alert("Upload clicked")} />
          <LikesHeart handlePress={() => alert("You have liked this event")} />
        </View>
      </View>
    )
  },
  headerTitle: '',
  headerTitleAlign: 'center',
}

export const genericScreenOptions = {
  headerStyle: {
    backgroundColor: COLORS.gray50,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    // fontWeight: '700',
    lineHeight: 24,
    // backgroundColor: COLORS.gray500,
    color: COLORS.grayBase
  },
  headerLeft: () => {
    const navigation = useNavigation();
    return (
      <View style={styles.headerButtonContainer}>
        <BackLeft onPress={() => navigation.goBack()} />
      </View>
    );
  },
  headerTitleAlign: 'center',
}

export const genericNoTitleScreenOptions = {
  headerStyle: {
    backgroundColor: COLORS.white,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    // fontWeight: '700',
    lineHeight: 24,
    // backgroundColor: COLORS.gray500,
    color: COLORS.grayBase
  },
  headerLeft: () => {
    const navigation = useNavigation();
    return (
      <View style={styles.headerButtonContainer}>
        <BackLeft onPress={() => navigation.goBack()} />
      </View>
    );
  },
  headerTitle: '',
  headerTitleAlign: 'center',
}

export const WhiteBGScreenOptions = {
  headerStyle: {
    backgroundColor: COLORS.white,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    // fontWeight: '700',
    lineHeight: 24,
    // backgroundColor: COLORS.gray500,
    color: COLORS.grayBase
  },
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerTitleAlign: 'center',
}

export const HeadersWithClose = {
  headerStyle: {
    backgroundColor: COLORS.white,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    // fontWeight: '700',
    lineHeight: 24,
    // backgroundColor: COLORS.gray500,
    color: COLORS.grayBase
  },
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <CloseIcon />
    </View>
  ),
  headerTitleAlign: 'center',
  headerTitle: ''
}

export const SelectPaymentsScreenOptions = {
  headerStyle: {
    backgroundColor: COLORS.white,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    // fontWeight: '700',
    lineHeight: 24,
    // backgroundColor: COLORS.gray500,
    color: COLORS.grayBase
  },
  headerLeft: () => (
    <View style={styles.headerButtonContainer}>
      <BackLeft />
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerButtonContainer}>
      <CircleQuestion />
    </View>
  ),
  headerTitleAlign: 'center',
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    paddingTop: 12,
  },
  tabBarLabelStyle: {
    paddingBottom: 12,
  },
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonContainer: {
    marginHorizontal: 24, //24px
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    fontFamily: FONTS.NotoSansJPBold,
    fontWeight: '700',
  },
  sharedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
