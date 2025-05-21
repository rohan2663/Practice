import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// -------------------- Types --------------------
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

// -------------------- Async Fetch --------------------
const fetchProducts = createAsyncThunk<Product[]>('products/fetch', async () => {
  const res = await fetch('/products.json');
  const data = await res.json();
  return data.PRODUCTS;
});

// -------------------- Slice --------------------
const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false, error: null } as ProductState,
  reducers: {
    incrementRating: (state, action: PayloadAction<number>) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) product.rating += 1;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch';
      });
  }
});

const { incrementRating } = productSlice.actions;

// -------------------- Store --------------------
const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// -------------------- Component --------------------
const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      {items.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <button onClick={() => dispatch(incrementRating(product.id))}>Rate</button>
        </div>
      ))}
    </div>
  );
};

// -------------------- App Root --------------------
const App: React.FC = () => (
  <Provider store={store}>
    <h1>My Product App</h1>
    <ProductList />
  </Provider>
);

// -------------------- Render --------------------
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
