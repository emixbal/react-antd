export const getAccessToken = () => {
    return localStorage.getItem("accessToken")
}

export const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}