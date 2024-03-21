import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoData, setLiked, deleteTodo } from "../../redux/APIdataSlice";
import { modalToggle, selectModalPayload } from "../../redux/interfaceSlice";
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
import { MdOutlineCategory } from "react-icons/md";

const ModalEditTodo = () => {
  const users = useSelector(selectUsers);
  const todos = useSelector(selectTodoData);
  const modalPayload = useSelector(selectModalPayload);
  const dispatch = useDispatch();

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
        <MdOutlineCategory className="svg category" />
        <IoHammerOutline className="svg edit" />
        <IoTrashOutline
          className="svg delete"
          onClick={() => {
            dispatch(modalToggle({ type: "TODOEDIT" }));
            dispatch(deleteTodo({ modalPayload }));
          }}
        />
        <div className="descript complete">Mark as complete</div>
        <div className="descript incomplete">Mark as incomplete</div>
        <div className="descript priority">Mark as priority</div>
        <div className="descript notPriority">Unmark as priority</div>
        <div className="descript category">Assign category</div>
        <div className="descript edit">Edit Todo</div>
        <div className="descript delete">Delete Todo</div>
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
};

export default ModalEditTodo;
