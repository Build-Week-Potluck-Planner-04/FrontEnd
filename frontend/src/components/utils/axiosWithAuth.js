import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "https://bw-potluck-planner-04.herokuapp.com/" //GED !
    });
}

export default axiosWithAuth;