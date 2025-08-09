import React from "react";
import { View, Text } from "react-native";


export const MyFirstComponent = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Try editing me ! 🎉
      </Text>
    </View>
  );
};

export default MyFirstComponent;