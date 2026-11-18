import PromptSync from "prompt-sync";

const input = PromptSync()

let estoque = input("Digite o número do estoque inicial:")
let recebimento = input("Digite o número do recebimento:")
let despacho = input("Digite o número do despacho:")
let estoque_final = input("Digite o número do estoque final:")

console.log("Estoque inicial:", estoque)
console.log("Recebimento:", recebimento)
console.log("Despacho:", despacho)
console.log("Estoque final:", estoque_final)

