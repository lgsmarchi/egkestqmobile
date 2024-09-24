
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addItem } from '../services/SQLiteService';

const AddItemScreen = ({ navigation }) => {
  const [patrimonio, setPatrimonio] = useState('');
  const [tipo, setTipo] = useState('');
  const [modelo, setModelo] = useState('');
  const [proprietario, setProprietario] = useState('');

  const handleAddItem = async () => {
    await addItem(patrimonio, tipo, modelo, proprietario);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Patrimônio" value={patrimonio} onChangeText={setPatrimonio} />
      <TextInput placeholder="Tipo" value={tipo} onChangeText={setTipo} />
      <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} />
      <TextInput placeholder="Proprietário" value={proprietario} onChangeText={setProprietario} />
      <Button title="Adicionar" onPress={handleAddItem} />
    </View>
  );
};

export default AddItemScreen;
