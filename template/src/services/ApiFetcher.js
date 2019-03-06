const api = "http://localhost:3500/api/"

const apifetch = (url) => {
    return fetch(api + url)
}

export {
    apifetch
};