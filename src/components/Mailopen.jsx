import React from "react";
import { X } from "lucide-react";

const IconsNav = ({showmail} ) => {
  return (
    <div className={`nav-mail ${showmail ? "open" : "close"}`}>
      <div className="top-notif">You have 4 Messages</div>

      <section class="messages">
        <div class="message-box">
          <div class="user">
            <div class="user-info">
              <h3>
                <img src="" alt="" />
                user
              </h3>
              <h4 class="reply">
                {" "}
                <span className="span-mail">created</span>
              </h4>
            </div>
            <div class="message-body">body</div>
          </div>
        </div>
      </section>
      <div className="list-btn">
        <button className="list-bntp">Veiw All Messages</button>
      </div>
    </div>
  );
};
export default IconsNav;
