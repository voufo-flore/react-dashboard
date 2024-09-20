import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";

// Sidebar Item Component
export const SidebarItem = ({ sidebarItem }) => {
  return (
    <div className="links">
      <div className="icon">
        <sidebarItem.icon className="icon-link" />
      </div>
      <Link className="icons" to={sidebarItem.link}>
        <span>{sidebarItem.text}</span>
        {sidebarItem.badge && (
          <button className="btn">{sidebarItem.badge}</button>
        )}
      </Link>
    </div>
  );
};

// Sidebar Dropdown Item Component
export const SidebarDropdownItem = ({ sidebarItem }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <>
      <div className="links">
        <div className="icon">
          <sidebarItem.icon className="icon-link" />
        </div>
        <Link className="icons" onClick={() => setIsDropdown(!isDropdown)}>
          <span>{sidebarItem.text}</span>
          {isDropdown ? <ChevronUp /> : <ChevronDown />}
        </Link>
      </div>
      {isDropdown && (
        <div className="dropdown">
          {sidebarItem?.elements.map((item, index) => (
            <div key={index} className="links">
              <div className="icon">
                <Dot className="icon-link" />
              </div>
              <Link className="icons" to={item.link}>
                <span>{item.text}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
