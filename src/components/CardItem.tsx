import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

type Props = {
  img: string;
  text: string;
  price: number;
};

export const CardItem: React.FC<Props> = ({ text, img, price }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('You have chosen:', text)}>
      <Image style={styles.image} source={{ uri: img }} />
      <Text>{text}</Text>
      <Text>{price} USD</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '50%',
  },
  image: {
    marginTop: 15,
    width: '100%',
    height: 180,
    borderRadius: 4,
  },
  // name: {
  //   fontSize: 16,
  //   textAlign: 'justify',
  // }
});
