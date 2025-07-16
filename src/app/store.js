import { configureStore, createReducer } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import loginReducer from './features/loginSlice'; 
import CartSlice from './features/CartSlice'
import { persistStore,persistReducer } from "redux-persist";
import { apiSlice } from "../Services/ApISlice";
const persistCardConfig={
  key:'cart',//name that will be to the local storage
  storage //is localstorage
}
const persistedCart=persistReducer(persistCardConfig,CartSlice)//it is the same as cartSlice but with localstorage
export const store = configureStore({
  reducer: {
    cart:persistedCart,
    login: loginReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,//dynamic key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // لازم نوقفه علشان redux-persist يستخدم قيم غير قابلة للتسلسل
    }).concat([apiSlice.middleware]),//concatenate is the midleware 
});
export const persister=persistStore(store) 