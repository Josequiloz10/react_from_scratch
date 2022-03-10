// @ts-ignore
const api_key = 'g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw'

const http_call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

http_call
    .then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);