import axios from "axios";
import { store } from "../redux/store";
import { setAPIData } from "../redux/APIdataSlice";

export const getTodos = async () => {
  const { data } = await axios.get("https://dummyjson.com/todos/");
  store.dispatch(setAPIData(data.todos));
};
