import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>VKD Restaurant</Text>
      <TextInput
        value={food}
        placeholder='Enter Food'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 22, color: 'yellow' }}>Add to Food List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 22, color: 'yellow' }}>Go to FoodList</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
    color : '#e81919',
    textAlign: 'center'
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 7,
    padding: 8,
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'yellow',
    backgroundColor: 'grey'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 5,
    borderRadius: 100,
  }
});

export default FoodForm;
