import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleAddProduct = async () => {
    if (!nome || !descricao || !preco || !quantidade) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const newProduct = {
      id: Date.now(), // Simple ID generation
      nome,
      descricao,
      preco: parseFloat(preco),
      quantidade: parseInt(quantidade),
    };

    dispatch(addProduct(newProduct));

    // Optionally update AsyncStorage here
    const storedProducts = await AsyncStorage.getItem('products');
    const productsArray = storedProducts ? JSON.parse(storedProducts) : [];
    productsArray.push(newProduct);
    await AsyncStorage.setItem('products', JSON.stringify(productsArray));

    Alert.alert('Success', 'Product added successfully!');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Add New Product</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 16, padding: 8 }}
      />
      <Button title="Save" onPress={handleAddProduct} />
    </View>
  );
};

export default AddProduct;