import { useState } from "react";
import { User } from "../../iam/model/user";
import { UserApi } from "../services/user-api";

const api = new UserApi();

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
    }

    const getUser = async () => {
        const response = await api.getUser();
        setUser(response.data);
    }

    const handleSubmit = async () => {
        setIsEditing(false);
        const response = await api.updateUser(user);
    }
    return {
        user,
        getUser,
        handleChange,
        handleSubmit,
        isEditing,
        handleEditMode
    }

}