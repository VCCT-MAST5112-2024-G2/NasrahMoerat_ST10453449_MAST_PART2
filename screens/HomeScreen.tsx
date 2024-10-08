// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<{ dishName: string, description: string, course: string, price: number }[]>([]);

  useEffect(() => {
    // Check if newItem exists and is defined in route.params
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);
  

  return (
    <View style={styles.container}>

    <Text style={styles.title}>Christoffel's Kitchen</Text>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenu')}>
          <Text style={styles.buttonText}>Add Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilterMenu')}>
          <Text style={styles.buttonText}>Filtered Menu</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.total}>Total Items: {menuItems.length}</Text>

      <FlatList style={{ width: '100%' }}
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishStyle1}>{item.dishName} - {item.course}</Text>
            <Text style={styles.dishStyle2}>{item.description}</Text>
            <Text style={styles.dishStyle3}>R: {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'teal',
    color: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  dishStyle1: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  dishStyle2: {
    color: 'white',
    marginBottom: 5,
  },
  dishStyle3: {
    color: 'white',
  },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    color: 'white',
  },
  nav: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  total: {
    color: 'white',
  },
});