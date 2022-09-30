abstract class Animal {
    public nome: string;
    public idade: number
    public emitirSom: string

    constructor(nome: string, idade: number, emitirSom: string, ) {
        this.nome = nome
        this.idade = idade
        this.emitirSom = emitirSom
    }
}

export { Animal };