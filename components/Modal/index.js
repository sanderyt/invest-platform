import React, { useEffect } from "react";

const Modal = ({ children, title, isOpen, clickHandler }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  const modalbody = "modal__body d-flex flex-column align-items-center";

  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal__overlay" onClick={clickHandler}></div>
      <div className={isOpen ? `${modalbody} open` : `${modalbody}`}>
        <div className="header d-flex justify-content-center">
          <h3>{title}</h3>
        </div>
        <div className="close" onClick={clickHandler}>
          <i class="fas fa-times"></i>
        </div>
        <div className="modal__content d-flex flex-column align-items-center justify-content-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
