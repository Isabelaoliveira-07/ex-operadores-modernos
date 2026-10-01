// --------------------------------------------------
// 1. OPTIONAL CHAINING (?.)
// Evita erro (TypeError) ao acessar propriedades inexistentes.
// Retorna 'undefined' com segurança em vez de quebrar o programa.
// --------------------------------------------------

console.log("\n ==== 1, Optional Chaining (?.) ==== \n");

// Ex 1: Sem o operador ?.. acessar propriedade de underfined gera erro
const alunoSemEndereco = { nome: "Bruno" };

// Tentar: alunoSemEndereco.endereco.cidade causaria TypeError.
// Com ?., o acesso é seguro e retorna apenas 'undefined':
console.log("Cidade de Bruno (seguro com ?.):", alunoSemEndereco.endereco?.cidade);

//Ex 2: Quando a propriedade existe, acessa normalmente
const alunoComEndereco = { 
    nome: "Ana",
    endereco: { cidade: "São Paulo" }
};
console.log("Cidade de Ana:", alunoComEndereco.endereco?.cidade);

//Ex 3: Uso de seguro com Arrays 
const usuarios = [{ nome: "Carla" }];
const usuariosVazios = [];

console.log("Primeiro da lista:", usuarios[0]?.nome); // "Carla"
console.log("Primeiro da lista vazia:", usuariosVazios[0]?.nome);
// undefined (sem travar)