export{}

//model type
interface Point {
    x: number;
    y: number;
}

const pontoA: Point = {
    x:1,
    y:2
}
//model types
interface Pessoa {
    nome:string;
    sexo: 'm'|'f';
    [key: string]:string | number;
}

//use models to type the object
const victor: Pessoa= {
    nome: 'Victor',
    sexo:"m",
    idade: 33,
    teste: 10
}

//use the type object as a function params
function ola(pessoa: Pessoa){
    console.log('ola', pessoa.nome)
}
ola({nome: 'teste', sexo: "m" , idade:10})


