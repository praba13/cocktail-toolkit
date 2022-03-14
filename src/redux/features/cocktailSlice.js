import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    return fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    ).then((res) => res.json());
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  'cocktails/fetchSingleCocktail',
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  'cocktails/fetchSearchCocktail',
  async ({ searchText }) => {
    return fetch(
      `https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks;
      state.isLoading = false;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.cocktail = action.payload.drinks;
      state.isLoading = false;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchSearchCocktail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks;
      state.isLoading = false;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default cocktailSlice.reducer;
