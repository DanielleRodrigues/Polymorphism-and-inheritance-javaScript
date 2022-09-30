import { Animal } from "./animal";
import { SobeEmArvore } from "./ISobeEmArvore";

class Preguica extends Animal implements SobeEmArvore {
    constructor(nome: string, idade: number, emitirSom: string) {
        super(nome, idade, emitirSom)
    }
    public subir(): void {
        console.log(`O ${this.nome} tem ${this.idade} anos, sobe em arvore faz: ${this.emitirSom}`);
    }
}

export { Preguica };