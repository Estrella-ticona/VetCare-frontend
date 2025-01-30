import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-[#C3D2E7]-500 flex flex-col items-center justify-center">
            <Navbar />
            <Outlet />
        </div>
    );
}