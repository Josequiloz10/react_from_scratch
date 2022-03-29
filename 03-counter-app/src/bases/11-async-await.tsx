import axios from 'axios'

// @ts-ignore
export const getImagen = async () => {

    try {
        const api_key = 'plwkfiLXaYXhztqhQECqBxB47HNCQEHf'
        const response = await axios(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const {data} = await response.data;
        const {url} = data.images.original
        return url;
    }catch (e) {
       return e;
    }
}