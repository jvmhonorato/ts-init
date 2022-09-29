"use strict";
exports.__esModule = true;
var pontoA = {
    x: 1,
    y: 2
};
//use models to type the object
var victor = {
    nome: 'Victor',
    sexo: "m",
    idade: 33,
    teste: 10
};
//use the type object as a function params
function ola(pessoa) {
    console.log('ola', pessoa.nome);
}
ola({ nome: 'teste', sexo: "m", idade: 10 });
//implements intefarce on class
var Funcionario = /** @class */ (function () {
    function Funcionario(nome) {
        this.nome = nome;
    }
    return Funcionario;
}());
var func1 = new Funcionario('Victor');
