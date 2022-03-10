//@ts-ignore
const persona = {
    nombre: 'Bruce',
    edad: 40,
    clave: 'loveBatigirl',
    rango: 'Enterpriser'
}

//@ts-ignore
const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave)


const useContext = ({nombre, clave, rango = 'Justice'} : {nombre: string, clave:string, rango?: string}) => {
    return {
        nombreClave : clave,
        experience: rango,
        latlng:{
            lat: 14.4444,
            lng: 15.3546
        }
    }
}


const{nombreClave, experience, latlng:{lat,lng}} = useContext(persona);

console.log( nombreClave, experience, lat,lng)