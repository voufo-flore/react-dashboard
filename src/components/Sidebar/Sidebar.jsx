import IMAGES from "../../images/image";
import sidebarItems from "./sideitems";
import "./Sidebar.css";
import { SidebarItem, SidebarDropdownItem } from "./sidebarItems";
import { Gauge} from "lucide-react";

// Main Sidebar Component
const Sidebar = () => {
  const navItems = sidebarItems

  return (
    <div className="sidebar">
      <div className="nav">
        <div className="nav-links">
          <div className="logo">
            <img src={IMAGES.flore2} alt="logo image" />
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
