import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="w-full bg-slate-900 flex flex-wrap justify-center">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
