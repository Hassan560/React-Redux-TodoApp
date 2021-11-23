import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoReducer from "../Todo/TodoReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, TodoReducer);

const Store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(Store);
export default Store;
