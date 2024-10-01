import PageBody from "./page-body";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

export const Page = () => {
  const [opensidebar, setsidebar]=useState(false);
  const togglesidebar = () => {
    setsidebar(!opensidebar);
  };
  const closesidebar = () => {
    setsidebar(false);
  };
  return (
    <div className="main">
      <div className="navbar-section">
        <Sidebar sidebar={opensidebar} nosidebar={closesidebar} />
      </div>
      <div className="content-section">
        <PageBody togglesidebar={togglesidebar}  />
      </div>
    </div>
  );
};
export default Page;
