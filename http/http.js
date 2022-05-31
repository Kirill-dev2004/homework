class Http{
    #endpoint = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/';
    constructor(url){
        this.#endpoint += `${url}/`
    }
    getAll(){
       return fetch(this.#endpoint).then((r) => r.json())
    }
    getId(id){
       return fetch(this.#endpoint + id)
    }
    upData(id, item){
        return fetch(this.#endpoint + id, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then((r) => r.json())
    }
    delete(id){
        return fetch(this.#endpoint + id, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        }).then((r) => r.json());
    }
    create(item){
        return fetch(this.#endpoint, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then((r) => r.json());
    }
}