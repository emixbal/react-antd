import axios from 'axios'
import { notification } from 'antd';
// import history from '../library/history'
import { getToken } from '../library/userAuth'

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
        throw false
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
        throw false
    }
}

function getInstance() {
    const token = getToken()
    var headers = {}

    if (token) {
        headers = {
            Authorization: `Bearer ${token}`,
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

