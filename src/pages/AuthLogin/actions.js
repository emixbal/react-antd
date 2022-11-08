import { Post } from "../../helpers/ajax";
import { BASE_API_URL } from "../../config";

import { notification } from 'antd';

const key = "AUTH_LOGIN"

export const type = {
    RESET: `${key}_RESET`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_EMAIL: `${key}_CHANGE_EMAIL`,
    CHANGE_PASSWORD: `${key}_CHANGE_PASSWORD`,
}

export const reset = () => ({
    type: type.RESET,
});

export const changeLoading = (value) => ({
    type: type.CHANGE_LOADING,
    value
})

export const changeEmail = (value) => ({
    type: type.CHANGE_EMAIL,
    value
})

export const changePassword = (value) => ({
    type: type.CHANGE_PASSWORD,
    value
})

export const handleChangeEmail = (data) => {
    return async (dispatch, getState) => {
        dispatch(changeEmail(data.target.value))
        return
    }
}

export const handleChangePassword = (data) => {
    return async (dispatch, getState) => {
        dispatch(changePassword(data.target.value))
        return
    }
}

export const handleLogin = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const {
            email, password
        } = state.authLogin;

        dispatch(changeLoading(true))
        const res = await Post(`${BASE_API_URL}/auth/login`, {
            email, password
        });
        dispatch(changeLoading(false))

        if(!res){
            return notification.error({
                message: 'Error',
                description:"Hubungi administrator",
            })
        }
        
        if(res.error){
            return notification.error({
                message: 'Error',
                description:res.message,
            })
        }

        localStorage.setItem("accessToken", res.AccessToken)
        localStorage.setItem("refreshToken", res.RefreshToken)
        window.location.reload();
        
        dispatch(changeLoading(false))
        return
    }
}

export const handleChangeLoading = (event) => {
    return async (dispatch, getState) => {
        dispatch(changeLoading(true))
        return
    }
}

export default type