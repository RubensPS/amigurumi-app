import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductItem = ({ product, onDelete }) => {
  return (
    <View style={{ marginVertical: 8, padding: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}>
      <Text style={{ fontSize: 18 }}>{product.nome}</Text>
      <Text>{product.descricao}</Text>
      <Text>Preço: ${product.preco.toFixed(2)}</Text>
      <Text>Quantidade: {product.quantidade}</Text>
      <Button title="Delete" onPress={() => onDelete(product.id)} />
    </View>
  );
};

export default ProductItem;