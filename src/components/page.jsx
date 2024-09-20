import PageBody from "./page-body";
import Sidebar from "./Sidebar/Sidebar";

export const Page = () => {
  return (
    <div className="main">
      <div className="navbar-section">
        <Sidebar />
      </div>
      <div className="content-section">
        <PageBody />
      </div>
    </div>
  );
};
export default Page;
