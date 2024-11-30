import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});

//* applymiddleware herhangi arayazılımı redux'a dahil etmeye yarar,biz burada thunk'ı dahil etmek için kullanıyoruz.
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
