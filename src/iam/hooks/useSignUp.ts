import { useState } from "react";
import { AuthApi } from "../services/auth-service";
import { User } from "../model/user";

const api = new AuthApi();

export function useSignUp() {
    const [user, setUser] = useState<User>(new User());

    const handleChange = (name: keyof User, value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const response = await api.signUp(user);
        const token = response.data.token;
        if (token)
            localStorage.setItem("token", token);
    }

    return {
        user,
        handleChange,
        handleSubmit
    }
}