import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "https://bw-potluck-planner-04.herokuapp.com/" //GET FROM BACKEND FOLKS WHEN THEY ARE READY !
    });
}

export default axiosWithAuth;