import IMAGES from "../../images/image";
import sidebarItems from "./sideitems";
import "./Sidebar.css";
import { SidebarItem, SidebarDropdownItem } from "./sidebarItems";
import { Gauge, X } from "lucide-react";

// Main Sidebar Component
const Sidebar = ({ sidebar, nosidebar }) => {
  const navItems = sidebarItems;

  return (
    <div className={`sidebar ${sidebar ? "open" : "close"}`}>
      <div className="nav">
        <div className="nav-links">
          <div className="logo">
            
            <img src={IMAGES.flore2} alt="logo image" />
            <div className="remover" onClick={nosidebar} style={{fontSize:'30px', cursor:'pointer'}}><X/></div>
          </div>
          <SidebarItem
            sidebarItem={{
              text: "Dashboard",
              icon: Gauge,
              link: "/",
              badge: "NEW",
            }}
          />

          {navItems.map((navItem, index) => (
            <div key={index}>
              <div className="text">{navItem.text}</div>
              {navItem.items.map((item, idx) =>
                item.dropdown ? (
                  <SidebarDropdownItem sidebarItem={item} key={idx} />
                ) : (
                  <SidebarItem sidebarItem={item} key={idx} />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
