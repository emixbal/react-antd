import axios from 'axios'
import { notification } from 'antd';
// import history from '../library/history'
import { BASE_API_URL } from "../config";
import { getAccessToken, getRefreshToken, removeToken } from '../library/userAuth'

let accessToken = getAccessToken()

async function signout() {
    alert("sesi habis")
    removeToken()
    window.location.reload();
}

async function refreshToken() {
    const refreshToken = getRefreshToken()

    const res = await getInstance().post(`${BASE_API_URL}/auth/refresh`, {
        refresh_token: refreshToken
    }).then((value) => value.data).catch((error)=>{
        if(error.response.status === 403){
            signout()
        }
    })

    if (!res) {
        console.log("========> !res");
        return false
    }

    if (res.Error) {
        console.log("========> ", res.Message);
        return false
    }

    localStorage.setItem("accessToken", res.AccessToken)
    localStorage.setItem("refreshToken", res.RefreshToken)

    accessToken = getAccessToken()

    return true
}

function onError(error) {
    if (!error || !error.response) {
        if (!window.navigator.onLine) {
            console.log("onLine", window.navigator.onLine)

            notification.warning({
                message: 'Error',
                description: 'No internet connection',
            })
        }
        return false
    }

    if (error.response.status === 403) {
        signout()
        return error.response.data
    } else if (error.response.status === 400) {
        notification.error({
            message: 'Error',
            description: error.response.Message,
        })
        return false
    } else if (error.response.status === 404) {
        return error.response.data
    } else {
        notification.error({
            message: 'Error',
            description: 'Terjadi kesalahan',
        })
        return false
    }
}

function getInstance() {
    let headers = {}

    if (accessToken) {
        headers = {
            Authorization: `${accessToken}`,
        }
    }

    return axios.create({
        headers
    });
}


export async function Post(url, params) {
    return getInstance().post(url, params).then((value) => value.data).catch(async function(error){
        if (error.response.status === 401) {
            console.log("need refresh token ");
            if (await refreshToken()) {
                console.log("success refresh token ");
                return await Post(url, params);
            }
        }
        return onError(error)
    })
}

export async function Patch(url, params) {
    return getInstance().patch(url, params).then((value) => value.data).catch(async function(error){
        if (error.response.status === 401) {
            console.log("need refresh token ");
            if (await refreshToken()) {
                console.log("success refresh token ");
                return await Patch(url, params);
            }
        }
        return onError(error)
    })
}

export async function Put(url, params) {
    return getInstance().put(url, params).then((value) => value.data).catch(async function(error){
        if (error.response.status === 401) {
            console.log("need refresh token ");
            if (await refreshToken()) {
                console.log("success refresh token ");
                return await Put(url, params);
            }
        }
        return onError(error)
    })
}

export async function Get(url, params) {
    return getInstance().get(url, { params }).then((value) => value.data).catch(async function (error) {
        if (error.response.status === 401) {
            console.log("need refresh token ");
            if (await refreshToken()) {
                console.log("success refresh token ");
                return await Get(url, params);
            }
        }
        return onError(error)
    })
}

export async function Delete(url, params) {
    return getInstance().delete(url, params).then((value) => value.data).catch(async function (error) {
        if (error.response.status === 401) {
            console.log("need refresh token ");
            if (await refreshToken()) {
                console.log("success refresh token ");
                return await Delete(url, params);
            }
        }
        return onError(error)
    })
}

