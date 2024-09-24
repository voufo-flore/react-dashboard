import { Bell, MailOpen, Search, LayoutList, LayoutGrid, Languages } from "lucide-react";
import "./Navbar.css";
import Theme from "../Theme/Theme";
import NotificationBell from "../NotificationBell";
import MessageDropdown from "../Mailopen";
import AccountDropdown from "../Account";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="search">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="lucide">
        <Bell />

        <NotificationBell />
        <MailOpen />

        <LayoutGrid />
      </div>
    </div>
  );
};

export default Header;
