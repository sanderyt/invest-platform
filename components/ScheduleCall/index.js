import React from "react";

const ScheduleCall = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="call row">
        <div className="call__overlay" />
        <div className="call__content col-12 d-flex flex-column justify-content-center align-items-center">
          <h1>Meer informatie? Hulp nodig?</h1>
          <h2>Plan een videocall met ons in.</h2>
          <button className="btn btn--cta btn--lg">Plan videocall in</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
