
import { PencilIcon } from "@heroicons/react/24/solid";

export function Profile() {
    return (
        < div className="bg-[#7398C4] text-white rounded-xl p-8 w-full max-w-4xl shadow-lg  " >
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Datos personales</h1>
                <button className="flex items-center space-x-2 bg-white text-[#486F9A] py-2 px-4 rounded-full">
                    <PencilIcon className="h-5 w-5" />
                    <span>Editar datos</span>
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Nombre completo</h2>
                    <p className="text-lg font-medium">Diego Daniel Bastidas</p>
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Especialidad</h2>
                    <p className="text-lg font-medium">Cirujano</p>
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">
                        Correo electrónico
                    </h2>
                    <p className="text-lg font-medium">diego123@gmail.com</p>
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">DNI</h2>
                    <p className="text-lg font-medium">74658432</p>
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Celular</h2>
                    <p className="text-lg font-medium">980441940</p>
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Contraseña</h2>
                    <p className="text-lg font-medium">****************</p>
                </div>
            </div>
        </div >
    );
}
