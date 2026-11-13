import PromptSync from "prompt-sync"
const entrada = PromptSync()

const nome = entrada("Digite seu nome:")
const idade = entrada("Digite sua idade:")
const bairro = entrada("Digite seu bairro:")

console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("Bairro:", bairro)

console.log(`Ficha: ${nome} | ${idade} anos | Bairro: ${bairro}`)