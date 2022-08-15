class Http{
    #API_URL = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/'
    
    constructor(){}

    create(url, item){
        return axios.post(this.#API_URL + url, item).then((r) => r.data)
    }

    getAll(url){
        return axios(this.#API_URL + url).then((r) => r.data)
    }

    upData(url, id, item){
        return axios.put(this.#API_URL + url + id, item).then((r) => r.data)
    }

    delete(url, id){
        return axios.delete(this.#API_URL + url + id).then((r) => r.data)
    }
}