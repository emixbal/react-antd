import { Get } from "../../helpers/ajax";
import { BASE_API_URL } from "../../config";

const key = "HOME"

export const type = {
    RESET: `${key}_RESET`,
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
}

export const reset = () => ({
    type: type.RESET,
});

export const changeLoading = (value) => ({
    type: type.CHANGE_LOADING,
    value
})

export const handleChangeLoading = (event) => {
    return async (dispatch, getState) => {
        dispatch(changeLoading(true))
        return
    }
}

export const handleGetUsers = () => {
    return async (dispatch, getState) => {
        dispatch(changeLoading(true))
        const res = await Get(`${BASE_API_URL}/user/all`);
        dispatch(changeLoading(false))

        console.log(res);

        return
    }
}

export default type