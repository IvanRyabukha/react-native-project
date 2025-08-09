import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// FlatList - большие списки одинаковых структурированных данных, которые могут меняться со временем,
// рендерит элементы, которые в данный момент отображаются на экране

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ListComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};


export default ListComponent;
