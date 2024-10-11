import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, deleteProduct } from '../features/products/productSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ProductItem from '../components/productItem';
import { RootState } from '../store/store';
import { ProductListScreenProp } from '../types/navigation';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
}

const ProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProductListScreenProp>();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        if (storedProducts) {
          dispatch(setProducts(JSON.parse(storedProducts)));
        }
      } catch (error) {
        console.error('Error loading products from AsyncStorage', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  const handleDelete = (id: number) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this product?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          dispatch(deleteProduct(id));
          const updatedProducts = products.filter(product => product.id !== id);
          
          try {
            await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
          } catch (error) {
            console.error('Error saving products after delete', error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem product={item} onDelete={handleDelete} />
  );

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Product List</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No products available.</Text>}
      />
      <Button title="Add Product" onPress={() => navigation.navigate('AddProduct')} />
    </View>
  );
};

export default ProductList;
