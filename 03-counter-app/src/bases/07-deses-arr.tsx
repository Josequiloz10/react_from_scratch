//@ts-ignore
const personajes = ['Elon', 'Bill', 'Jeff'];
const [, , Jeff] = personajes;
console.log(Jeff)

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros)


//TASK
const useState = (value: any) => {
    return [value, () => {console.log('Hola mundo')}];
}

//@ts-ignore
const [nombre, setNombre] = useState('Jose')
console.log(nombre);
setNombre();