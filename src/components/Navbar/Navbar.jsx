import { Bell, MailOpen, Search, LayoutList, LayoutGrid } from "lucide-react";
import "./Navbar.css";
import { Sun, Moon } from "lucide-react";
import "../Theme/Theme.css";
import { useEffect, useState } from "react";

const Header = ({ mailopen, notifopen, listopen, leftnavopen }) => {
  const [theme, settheme] = useState(false);
  const toggletheme = () => {
    settheme(!theme);
  };
  useEffect(() => {
    if (theme) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  });
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="search">
          <Search className="search-icon" />
          
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="lucide">
        <div>
          <Bell onClick={notifopen} style={{ cursor: "pointer" }} />
        </div>
        <LayoutList onClick={listopen} style={{ cursor: "pointer" }} />

        <MailOpen onClick={mailopen} style={{ cursor: "pointer" }} />
        <div onClick={toggletheme}>{theme ? <Moon /> : <Sun />}</div>
        <LayoutGrid onClick={leftnavopen} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
