class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    infoPessoa(){
        return this.nome + ' tem ' + this.idade + ' anos';
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }
    
    infoAluno(){
        return this.infoPessoa() + ' e estuda ' + this.curso;
    }
}

class Professor extends Pessoa{
    constructor(nome, idade, departamento){
        super(nome, idade);
        this.departamento = departamento;
    }

    infoProfessor(){
        return this.infoPessoa() + ' e leciona ' + this.departamento;
    }
}