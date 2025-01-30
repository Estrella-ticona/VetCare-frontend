import { HomeIcon } from "@heroicons/react/24/solid";

export function Navbar() {
    return (
        <header className="bg-[#5E83AF] text-white w-full fixed top-0 z-50">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* Logo e Inicio */}
                <div className="flex items-center">
                    <div className="p-2 rounded-md bg-white text-[#486F9A]">
                        <HomeIcon className="h-5 w-5" />
                    </div>
                    <span className="ml-3 font-semibold text-xl">Inicio</span>
                </div>

                {/* Links de navegación */}
                <nav className="flex space-x-6">
                    <a href="#" className="hover:underline">
                        Citas
                    </a>
                    <a href="#" className="hover:underline">
                        Mascotas
                    </a>
                    <a href="#" className="hover:underline">
                        Inventario
                    </a>
                    <a href="#" className="hover:underline">
                        Estadística
                    </a>
                </nav>

                {/* Icono del menú */}
                <div className="p-2 rounded-md bg-white text-[#486F9A]">
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
                </div>
            </div>
        </header>
    );
}
