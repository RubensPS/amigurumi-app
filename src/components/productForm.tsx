import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);
  
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = async () => {
    const newProduct = {
      id: Date.now(),
      nome,
      descricao,
      preco: parseFloat(preco),
      quantidade: parseInt(quantidade),
    };

    try {
      const updatedProducts = [...products, newProduct];
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      dispatch(addProduct(newProduct));

      // Limpar o formulário
      setNome('');
      setDescricao('');
      setPreco('');
      setQuantidade('');
    } catch (error) {
      console.error('Error saving product to AsyncStorage', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
};

export default ProductForm;
