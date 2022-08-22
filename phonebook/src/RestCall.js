import axios from 'axios';

export const DEFAULT_URL = "http://localhost:3001/";

export const GetAllData = (url, onResult, onError) => {
    const config = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get(url, config)
    .then(
        result =>  result? onResult(result.data, result.headers): onError('Unhandle error', undefined)
    )
    .catch(
        error => onError('catch error', error)
    );
}

export const PostData = (data, url, onResult, onError) => {
    axios.post(
        url,
        data
    )
    .then(
        result => result ? onResult(result.data, result.headers) : onError("Unhandle error", undefined)
    )
    .catch(
        error => onError("catch error",error)
    );
}

export const PutData = (data, url, onResult, onError) => {
    axios.put(
        url,
        data
    )
    .then(
        result => result ? onResult(result.data, result.headers) : onError("Unhandle error", undefined)
    )
    .catch(
        error => onError("catch error",error)
    );
}

export const DeleteData = (url, onResult, onError) => {
    axios.delete(
        url
    )
    .then(
        result => result ? onResult(result.data, result.headers) : onError("Unhandle error", undefined)
    )
    .catch(
        error => onError("catch error",error)
    );
}