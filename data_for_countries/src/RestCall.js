import axios from 'axios';

export const DEFAULT_URL = "https://restcountries.com";

export const GetAllData = (url,onResult, onError) => {

    axios.get(url)
    .then(
        result => result? onResult(result.data,result.header):onError("Unhandle error",undefined)
    )
    .catch(
        error => onError("catch error",error)
    );
}