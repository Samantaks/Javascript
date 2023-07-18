class Pessoa {
    constructor (nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    apresentar() {

        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        console.log(`${this.profissao} é a minha profissão`);
    }

}

let Pessoa1 = new Pessoa ("Joao", 23, "Bombeiro");

Pessoa1.apresentar();