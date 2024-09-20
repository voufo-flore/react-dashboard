import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";
import Header from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
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
import Navbars from "./Base/navbars";
import ChecksRadios from "./forms/ChecksRadios";
import FloatingLabels from "./forms/floatinglabels";
import FormControl from "./forms/formcontrol";
import InputGroup from "./forms/inputgroup";
import Layout from "./forms/layout";
import Range from "./forms/range";
import Select from "./forms/select";
import Validation from "./forms/validation";
import MapComponent from "./Google_map";




const PageBody = () => {
  return (
    <>
      <Header />
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
          <Route path="/base/pagination" element={<Paginations />} />
          <Route path="/base/popovers" element={<Popovers />} />
          <Route path="/base/progress" element={<Progress />} />
          <Route path="/base/spinners" element={<Spinners />} />
          <Route path="/base/tables" element={<Tables />} />
          <Route path="/base/tooltips" element={<Tooltips />} />
          <Route path="/base/navbars" element={<Navbars />} />
          <Route path="/base/checksradios" element={<ChecksRadios />} />
          <Route path="/base/floatinglabels" element={<FloatingLabels />} />
          <Route path="/base/formcontrol" element={<FormControl />} />
          <Route path="/base/inputgroup" element={<InputGroup />} />
          <Route path="/base/layout" element={<Layout />} />
          <Route path="/base/range" element={<Range />} />
          <Route path="/base/select" element={<Select />} />
          <Route path="/base/validation" element={<Validation />} />

          <Route path="/base/maps" element={<MapComponent/>} />


        </Routes>
      </div>
    </>
  );
};

export default PageBody;
