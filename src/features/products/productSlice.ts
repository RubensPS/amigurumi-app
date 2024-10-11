import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Product interface
interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
}

// Define the initial state type
interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products, // Set initial state correctly
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      return action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      const index = state.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// Export actions and reducer
export const { setProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
