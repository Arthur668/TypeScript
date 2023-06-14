function criarPessoa(config) {
    var pessoa = { nome: 'não Informado', idade: 0 };
    if (config.nome) {
        pessoa.nome = config.nome;
    }
    if (config.idade) {
        pessoa.idade = config.idade;
    }
    return pessoa;
}
var joao = criarPessoa({ nome: "João" });
console.log(joao);
