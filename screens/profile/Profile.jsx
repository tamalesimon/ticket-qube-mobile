import React, { useState } from 'react';
import { useRouter, Stack } from 'expo-router'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import TabButtons from './component/TabButtons';

const activities = [
  { id: 1, name: "Likes", total: 50 },
  { id: 2, name: "My Tickets", total: 15 },
  { id: 3, name: "Following", total: 30 },
];
export default function Profile() {

  const profileScreenOptions = {
    headerStyle: {
      backgroundColor: COLORS.gray50, // turn it back to white
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerShadowVisible: false,
    headerTitleStyle: {
      fontFamily: FONTS.NotoSansJPBold,
      fontWeight: 700,
    },
    headerLeft: () => (
      <View style={styles.headerButtonContainer}>
        <ICONS.ArrowLeftIcon />
      </View>
    ),
    headerRight: () => (
      <View style={styles.headerButtonContainer}>
        <View style={styles.sharedContainer}>
          <TouchableOpacity onPress={() => console.log("it works: Edit profile")}>
            <ICONS.EditIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("it works: Go to settings")}>
            <ICONS.SettingsIcon />
          </TouchableOpacity>
        </View>
      </View>
    ),
    headerTitle: 'Profile',
    headerTitleAlign: 'center',
  };

  const tabs = ["Events", "Collections", "About"];
  const [activeTab, setActiveTab] = useState(tabs[0])

  const tabContent = () => {
    switch (activeTab) {
      case "Events":
        return (
          <View style={{ marginTop: 16 }}>
            <Text>Events</Text>
          </View>
        )
      case "Collections":
        return (
          <View style={{ marginTop: 16 }}>
            <Text>Collections</Text>
          </View>
        )
      case "About":
        return (
          <View style={{ marginTop: 16 }}>
            <Text>About</Text>
          </View>
        )
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, }}>
      <Stack.Screen options={{ ...profileScreenOptions, headerTitle: 'Profile' }} />
      <View style={styles.profileDetails}>
        <Image style={styles.userImage} source={{ uri: 'https://img.freepik.com/premium-photo/beauty-face-smiling-black-woman-portrait-beautiful-candid-real-face-african-american-girl-high-quality-photo_21730-15880.jpg' }} />
        <View style={styles.userText}>
          <Text style={styles.nameTitle}>Namaganda Brenda</Text>
          <Text style={styles.emailTitle}>brendanamaganda@gmail.com</Text>
        </View>
      </View>
      <View style={styles.activityContainer}>
        {
          activities.map((activity) => (
            <View style={styles.activities} key={activity.id}>
              <Text style={styles.activityTotals}>{activity.total}</Text>
              <Text style={styles.activityName}>{activity.name}</Text>
            </View>
          ))
        }
      </View>
      <LinearGradient colors={[COLORS.white, COLORS.gray50]} style={{ marginTop: 32, borderTopStartRadius: 40, borderTopEndRadius: 40, paddingTop: 24, paddingHorizontal: 24 }}>
        <TabButtons tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabContent()}
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileDetails: {
    // gap: 8
    marginBottom: 24
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 16,
    borderColor: COLORS.white,
    borderWidth: 4
  },
  userText: {
    gap: 4,
    textAlign: 'center'
  },
  nameTitle: {
    fontSize: 18,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 700,
    lineHeight: 27,
    color: COLORS.grayBase
  },
  emailTitle: {
    fontSize: 12,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400
  },
  activityContainer: {
    borderWidth: 2,
    borderColor: COLORS.gray100,
    padding: 16,
    borderRadius: 16,
    // alignItems: 'flex-start'
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 24
  },
  activities: {
    flexDirection: 'column',
    gap: 4,
    textAlign: 'center',
  },
  activityTotals: {
    fontSize: 18,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 700,
    lineHeight: 27,
    color: COLORS.grayBase
  },
  activityName: {
    fontSize: 12,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400
  },
  headerButtonContainer: {
    marginHorizontal: 24, //24px
    alignItems: 'center',
    justifyContent: 'center',
  },
  sharedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  }
})
