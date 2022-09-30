import { Animal } from "./animal";
import { Correr } from "./ICorrer";

class Cavalo extends Animal implements Correr {
    constructor(nome: string, idade: number, emitirSom: string) {
        super(nome, idade, emitirSom)
    }
    public correr(): void {
        console.log(`O ${this.nome} tem ${this.idade} anos, faz: ${this.emitirSom}`);
    }
}

export { Cavalo };