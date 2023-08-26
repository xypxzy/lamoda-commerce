import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Предположим, что вы используете Redux для хранения состояния
import { setAuthStatus } from "../store/auth/authSlice";

export function useTokenExpirationCheck() {
    const dispatch = useDispatch();

    useEffect(() => {
        const currentDate = new Date();
        const token = localStorage.getItem("auth");

        if (token) {
            const tokenObject = JSON.parse(token);

            const parts = tokenObject.refresh_token.split(".");
            const payloadBase64 = parts[1];
            const decodedPayload = JSON.parse(atob(payloadBase64));
            const expUnixTimestamp = decodedPayload.exp;
            const expirationDate = new Date(expUnixTimestamp * 1000);

            const parts1 = tokenObject.access_token.split(".");
            const payloadBase641 = parts1[1];
            const decodedPayload1 = JSON.parse(atob(payloadBase641));
            const expUnixTimestamp1 = decodedPayload1.exp;

            if (expirationDate === currentDate) {
                dispatch(setAuthStatus(false));
            } else if (expirationDate !== currentDate) {
                dispatch(setAuthStatus(true));
            } else if (expUnixTimestamp1 === currentDate) {
                dispatch(setAuthStatus(true));
            }
        } else {
            localStorage.setItem('role', JSON.stringify(false))
        }
    }, [dispatch]);
}