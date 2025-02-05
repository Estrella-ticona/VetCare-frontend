import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-celeste-200  ">
            <Navbar />
            <div className=" mt-15 ">
                <Outlet />
            </div>
        </div>
    );
}