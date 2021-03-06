import axios from "axios";
import {actionTypes} from "./index";

const registerSuccess = (data) => ({
    type: actionTypes.REGISTER_SUCCESS,
    data
});

const registerFail = (message) => ({
    type: actionTypes.REGISTER_FAIL,
    message
});

export const cleanRegister = () => ({
    type: actionTypes.CLEAN_REGISTER
});

export const register = (values) => {
    return (dispatch) => {
        let data = {"username": values.username, "password":values.password, "type": 1};
        axios.post("/api/register/register", data)
        /*axios.get("/api/register/register")*/
            .then((res)=>{
                const result = res.data.data;
                if (result.code === 0 && res.status === 200) {
                    dispatch(registerSuccess(result));
                } else {
                    dispatch(registerFail(result.message));
                }
            }).catch((res)=>{
                console.log(res);
        })
    }
};