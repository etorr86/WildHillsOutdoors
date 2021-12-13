import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.response.use(response => {
    return response
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;

        default:
            break;
    }
    return Promise.reject(error.response);
})

const responseBody = (response: AxiosResponse) => response.data;
const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const TestErrors = {
    get400Error: () => request.get('errorhandler/bad-request'),
    get401Error: () => request.get('errorhandler/unauthorised'),
    get404Error: () => request.get('errorhandler/not-found'),
    get500Error: () => request.get('errorhandler/server-error'),
    getValidationError: () => request.get('errorhandler/validation-error'),
}

const Catalog = {
    list: () => request.get('products'),
    details: (id: number) => request.get(`products/${id}`)
}

const agent = {
    Catalog,
    TestErrors
}


export default agent;