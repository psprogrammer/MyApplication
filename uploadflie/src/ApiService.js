
import axios from 'axios';

class ApiService {

    upload(data) {
        return axios.post("http://localhost:9001/api/upload", data);
    }
    getFile(){
        return axios.get("http://localhost:9001/api/upload");
    }
}

export default new ApiService();