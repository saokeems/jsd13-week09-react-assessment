import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <NavBar />
      <main className="flex flex-col p-6 items-center">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
