import { HomeIcon } from "@heroicons/react/24/solid";
//arrow-right-end-on-rectangle
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { Button } from "@mui/material";
import { useLogOut } from "../../iam/hooks/useLogOut";
import { Link } from "react-router";
export function Navbar() {
    const { handleLogOut } = useLogOut();
    return (
        <header className="bg-[#5E83AF] text-white w-full mb-auto">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* Logo e Inicio */}
                <Link to="/profile" className=" flex items-center">

                    <div className="p-2 rounded-md bg-white text-[#486F9A]">
                        <HomeIcon className="h-5 w-5" />
                    </div>
                    <span className=" ml-3 font-semibold  text-xl">Perfil</span>
                </Link>

                {/* Links de navegación */}
                <nav className="flex space-x-6">
                    <Link to="/clientes" className="hover:underline">
                        Clientes
                    </Link>
                    <Link to="/citas" className="hover:underline">
                        Citas
                    </Link>
                    <Link to="/historial" className="hover:underline">
                        Historial
                    </Link>
                    <a href="#" className="hover:underline">
                        Inventario
                    </a>
                    <a href="#" className="hover:underline">
                        Estadistica
                    </a>
                </nav>

                {/* Icono del menú */}
                {/*   <div className="p-2 rounded-md bg-white text-[#486F9A]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h18M3 9h18M3 15h10.5"
                        />
                    </svg>
                </div> */}

                <Button className="" onClick={handleLogOut}>
                    {/*  <ArrowRightEndOnRectangleIcon className="h- w-6 text-white" /> */}
                    <div className="p-2 rounded-md bg-white text-[#486F9A]">
                        <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                    </div>
                </Button>
            </div>
        </header >
    );
}
