import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-celeste-200 flex flex-col items-center justify-center">
            <Navbar />
            <Outlet />
        </div>
    );
}