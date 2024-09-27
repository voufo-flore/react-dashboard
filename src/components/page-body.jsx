import "@coreui/coreui/dist/css/coreui.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Navbars/Navbar";
import FullCalendar from "./Calendar/Calendar";
import ColorGenerator from "./Color";
import Accordion from "./Base/accordion";
import Breadcrumbs from "./Base/breadcrumb";
import Cards from "./Base/cards";
import Carousels from "./Base/carousel";
import Collapses from "./Base/collapse";
import ListGroups from "./Base/listgroups";
import Popovers from "./Base/popovers";
import Progress from "./Base/progress";
import Spinners from "./Base/spinners";
import Tooltips from "./Base/tooltips";
import Paginations from "./Base/pagination";
import Tables from "./Base/tables";
import ChecksRadios from "./forms/ChecksRadios";
import FloatingLabels from "./forms/floatinglabels";
import FormControl from "./forms/formcontrol";
import InputGroup from "./forms/inputgroup";
import Layout from "./forms/layout";
import Range from "./forms/range";
import Select from "./forms/select";
import Validation from "./forms/validation";
import MapComponent from "./Google_map";
import Alerts from "./notifications/Alerts";
import Badges from "./notifications/Badges";
import Toasts from "./notifications/Toasts";
import Modals from "./notifications/Modals";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Page500 from "./pages/Page500";
import Register from "./pages/Register";

import CButtons from "./Buttons/buttons";
import Widgets from "./widgets/widgets";
import WidgetsBrand from "./widgets/widgetsbrand";
import WidgetsDropdown from "./widgets/widgetsdropdown";
import CoreUIBrands from "./icons/coreuibrands";
import CoreUIFlags from "./icons/coreuiflags";
import CoreUIFree from "./icons/coreuifree";
import IconsNav from "./Mailopen";
import Charts from "./Charts";
import Notifications from "./NotificationBell";
import LayoutList from "./LayoutList";
import LeftNav from "./leftnav";
import Navbars from "./Base/navbars";

const PageBody = () => {
  const [openmail, setmail] = useState(false);
  const [opennotif, setnotif] = useState(false);
  const [openlist, setlist] = useState(false);
  const [openleftnav, setleftnav] = useState(false);
  const togglemail = () => {
    setmail(!openmail);
  };
  const togglenotif = () => {
    setnotif(!opennotif);
  };
  const togglelist = () => {
    setlist(!openlist);
  };
  const toggleleftnav = () => {
    setleftnav(!openleftnav);
  };
  const hideleftnav = () => {
    setleftnav(false);
  };
  return (
    <>
      <Header
        mailopen={togglemail}
        notifopen={togglenotif}
        listopen={togglelist}
        leftnavopen={toggleleftnav}
        hideleftnav={hideleftnav}
      />
      <IconsNav showmail={openmail} />
      <Notifications shownotif={opennotif} />
      <LayoutList showlist={openlist} />
      <LeftNav showleftnav={openleftnav} hideleftnav={hideleftnav} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<ColorGenerator />} />
          <Route path="/calendar" element={<FullCalendar />} />
          <Route path="/base/accordion" element={<Accordion />} />
          <Route path="/base/breadcrumbs" element={<Breadcrumbs />} />
          <Route path="/base/cards" element={<Cards />} />
          <Route path="/base/carousels" element={<Carousels />} />
          <Route path="/base/collapses" element={<Collapses />} />
          <Route path="/base/listgroups" element={<ListGroups />} />
          <Route path="/base/navbars" element={<Navbars />} />
          <Route path="/base/pagination" element={<Paginations />} />
          <Route path="/base/popovers" element={<Popovers />} />
          <Route path="/base/progress" element={<Progress />} />
          <Route path="/base/spinners" element={<Spinners />} />
          <Route path="/base/tables" element={<Tables />} />
          <Route path="/base/tooltips" element={<Tooltips />} />
          <Route path="/checksradios" element={<ChecksRadios />} />
          <Route path="/floatinglabels" element={<FloatingLabels />} />
          <Route path="/formcontrol" element={<FormControl />} />
          <Route path="/inputgroup" element={<InputGroup />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/range" element={<Range />} />
          <Route path="/select" element={<Select />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/modals" element={<Modals />} />
          <Route path="/toasts" element={<Toasts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/page500" element={<Page500 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buttons" element={<CButtons />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/widgetsbrand" element={<WidgetsBrand />} />
          <Route path="/widgetsdropdown" element={<WidgetsDropdown />} />
          <Route path="/coreuibrands" element={<CoreUIBrands />} />
          <Route path="/coreuiflags" element={<CoreUIFlags />} />
          <Route path="/coreuifree" element={<CoreUIFree />} />
          <Route path="/charts" element={<Charts />} />

          <Route path="/map" element={<MapComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default PageBody;
