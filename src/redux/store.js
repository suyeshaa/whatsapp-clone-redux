import { createStore } from "redux";
import reducer from "./user/userReducer";

const store = createStore(reducer);

export default store;
