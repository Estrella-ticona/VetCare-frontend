import { useState } from "react";
import { AuthApi } from "../services/auth-api";
import { User } from "../model/user";
import { useNavigate } from "react-router";
const api = new AuthApi();

export function useSignUp() {
    const [user, setUser] = useState<User>(new User());
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (name: keyof User, value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);

        if (!loading) {
            const response = await api.signUp(user);
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token);
                navigate("/profile");
            }
        }
    }

    return {
        user,
        handleChange,
        handleSubmit,
        loading
    }
}