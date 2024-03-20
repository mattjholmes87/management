import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoData, setLiked } from "../../redux/APIdataSlice";
import { selectModalPayload } from "../../redux/interfaceSlice";
import { selectUsers } from "../../redux/usersSlice";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoHammerOutline,
  IoNotificationsCircleOutline,
  IoNotificationsOffCircleOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";

const ModalContent = forwardRef((props, ref) => {
  const users = useSelector(selectUsers);
  const todos = useSelector(selectTodoData);
  const modalPayload = useSelector(selectModalPayload);
  const dispatch = useDispatch();

  if (modalPayload.type === "TODOEDIT") {
    const chosenTodo = todos.find((todo) => todo.id == modalPayload.id);
    if (!chosenTodo) {
      console.log("Todo is not in the array.");
    }

    return (
      <div className="modal-content-container" ref={ref}>
        <div className="modal toolbar todo">
          {chosenTodo.completed ? (
            <IoCloseCircleOutline className="svg incomplete" />
          ) : (
            <IoCheckmarkCircleOutline className="svg complete" />
          )}

          {chosenTodo.priority ? (
            <IoNotificationsOffCircleOutline
              className="svg notPriority"
              onClick={() => {
                dispatch(setLiked(modalPayload));
                toast.error(" No longer a Priority!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            />
          ) : (
            <IoNotificationsCircleOutline
              className="svg priority"
              onClick={() => {
                dispatch(setLiked(modalPayload));

                toast.success(" Set as a Priority!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            />
          )}
          <IoHammerOutline className="svg edit" />
          <IoTrashOutline className="svg delete" />
          <div className="test">On</div>
        </div>
        <p>
          <span className="bold">ID: </span> {chosenTodo.id}
        </p>
        <p>
          <span className="bold">Todo: </span> {chosenTodo.todo}
        </p>
        <p>
          <span className="bold">Priority: </span>
          {chosenTodo.priority ? "Priority task!" : "This is not a priority"}
        </p>
        <p>
          <span className="bold">Status: </span>
          {chosenTodo.completed ? "Task Completed!" : "Task Pending..."}
        </p>
      </div>
    );
  }
  if (modalPayload.type === "REPORTEEEDIT") {
    const chosenUser = users.find((user) => user.id == modalPayload.id);
    if (!chosenUser) {
      console.log("Todo is not in the array.");
    }

    return (
      <div className="modal-content-container" ref={ref}>
        <h2>Name: {chosenUser.name}</h2>
        <p>Title: {chosenUser.title}</p>
        <p>UserID: {chosenUser.id}</p>
      </div>
    );
  } else {
    return (
      <div className="modal-content-container" ref={ref}>
        "Invalid or Missing Modal Type Parameter"
      </div>
    );
  }
});

export default ModalContent;
