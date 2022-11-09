import { Get } from "../../helpers/ajax";
import { BASE_API_URL } from "../../config";

const key = "HOME"

export const type = {
    RESET: `${key}_RESET`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    CHANGE_USERS_DATA: `${key}_CHANGE_USERS_DATA`,
}

export const reset = () => ({
    type: type.RESET,
});

export const changeLoading = (value) => ({
    type: type.CHANGE_LOADING,
    value
})

export const changeUsersData = (value) => ({
    type: type.CHANGE_USERS_DATA,
    value
})

export const handleChangeLoading = () => {
    return async (dispatch, getState) => {
        dispatch(changeLoading(true))
        return
    }
}

export const handleGetUsers = () => {
    return async (dispatch, getState) => {
        let users = []
        const res = await Get(`${BASE_API_URL}/user/all`);
        if(!res){
            return
        }
        if(res.Data){
            users = res.Data
        }
        dispatch(changeUsersData(users || []))
        console.log(res);
        return
    }
}

export default type