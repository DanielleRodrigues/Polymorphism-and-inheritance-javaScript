/*Crie uma hierarquia de classes conforme abaixo com os seguintes atributos e comportamentos (observe a tabela), 
utilize os seus conhecimentos e distribua as características de forma que tudo o que for comum a todos os animais fique na classe Animal: 
Implemente um programa que crie os 3 tipos de animais definidos no exercício anterior e invoque o método que emite o som de cada um de forma polimórfica, isto é, independente do tipo de animal.*/

import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguica } from "./preguica";
import { Correr } from "./ICorrer"; 
import { SobeEmArvore } from "./ISobeEmArvore"; 

const cavalo = new Cavalo('BOJACK', 666, 'IIIIIIHHHHIIIII')
const cachorro = new Cachorro('MEL', 666,'AU AU AU')
const preguica = new Preguica('DANI', 666, 'zzZzzzZ queria star dorminda')

function climb(animal : SobeEmArvore) {
    animal.subir()
}
function run(animal : Correr) {
    animal.correr()
}


climb(preguica);
run(cavalo);
run(cachorro);