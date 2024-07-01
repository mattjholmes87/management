import axios from "axios";
import { store } from "../redux/store";
import { setTodoData } from "../redux/todosSlice";
import { setReportees, setSchools } from "../redux/usersSlice";
import { setLoading } from "../redux/interfaceSlice";

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

//Date time incorrect format
export const updateTodo = async (token, todo) => {
  if (token && todo) {
    console.log("this", todo, token);
    store.dispatch(setLoading(true));
    const { data } = await axios.patch(
      "http://localhost:6001/todos/patch",
      todo,
      {
        headers: { token },
      }
    );
    console.log(data);
    if (data) {
      // await getTodos(token);
      store.dispatch(setLoading(false));
    } else {
      console.log("Could not update todo");
    }
  }
};
