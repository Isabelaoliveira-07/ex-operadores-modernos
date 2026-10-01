// ==========================================================================
// 3. OPERADOR OU / OR (||)
// Retornao primeiro valor. Se for Falsy, pega o proximo.
// Valores Falsy: false, 0, "", null, undefined, NaN
// ==========================================================================

console.log("\n ==== 3, Operador OU / OR (||) ==== ");
// Exemplo 1: Retorna o primeiro valor verdadeiro (truthy)
console.log("Nome preenchido:", "Davi" || "Visitante"); // "Davi"
console.log("Nome nulo:", null || "Visitante"); // "Visitante"

// Exemplo 2: Comportamento com 0 e string vazia (valores falsy)
// 0 || considera 0 e "" como falsos e substitui pelo padrao:
const pontuacao = 0;
console.log("0 com || (troca por 10):", pontuacao || 10); // 10

const apleido = "";
console.log("String vazia com || (troca por padrão):", apleido || "Anonimo"); // "Anonimo"

//Ex 3: Comparacao direta entre || e ?? com o numero 0
console.log("0 com || :", 0 || 10); // 10 (porque 0 e Falsy)
console.log("0 com ?? :", 0 ?? 10); // 0 (porque 0 nao e null nem undefined)