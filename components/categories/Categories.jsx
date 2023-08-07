import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FONTS, COLORS, icons } from '../../constants'

export default function Categories() {
  const [selected, setSelected] = useState(1)
  const listCategories = [
    { id: 1, title: "My feed" },
    { id: 2, title: "Seminar" },
    { id: 3, title: "Theatre" },
    { id: 4, title: "Festivals" },
    { id: 5, title: "Art" },
    { id: 6, title: "Concerts" }
  ]
  const renderItem = ({ item }) => {
    const isSelected = item.id === selected;
    const backgroundColor = isSelected ? COLORS.primaryBase : COLORS.gray50;
    const textColor = isSelected ? COLORS.white : COLORS.grayBase;
    const textWeight = isSelected ? 700 : 400;
    const isFirstChild = item.id === 1;
    return (
      <TouchableOpacity style={[styles.container, { backgroundColor }]} onPress={() => setSelected(item.id)}>
        {isFirstChild && isSelected && <icons.FlashIcon />}
        <Text style={{ color: textColor, fontWeight: textWeight, paddingLeft: 4 }}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList
        data={listCategories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    backgroundColor: COLORS.gray50,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
