import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'
import { HomeTabs, Explore, Favorites, Ticket, Profile } from './index'
import { icons, COLORS, FONTS, FONTSIZE } from '../../constants';
import { HeaderLeft, HeaderRight } from '../../components';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
        // screenOptions={{
        //     headerShown: false,
        //     tabBarActiveTintColor:COLORS.primaryBase,
        //     tabBarStyle: {
        //         position:'absolute',
        //         bottom:0,
        //         right:0,
        //         left:0,
        //         elevation:0,
        //         borderBottomWidth: 0
        //     }}}
        initialRouteName='Home'>
      <Tab.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    ...screenOptions,
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.HomeIconActive/> : <icons.HomeIcon/>}
                        </View>
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
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.SearchIconActive/> : <icons.SearchIcon/>}
                        </View>
                    )
                }}
                 />
      <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        {focused ? <icons.HeartIconActive/> : <icons.HeartIcon/>}
                        </View>
                    )
                }}
                />
      <Tab.Screen
                name="Ticket"
                component={Ticket}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.TicketIconActive/> : <icons.TicketIcon/>}
                        </View>
                    )
                }}
                />
      <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            {focused ? <icons.ProfileIconActive/> : <icons.ProfileIconCircle/>}
                        </View>
                    )
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
      headerTitleStyle: {
        display: "none", // hide the header title
      },
      tabBarActiveTintColor:COLORS.primaryBase,
}