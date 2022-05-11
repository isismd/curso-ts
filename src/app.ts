/* let linguagem:string = 'Typescript';
let texto:string = `Olá ${ linguagem }`;
let idade:number = 20;

linguagem = '50';

let getPerfil = function (nome:string, idade:number, email:string):void{
    console.log(nome, idade, email);
};

function getIdade(idade){
    return idade + "anos";
};

let retornaPerfil = (nome:string, idade:number, email:string):void => console.log(nome, idade, email);


let retornaPerfil = (nome:string, idade:number, email:string):void => {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};

getPerfil("isis", 19, "isismd");
let idadeAnos:number = getIdade(65);

console.log(texto,idade); */
/* 
let nome:string = "Ana";
let idade:number = 18;
let eMaior:boolean; 

if (idade > 17){
    eMaior = true;
}else{
    eMaior = false;
}

let lista:string[] = ["verde", "azul"];
let listaNumeros:Array<number> = [76, 21, 33];

enum Cor {vermelho, azul, laranja};

let c: Cor = Cor.laranja;

console.log(c);
console.log(Cor[2]);

let aux:any;
aux = "teste";
aux = 43;
aux = [231, 33, 1];

let arrayAny:any[] = [1, "teste", {}];

function listaNomes(lista:string[]):void{
    console.log(lista);
}

 */

import { Moto } from "./classes/moto-class";
import { Veiculo } from "./classes/veiculo-class";


let camaro:Veiculo = new  Veiculo('camaro');

let honda:Moto = new Moto("Honda");

console.log(honda.getTitulo);
document.getElementById('nomeMoto').innerHTML = honda.getTitulo();