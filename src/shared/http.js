import axios from "axios";
 
export default class Http{
    #API_URL = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos/' 

    get(){
        return axios(this.#API_URL).then((r) => r.data)
    }

    getSingle(id){
        return axios(this.#API_URL + id).then((r) => r.data)
    }
}