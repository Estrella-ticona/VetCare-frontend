import { useState } from "react";
import { AuthApi } from "../services/auth-service";
import { User } from "../model/user";

const api = new AuthApi();

export function useSignIn() {
    const [user, setUser] = useState<User>(new User({ email: '', password: '' }));

    const handleChange = (name: keyof User, value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const response = await api.signIn(user);
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