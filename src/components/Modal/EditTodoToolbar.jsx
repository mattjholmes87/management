import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLiked,
  deleteTodo,
  completeTodo,
  changeTodoCat,
} from "../../redux/todosSlice";
import {
  modalToggle,
  selectModalPayload,
  selectToolbar,
  selectToolbarOptions,
  toolbarToggle,
} from "../../redux/interfaceSlice";
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

const EditTodoToolbar = (props) => {
  const dispatch = useDispatch();
  const modalPayload = useSelector(selectModalPayload);
  const toolbarOptions = useSelector(selectToolbarOptions);
  const toolbar = useSelector(selectToolbar);

  const { chosenTodo } = props;

  return (
    <div className="modal toolbar todo">
      <IoTrashOutline
        onMouseOver={() => {
          dispatch(toolbarToggle(toolbarOptions[6]));
        }}
        onMouseOut={() => {
          dispatch(toolbarToggle(toolbarOptions[7]));
        }}
        className="svg delete"
        onClick={() => {
          dispatch(modalToggle({ type: "TODOEDIT" }));
          dispatch(deleteTodo({ modalPayload }));
          toast.warning(" Todo Deleted!", {
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
      <IoHammerOutline
        className="svg edit"
        onMouseOver={() => {
          dispatch(toolbarToggle(toolbarOptions[5]));
        }}
        onMouseOut={() => {
          dispatch(toolbarToggle(toolbarOptions[7]));
        }}
      />
      <MdOutlineCategory
        className={`svg category${chosenTodo.cat}`}
        onMouseOver={() => {
          dispatch(toolbarToggle(toolbarOptions[4]));
        }}
        onMouseOut={() => {
          dispatch(toolbarToggle(toolbarOptions[7]));
        }}
        onClick={() => {
          dispatch(changeTodoCat(modalPayload));
        }}
      />
      {chosenTodo.priority ? (
        <IoNotificationsOffCircleOutline
          onMouseOver={() => {
            dispatch(toolbarToggle(toolbarOptions[3]));
          }}
          onMouseOut={() => {
            dispatch(toolbarToggle(toolbarOptions[7]));
          }}
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
          onMouseOver={() => {
            dispatch(toolbarToggle(toolbarOptions[2]));
          }}
          onMouseOut={() => {
            dispatch(toolbarToggle(toolbarOptions[7]));
          }}
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
      {chosenTodo.completed ? (
        <IoCloseCircleOutline
          onMouseOver={() => {
            dispatch(toolbarToggle(toolbarOptions[1]));
          }}
          onMouseOut={() => {
            dispatch(toolbarToggle(toolbarOptions[7]));
          }}
          className="svg incomplete"
          onClick={() => {
            dispatch(completeTodo(modalPayload));
            toast.error("Todo marked uncomplete!", {
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
        <IoCheckmarkCircleOutline
          onMouseOver={() => {
            dispatch(toolbarToggle(toolbarOptions[0]));
          }}
          onMouseOut={() => {
            dispatch(toolbarToggle(toolbarOptions[7]));
          }}
          className="svg complete"
          onClick={() => {
            dispatch(completeTodo(modalPayload));
            toast.success("Todo marked as complete!", {
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
      <div className="toolbar descript">{toolbar}</div>
    </div>
  );
};

export default EditTodoToolbar;
