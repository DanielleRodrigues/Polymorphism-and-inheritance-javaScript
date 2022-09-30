import { Animal } from "./animal";
import { Correr } from "./ICorrer";

class Cachorro extends Animal implements Correr {
    constructor(nome: string, idade: number, emitirSom: string) {
        super(nome, idade, emitirSom)
    }
    public correr(): void {
        console.log(`O ${this.nome} tem ${this.idade} anos e faz: ${this.emitirSom}`);
    }
}

export { Cachorro };