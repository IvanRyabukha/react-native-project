import React, { useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardItem } from './src/components/CardItem';
import SearchIcon from './src/assets/icons/search-svgrepo-com.svg';

const pizzaData = [
  {
    id: 1,
    name: 'Margarita',
    price: 8.5,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 2,
    name: '4 meat',
    price: 10,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41846%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 3,
    name: 'Pepperoni',
    price: 9.4,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35978%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 4,
    name: 'White Chicken',
    price: 11.2,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F57721%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 5,
    name: '4 Chees',
    price: 8.75,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35183%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 6,
    name: 'Bavarian',
    price: 7.35,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41955%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 7,
    name: 'Hawaiian',
    price: 6.55,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42073%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 8,
    name: 'Carbonara',
    price: 9.25,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35625%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 9,
    name: 'Salami',
    price: 7.85,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F34255%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 10,
    name: 'Cheesy Chicken',
    price: 5.55,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35178%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 11,
    name: 'Ceasar',
    price: 7.85,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44402%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 12,
    name: 'Cheeseburger',
    price: 12.35,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F69474%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 13,
    name: 'Meat Crispy',
    price: 10.55,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F47022%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 14,
    name: 'Ham BBQ',
    price: 9.99,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55258%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 15,
    name: 'Francesca',
    price: 8.45,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45242%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
  {
    id: 16,
    name: 'Chicken BBQ',
    price: 10.85,
    img: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44067%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
  },
];

function App() {
  const [inputTeaxt, setInputText] = useState('');
  const [product, setProduct] = useState('');

  const filteredPizza = useMemo(() => {
    return pizzaData.filter(item => item.name.toLowerCase().includes(inputTeaxt));
  }, [inputTeaxt]);

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'right', 'left', 'bottom']}
    >
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pizza Store</Text>
        <Text style={styles.textDesc}>
          Some description {'\n'}two lines long
        </Text>

        <View>
          <TextInput
            style={styles.input}
            // keyboardType='numeric'
            onChangeText={e => setInputText(e.toLowerCase())}
            value={inputTeaxt}
          />
          <TouchableOpacity onPress={() => setProduct(inputTeaxt)} style={styles.iconContainer}>
            <SearchIcon width={26} height={26} fill="black" />
          </TouchableOpacity>
        </View>

        {product && <Text style={{marginTop: 15}}>... search by {product}</Text>}

        <View style={styles.imgContainer}>
          {filteredPizza.map(item => (
            <CardItem
              key={item.id}
              text={item.name}
              img={item.img}
              price={item.price}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            Create Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  safeArea: {
    flex: 1,
  },
  view1: {
    width: '20%',
    height: 100,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  textDesc: {
    marginTop: 15,
    fontSize: 16,
    color: 'gray',
  },
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  orderBtn: {
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  input: {
    marginTop: 15,
    paddingLeft: 15,
    height: 46,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'orange',
  },
  iconContainer: {
    position: 'absolute',
    top: 25,
    right: 10,
  }
});

export default App;
