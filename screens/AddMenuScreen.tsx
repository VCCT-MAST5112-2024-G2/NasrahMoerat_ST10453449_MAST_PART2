// screens/AddMenuScreen.tsx
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const courses = ['Starters', 'Mains', 'Desserts'];

type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    const newItem = { dishName, description, course, price: parseFloat(price) };
    navigation.navigate('Home', { newItem });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/image1.jpg')} style={{ width: '100%'}} />
      <Text style={styles.title}>Add Menu</Text>
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput style={styles.input} onChangeText={setDishName} value={dishName} />

      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} onChangeText={setDescription} value={description} />

      <Text style={styles.label}>Course:</Text>
      <Picker selectedValue={course} onValueChange={setCourse}>
          {courses.map((course) => (
              <Picker.Item key={course} label={course} value={course} />
          ))}
      </Picker>

      <Text style={styles.label}>Price:</Text>
      <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'teal',
    color: 'white',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'white',   
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    color: 'teal',
    padding: 10,
    margin: 5,
    width: '100%',
    justifyContent: 'center',   
    textAlign: 'center',
  },
  buttonText: {
    color: 'teal',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});