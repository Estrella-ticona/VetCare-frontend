import { useNavigate } from "react-router";

export function useLogOut() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (localStorage.getItem("token"))
            localStorage.removeItem("token");
        navigate("/login");
    }

    return {
        handleLogOut
    }
}