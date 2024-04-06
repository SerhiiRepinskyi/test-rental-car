import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { filtersReducer } from "./filtersSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Ігнорує ряд екшенів для виправлення помилок серіалізації при записі в localStorage
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slise to localstorage
const carsPersistConfig = {
  key: "favoriteCars", // Назва ключа в LocalStorage
  version: 1,
  storage,
  whitelist: ["favoriteCars"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
    filters: filtersReducer,
  },
  middleware,
});

// Створення persistor для PersistGate - обгортки App при ініціалізації Redux Persist
export const persistor = persistStore(store);
