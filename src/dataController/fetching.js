import axios from "axios";
import { store } from "../redux/store";
import { setAPIData } from "../redux/APIdataSlice";

export const getTodos = async () => {
  const { data } = await axios.get("https://dummyjson.com/todos/50");

  store.dispatch(setAPIData(data));
};
