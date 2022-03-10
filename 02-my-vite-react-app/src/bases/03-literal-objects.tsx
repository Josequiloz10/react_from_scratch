const persona = {
    nombre: 'Tommy',
    apellido: 'Angelo',
    edad: '51',
    direccion: {
        ciudad :'Yorkshire',
        zip: '6150',
        lat: '3.141546',
        long: '15.15615'
    }
}

const persona2 = {...persona};
persona2.nombre = 'Rick';
//@ts-ignore
console.log(persona);
//@ts-ignore
console.log(persona2);

export {}