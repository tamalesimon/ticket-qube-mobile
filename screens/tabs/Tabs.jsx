import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'
import { HomeTabs, Explore, Favorites, Tickets, Profile } from './index'
import { icons, COLORS, FONTS, FONTSIZE } from '../../constants';
import { HeaderLeft, HeaderRight, ExploreLeft, ExploreRight, VerticalDots } from '../../components';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            labelStyle: { paddingBottom: 12 },
        }}
        initialRouteName='Home'
        >
      <Tab.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    ...screenOptions,
                    headerTitleStyle: {
                    display: "none", // hide the header title
                    },
                    tabBarIcon: ({focused}) => (
                            focused ? <icons.HomeIconActive/> : <icons.HomeIcon/>
                    )
                    ,
                    headerLeft: () => (
                        <View style={{ marginLeft:24, alignItems: 'center', justifyContent: 'center'}}>
                            <HeaderLeft/>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight:24}}>
                            <HeaderRight/>
                        </View>
                    ),
                }}
                />
      <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    ...screenOptions,
                    tabBarIcon: ({focused}) => (
                            focused ? <icons.SearchIconActive/> : <icons.SearchIcon/>
                    ),
                    headerLeft: () => (
                        <View style={{ marginLeft:24, alignItems: 'center', justifyContent: 'center'}}>
                            <ExploreLeft/>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight:24}}>
                            <ExploreRight/>
                        </View>
                    ),
                    headerTitle: 'Explore', //
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontFamily: FONTS.NotoSansJPBold,  fontWeight:700}
                }}
                 />
      <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    ...screenOptions,
                    tabBarIcon: ({focused}) => (
                        focused ? <icons.HeartIconActive/> : <icons.HeartIcon/>
                    ),
                    headerLeft: () => (
                        <View style={{ marginLeft:24, alignItems: 'center', justifyContent: 'center'}}>
                            <ExploreLeft/>
                        </View>
                    ),
                    headerTitle: 'Favorites', //
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontFamily: FONTS.NotoSansJPBold,  fontWeight:700}
                }}
                />
      <Tab.Screen
                name="Tickets"
                component={Tickets}
                options={{
                    ...screenOptions,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.TicketIconActive/> : <icons.TicketIcon/>}
                        </View>
                    ),
                    headerLeft: () => (
                        <View style={{ marginLeft:24, alignItems: 'center', justifyContent: 'center'}}>
                            <ExploreLeft/>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight:24}}>
                            <VerticalDots/>
                        </View>
                    ),
                    headerTitle: 'Tickets', //
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontFamily: FONTS.NotoSansJPBold,  fontWeight:700}
                }}
                />
      <Tab.Screen name="Profile" component={Profile}
                options={{
                    ...screenOptions,
                    
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.ProfileIconActive/> : <icons.ProfileIconCircle/>}
                        </View>
                    ),
                    headerLeft: () => (
                        <View style={{ marginLeft:24, alignItems: 'center', justifyContent: 'center'}}>
                            <ExploreLeft/>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight:24}}>
                            <VerticalDots/>
                        </View>
                    ),
                    headerTitle: 'Profile', //
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontFamily: FONTS.NotoSansJPBold,  fontWeight:700}
                }}
      />
    </Tab.Navigator>
  );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: COLORS.white, // make the header transparent
        elevation: 0, // remove the shadow on Android
        borderBottomWidth: 0, // remove the border bottom on iOS
      },
      headerShadowVisible:false,
      tabBarActiveTintColor:COLORS.primaryBase,
      tabBarStyle: {
        height: 70,
        paddingTop:12
      }
}