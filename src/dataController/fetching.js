import axios from "axios";
import { store } from "../redux/store";
import { setTodoData } from "../redux/todosSlice";
import { setReportees, setSchools } from "../redux/usersSlice";

export const getTodos = async (token) => {
  if (token) {
    const { data } = await axios.get(
      "http://localhost:6001/todos/get/todoData",
      {
        headers: { token },
      }
    );
    store.dispatch(setTodoData(data));
  } else console.log("User not logged in");
};

export const getSchools = async () => {
  const { data } = await axios.get("http://localhost:6001/user/get/schools");
  store.dispatch(setSchools(data));
};

export const getReportees = async (token) => {
  if (token) {
    const { data } = await axios.get(
      "http://localhost:6001/user/get/reportees",
      {
        headers: { token: token },
      }
    );
    store.dispatch(setReportees(data));
  } else console.log("User not logged in");
};
