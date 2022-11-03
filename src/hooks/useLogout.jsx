import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/authSlice";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoguot = () =>
        dispatch(logOut())
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                window.location.reload();
            });
    return handleLoguot;
};

export default useLogout;
