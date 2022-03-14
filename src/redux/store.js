import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import cocktailReducer from './features/cocktailSlice';

export default configureStore({
  reducer: {
    app: cocktailReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
});
