import React from "react";
import { X } from "lucide-react";

const LeftNav = ({ showleftnav, hideleftnav }) => {
  return (
    <div className={`leftnav ${showleftnav ? "open" : "close"}`}>
      LeftNav{" "}
      <div>
        <X onClick={hideleftnav} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default LeftNav;
