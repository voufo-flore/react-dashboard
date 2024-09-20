import { Bell, MailOpen, Search, LayoutList, Sun, LayoutGrid } from "lucide-react";
import "./Navbar.css"

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
        <LayoutList />
        <MailOpen />
        <Sun />
        <LayoutGrid />
      </div>
    </div>
  );
};

export default Header;
