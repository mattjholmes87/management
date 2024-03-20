import React, { useEffect } from "react";
import { selectModalToggle, modalToggle } from "../../redux/interfaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";
import ModalContent from "./ModalContent";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModalToggle);

  let modalVeil = null;
  let modalDialog = null;
  let modalContent = null;

  let masterTimeLine = gsap.timeline();

  useEffect(() => {
    masterTimeLine.to(".modal-veil", 0.25, { autoAlpha: 1 });
    masterTimeLine.to(".modal-dialog", 0.35, { y: 0, autoAlpha: 1 });
    masterTimeLine
      .from(
        modalContent.children,
        0.35,
        { y: 15, opacity: 0, stagger: 0.1 },
        "-=0.15"
      )
      .reverse();
  }, []);

  useEffect(() => {
    masterTimeLine.reversed(!modal);
  }, [modal]);

  const closeModal = () => {
    masterTimeLine.reverse();
    setTimeout(() => {
      dispatch(modalToggle());
    }, 1000);
  };

  return (
    <>
      <div className={`modal-container${modal ? " show" : ""}`}>
        <div
          className="modal-veil"
          ref={(e) => (modalVeil = e)}
          onClick={() => {
            closeModal();
          }}
        />
        <div className="modal-dialog" ref={(e) => (modalDialog = e)}>
          <ModalContent ref={(e) => (modalContent = e)} />
        </div>
      </div>
    </>
  );
};

export default Modal;
