const api = "http://localhost:3500/api/"

const apifetch = (url) => {
    return fetch(api + url)
}

const apiput = (telephone, data) => {
    return fetch(`${api}/orders/${telephone}`, 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
}

export {
    apifetch,
    apiput
};