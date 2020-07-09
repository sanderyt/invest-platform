import React, { useState } from "react";

import Modal from "../Modal";

const ScheduleCall = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="call row">
          <div className="call__overlay" />
          <div className="call__content col-12 d-flex flex-column justify-content-center align-items-center">
            <h1>Meer informatie? Hulp nodig?</h1>
            <h2>Plan een videocall met ons in.</h2>
            <button className="btn btn--cta btn--lg" onClick={modalHandler}>
              Plan videocall in
            </button>
          </div>
        </div>
      </div>
      <Modal
        title="Plan een videocall"
        clickHandler={modalHandler}
        isOpen={modalOpen}
      >
        <p>
          Heeft u behoefte aan meer informatie? Geen probleem. We lichten u
          graag in via Zoom, Skype of Google Hangouts. Gratis en geheel
          vrijblijvend. Vul hieronder uw gegevens in.
        </p>
      </Modal>
    </>
  );
};

export default ScheduleCall;
