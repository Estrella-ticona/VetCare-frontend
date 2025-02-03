
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";
import TextField from '@mui/material/TextField';
export function Profile() {
    const { user, handleChange, getUser, handleSubmit, isEditing, handleEditMode } = useUpdateUser();
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="bg-celeste-500 text-white rounded-xl p-8 w-full max-w-4xl shadow-lg  " >

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Datos personales</h1>
                {!isEditing &&
                    <button className="hover:cursor-pointer flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full"
                        onClick={handleEditMode}>
                        <PencilIcon className="h-5 w-5" />
                        <span>Editar datos</span>
                    </button>
                }
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Nombre completo</h2>
                    <TextField
                        className="text-lg font-medium"
                        disabled={!isEditing}
                        value={user.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        variant="standard"
                    />
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Especialidad</h2>
                    <TextField
                        className="text-lg font-medium"
                        value={user.speciality}
                        disabled={!isEditing}
                        onChange={(e) => handleChange('speciality', e.target.value)}
                        variant="standard"
                    />
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">
                        Correo electrónico
                    </h2>
                    <TextField className="text-lg font-medium"
                        value={user.email}
                        disabled={!isEditing}
                        onChange={(e) => handleChange('email', e.target.value)}
                        variant="standard"
                    />
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">DNI</h2>
                    <TextField className="text-lg font-medium"
                        value={user.dni}
                        disabled={!isEditing}
                        onChange={(e) => handleChange('dni', e.target.value)}
                        variant="standard"
                    />
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Celular</h2>
                    <TextField className="text-lg font-medium"
                        value={user.phone}
                        disabled={!isEditing}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        variant="standard"
                    />
                </div>
                <div>
                    <h2 className="text-sm uppercase text-gray-300">Contraseña</h2>
                    <TextField
                        className="text-lg font-medium"
                        type="text"
                        value={isEditing ? user.password || "" : "********"}
                        disabled={!isEditing}
                        onChange={(e) => handleChange("password", e.target.value)}
                        variant="standard"
                    />
                </div>

            </div>

            <div className="flex items-center justify-end">
                {isEditing &&
                    <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full"
                    >
                        <PencilIcon className="h-5 w-5" />
                        <button onClick={handleSubmit} >GUARDAR</button>
                        <button onClick={handleEditMode}>SALIR </button>





                    </div>
                }
            </div>
        </div >
    );
}
