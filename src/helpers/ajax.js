import axios from 'axios'
import { notification } from 'antd';
// import history from '../library/history'
import { getAccessToken } from '../library/userAuth'

async function signout() {
    // history.push("/login")
}

function onError(error) {
    if (!error || !error.response) {
        if (!window.navigator.onLine) {
            console.log("onLine", window.navigator.onLine)

            notification.warning({
                message: 'Error',
                description:'No internet connection',
            })
        }
        return false
    }

    if (error.response.status === 401) {
        signout()
    } else if (error.response.status === 400) {
        return error.response.data
    } else if (error.response.status === 404) {
        return false
    } else {
        notification.error({
            message: 'Error',
            description:'Connection error',
        })
        return false
    }
}

function getInstance() {
    const accessToken = getAccessToken()
    var headers = {}

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
    return getInstance().post(url, params).then((value) => value.data).catch(onError)
}

export async function Patch(url, params) {
    return getInstance().patch(url, params).then((value) => value.data).catch(onError)
}

export async function Put(url, params) {
    return getInstance().put(url, params).then((value) => value.data).catch(onError)
}

export async function Get(url, params) {
    return getInstance().get(url, { params }).then((value) => value.data).catch(onError)
}

export async function Delete(url, params) {
    return getInstance().delete(url, params).then((value) => value.data).catch(onError)
}

