import React from "react";

const BellComponent = (bell) => {
  return (
    <div className={` bell-cnt ${bell ? "open" : "close"}`}>this is it</div>
  );
};

export default BellComponent;
