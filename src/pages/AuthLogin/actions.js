const key = "AUTH_LOGIN"

export const type = {
    CHANGE_LOADING: `${key}_CHANGE_LOADING`,
    RESET: `${key}_RESET`,
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


export default type