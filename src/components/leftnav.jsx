import React from "react";
import { X } from "lucide-react";
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
import IMAGES from '../images/image';
import CIcon from '@coreui/icons-react';

const LeftNav = ({ showleftnav, hideleftnav }) => {
  return (
    <div className={`leftnav ${showleftnav ? "open" : "close"}`}>
      <div onClick={hideleftnav}><X/></div>
      
    </div>
    
  );
};

export default LeftNav;
