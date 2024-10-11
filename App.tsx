import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store/store';
import ProductList from './src/screens/productList';
import AddProduct from './src/screens/addProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Lista de Produtos' }} />
          <Stack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Adicionar Produto' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;