import React, { useState } from "react";

const AccordionItem = () => {
  const [open, setOpen] = useState(false);

  const toggleItem = () => setOpen(!open);

  return (
    <div className="accordion-item p-2 d-flex flex-column">
      <div
        className="accordion-item__title d-flex justify-content-between"
        onClick={toggleItem}
      >
        <h3>Hoe risicivol is het investeren in dit platform?</h3>
        <span>Kruisje</span>
      </div>
      <div
        className={
          open ? "accordion-item__content open" : "accordion-item__content"
        }
      >
        <p>
          Samen investeren in digitale objecten en passief inkomen genereren.
          Met mijn jarenlange expertise in affiliate marketing, weet ik precies
          hoe ik een website draaiende moet houden.
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
