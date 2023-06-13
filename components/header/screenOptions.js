import React from 'react'
import { View, StyleSheet } from 'react-native'
import { icons, FONTS, COLORS } from '../../constants'
import { HeaderLeft, HeaderRight, ExploreLeft, ExploreRight, VerticalDots } from '../../components';

export const screenOptions = {
    headerStyle: {
      backgroundColor: COLORS.white,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerShadowVisible: false,
    tabBarActiveTintColor: COLORS.primaryBase,
    tabBarStyle: {
        height: 70,
        paddingTop: 12,
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
        {focused ? <icons.HomeIconActive /> : <icons.HomeIcon />}
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
        {focused ? <icons.SearchIconActive /> : <icons.SearchIcon />}
      </View>
    ),
    headerLeft: () => (
      <View style={styles.headerButtonContainer}>
        <ExploreLeft />
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
        {focused ? <icons.HeartIconActive /> : <icons.HeartIcon />}
      </View>
    ),
    headerLeft: () => (
        <View style={styles.headerButtonContainer}>
          <ExploreLeft />
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
        {focused ? <icons.TicketIconActive /> : <icons.TicketIcon />}
      </View>
    ),
    headerLeft: () => (
      <View style={styles.headerButtonContainer}>
        <ExploreLeft />
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
        {focused ? <icons.ProfileIconActive /> : <icons.ProfileIconCircle />}
      </View>
    ),
    headerLeft: () => (
      <View style={styles.headerButtonContainer}>
        <ExploreLeft />
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
      marginHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitleStyle: {
      fontFamily: FONTS.NotoSansJPBold,
      fontWeight: '700',
    }
  })
