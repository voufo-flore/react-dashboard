import { Bell, MailOpen, Search, LayoutList, LayoutGrid } from "lucide-react";
import "./Navbar.css";
import { Sun, Moon } from "lucide-react";
import "../Theme/Theme.css";

import { useEffect, useState } from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons';
import IMAGES from "../../images/image";
import CIcon from '@coreui/icons-react';

const Header = ({ mailopen, notifopen, listopen, leftnavopen , sidebaropen}) => {
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
      <div className="menu-icon" onClick={sidebaropen}>&#9776;</div>
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
        <CDropdown variant="nav-item">
      <CDropdownToggle caret={false}>
        <CAvatar src={IMAGES.img3}  style={{
          
        }} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
        <LayoutGrid onClick={leftnavopen} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
