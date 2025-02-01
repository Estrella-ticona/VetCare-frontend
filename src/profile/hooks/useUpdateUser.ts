import { useState } from "react";
import { User } from "../../iam/model/user";
import { UserApi } from "../services/user-api";

const api = new UserApi();
const defaultPassword = "********";

export function useUpdateUser() {
    const [user, setUser] = useState<User>(new User());
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (name: keyof User, value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleEditMode = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            // Limpiar la contraseña al entrar en modo edición
            setUser((prevUser) => ({
                ...prevUser,
                password: "",  // Borrar la contraseña para permitir la edición
            }));
        } else {
            // Si salimos del modo edición sin cambiar la contraseña, restauramos el valor predeterminado
            if (!user.password) {
                setUser((prevUser) => ({
                    ...prevUser,
                    password: defaultPassword,  // Restaurar al valor predeterminado si no se editó
                }));
            }
        }
    }

    const getUser = async () => {
        const response = await api.getUser();
        setUser(response.data);
        // Aquí podrías configurar la contraseña si es necesario, pero supongo que el valor predeterminado es "*****"
        setUser((prevUser) => ({
            ...prevUser,
            password: defaultPassword,  // Establecer el valor predeterminado de la contraseña
        }));
    }

    const handleSubmit = async () => {
        setIsEditing(false);
        // Si la contraseña fue cambiada, la enviamos; si no, la dejamos como está o la borramos
        const updatedUser = {
            ...user,
            password: user.password === defaultPassword ? undefined : user.password,  // Solo enviar la nueva contraseña si fue modificada
        };
        await api.updateUser(updatedUser);
    }

    return {
        user,
        getUser,
        handleChange,
        handleSubmit,
        isEditing,
        handleEditMode,
    }
}
