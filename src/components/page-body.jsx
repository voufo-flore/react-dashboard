import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";
import Header from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FullCalendar from "./Calendar/Calendar";
import ColorGenerator from "./Color";
import Accordion from "./Base/accordion";
import Breadcrumbs from "./Base/breadcrumb";

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
        </Routes>
      </div>
    </>
  );
};

export default PageBody;
