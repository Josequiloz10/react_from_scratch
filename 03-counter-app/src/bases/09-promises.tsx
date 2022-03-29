import {getHeroeById, getHeroesByOwner} from './08-imp-expo';

export const getHeroesByIdAsync = (id : any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 1500)
    });
}
