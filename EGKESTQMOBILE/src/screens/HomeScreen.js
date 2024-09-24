
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getItems } from '../services/SQLiteService';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getItems();
    setItems(data);
  };

  return (
    <View>
      <Button title="Adicionar Item" onPress={() => navigation.navigate('AddItem')} />
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.patrimonio} - {item.tipo} - {item.modelo} - {item.proprietario}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
