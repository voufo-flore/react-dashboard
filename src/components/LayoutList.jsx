import React from "react";
import { X } from "lucide-react";

const LayoutList = ({ showlist }) => {
  return (
    <div className={`nav-list ${showlist ? "open" : "close"}`}>
      <div className="top-notif">You have 5 pending Tasks</div>
      <div className="bottom-notif">
        <div className="usage-content">
          list.name
          <div className="usage-bar" style={{ marginTop: "5px" }}>
            <div className="users-bar"></div>
          </div>
        </div>

        <div className="list-btn">
          <button className="list-bntp">Veiw All Messages</button>
        </div>
      </div>
    </div>
  );
};
export default LayoutList;
