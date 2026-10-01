// ==============================================================================
// 2. MULISH COALESCING (??)
// Define valr padrao APENAS se for 'null' ou 'undefined'.
//Preserva valores validos como 0, false, ou string vazia ("").
// ==============================================================================

console.log("\n ==== 2, Nullish Coalescing (??) ==== ");

// Ex 1: Substitui um null ou undefined por um valor amigavel
const tema = null;
console.log("Tema:", tema ?? "claro"); // "claro"
const telefone = undefined;
console.log("Telefone:", telefone ?? "Não informado"); 

// Ex 3:Uso seguro com Arrays
const usuarios = [{ nome: "Carla" }];
const usuariosVazios = [];

console.log("Primeiro da lista:", usuarios[0]?.nome); // "Carla"
console.log("Primeiro da lista vazia:", usuariosVazios[0]?.nome);
// undefined (sem travar)
