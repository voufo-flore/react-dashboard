import { Bell, MailOpen, Search, LayoutList, LayoutGrid } from "lucide-react";
import "./Navbar.css";
import Theme from "../Theme/Theme";
import NotificationBell from "../NotificationBell";
import Mailopen from "../Mailopen";

const Header = ({ bellopen }) => {
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="search">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="lucide">
        <div onClick={bellopen} style={{ cursor: "pointer" }}>
          <Bell />
        </div>
        <LayoutList />
        <MailOpen />
        <LayoutGrid />
        
      </div>
    </div>
  );
};

export default Header;
