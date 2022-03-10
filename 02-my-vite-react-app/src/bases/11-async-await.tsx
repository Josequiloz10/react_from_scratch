// @ts-ignore
const getImagen = async () => {

    try {
        const api_key = 'g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw'
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const {data} = await response.json();
        const {url} = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    }catch (e) {
        console.error(e);
    }
}

getImagen();