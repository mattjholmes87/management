import React, { useState, useEffect } from "react";
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

  const [modalTween] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    modalTween
      .to(modalVeil, 0.25, { autoAlpha: 1 })
      .to(modalDialog, 0.35, { y: 0, autoAlpha: 1 })
      .from(
        modalContent.children,
        0.35,
        { y: 15, opacity: 0, stagger: 0.1 },
        "-=0.15"
      )
      .reverse();
  }, []);

  useEffect(() => {
    modalTween.reversed(!modal);
  }, [modal]);

  const closeModal = () => {
    modalTween.reverse();
    gsap.delayedCall(modalTween.duration(), dispatch(modalToggle()));
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
