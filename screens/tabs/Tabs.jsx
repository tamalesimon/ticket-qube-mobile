import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabs from "../home/Home";
import Explore from "../explore/Explore";
import Favorites from "../favorites/Favorites"
import Tickets from "../ticket/Ticket"
import Profile from "../profile/Profile"
import {
  homeScreenOptions,
  exploreScreenOptions,
  favoritesScreenOptions,
  ticketsScreenOptions,
  profileScreenOptions
} from "../../components/header/screenOptions";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={homeScreenOptions}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={exploreScreenOptions}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={favoritesScreenOptions}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={ticketsScreenOptions}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={profileScreenOptions}
      />
    </Tab.Navigator>
  );
}
