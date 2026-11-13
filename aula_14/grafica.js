import PromptSync from "prompt-sync"

const entrada = PromptSync()

const quantidade = parseInt(entrada("Digite a quantidade de páginas:"))
const preco = parseFloat(entrada("Digite o preço unitário:"))

const valor = quantidade * preco

console.log("Total: R$", valor)