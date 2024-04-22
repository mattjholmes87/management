import axios from "axios";
import { store } from "../redux/store";
import { setAPIData } from "../redux/APIdataSlice";
import { setSchools } from "../redux/usersSlice";

export const getTodos = async () => {
  const { data } = await axios.get("https://dummyjson.com/todos/");
  store.dispatch(setAPIData(data.todos));
};

export const getSchools = async () => {
  const { data } = await axios.get("http://localhost:6001/user/get/schools");
  store.dispatch(setSchools(data));
};
