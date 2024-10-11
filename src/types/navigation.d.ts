import { StackNavigationProp } from '@react-navigation/stack';


export type RootStackParamList = {
  ProductList: undefined;
  AddProduct: undefined;
};

export type ProductListScreenProp = StackNavigationProp<RootStackParamList, 'ProductList'>;