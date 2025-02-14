import { useNavigate, Outlet } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { useEffect } from "react";

const PrivateRoute = ({ role }: { role: "admin" | "user" }) => {
    const navigate = useNavigate();
    const isLogin = !!localStorage.getItem("accessToken");
    const userRole = localStorage.getItem("role");
    const toastId = "login-toast";

    useEffect(() => {
        if (!isLogin) {
            toast.error("로그인을 해주셔야 합니다!", {
                toastId,
                position: "top-right",
                pauseOnHover: false,
                closeButton: false,
                autoClose: 1000,
                transition: Flip,
            });
            navigate("/")
            return;
        }

        if (userRole !== role) {
            toast.error("권한이 없습니다.", {
                position: "top-right",
                pauseOnHover: false,
                closeButton: false,
                autoClose: 1000,
                transition: Flip,
            });
            if (userRole === "user") {
                navigate("/student");
            }
            else if (userRole === "admin") {
                navigate("/admin")
            }
            else {
                navigate("/")
            }
        }
    }, [isLogin, userRole, role, navigate]);

    if (!isLogin || userRole !== role) {
        return null;
    }

    return <Outlet />;
};

export default PrivateRoute;
