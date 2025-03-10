import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    filteredProducts: [],
    searchQuery: "",
    sortType: "none",
    status: "idle",
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
    },
    // sort products
    searchProducts: (state, action) => {
        state.searchQuery = action.payload;
        state.filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      },
      sortProducts: (state, action) => {
        state.sortType = action.payload;
        let productsToSort = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;
  
        switch (action.payload) {
          case "priceLowHigh":
            productsToSort.sort((a, b) => a.price - b.price);
            break;
          case "priceHighLow":
            productsToSort.sort((a, b) => b.price - a.price);
            break;
          case "nameAZ":
            productsToSort.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case "nameZA":
            productsToSort.sort((a, b) => b.title.localeCompare(a.title));
            break;
          default:
            return;
        }
  
        state.filteredProducts = [...productsToSort];
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "Succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.categories = [...new Set(action.payload.map((p) => p.category))];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterByCategory, searchProducts, sortProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

// const fetchData = createAsyncThunk("products/fetchData", async() => {
//     const res = axios.get("https://fakestoreapi.com/products")
//     return res.data;
// });

// const ProductSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     CatagoriesByFilter: [],

//     status: "idle",
//     error: null,
//   },
//   reducers: {

//   },
//   extraReducers : (bulider) => {
//     bulider
//     .addCase(products.pending, (state)) => state.products {

//     },

//     .addCase(products.fullfilled, (state.action)) => state
//         state.products = state.payload
//     }
//     .addCase(products.rejected), (state.action) => state.products {

//     }

//     }
//   }

//   }
// });

// export {}

// export default ProductSlice.reducers
