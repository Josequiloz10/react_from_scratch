import {getHeroeById, getHeroesByOwner} from './08-imp-expo';

//@ts-ignore
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000)
// });
//
// promesa.then( (heroe: any) =>{
//     console.log(heroe)
// }).catch(error => console.warn(error));


const getHeroesByIdAsync = (id : sring) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
}

getHeroesByIdAsync(2)
    .then(console.log)
    .catch(console.warn);