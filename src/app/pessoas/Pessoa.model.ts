export interface Pessoa {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos: Contato[];

}

export interface ResponsePessoas {
    data: Pessoa[];
}

export interface Contato {
    nome: string;
    telefone: string;
    email: string;
}

export interface RequestCreate {
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos: Contato[];
}

export interface ResponseCreate {
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos: Contato[];
}