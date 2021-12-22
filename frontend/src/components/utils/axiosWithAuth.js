import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "baseUrl" //GET FROM BACKEND FOLKS WHEN THEY ARE READY !
    });
}

export default axiosWithAuth;