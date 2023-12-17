import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NoFoundEvents from './NoFoundEvents';
import LikedEvents from './LikedEvents';


export default function Favorite() {
  const navigation = useNavigation();
  const data = false;
  const handleFindEvents = () => {
    navigation.navigate("Explore")
  }
  return (
    <SafeAreaView style={{ ...styles.safeArea, ...(!data && { paddingHorizontal: 24 }) }}>
      {data ?
        <LikedEvents />
        :
        <NoFoundEvents handleFindEvents={handleFindEvents} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
    overflow: 'hidden'
  }
})
