//@ts-ignore
const personajes = ['Elon', 'Bill', 'Jeff'];
const [, , Jeff] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123]
}

// const [letras, numeros] = retornaArreglo();


//TASK
const useState = (value: any) => {
    return [value, () => {console.log('Hola mundo')}];
}