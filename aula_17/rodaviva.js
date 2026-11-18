import PromptSync from "prompt-sync";

const input = PromptSync()

const subtotal = input("Digite o número de kits:")
const equipes = input("Digite o número de equipes:")
const resto = input("Digite o número do resto:")
const porEquipe = Math.floor(kits / equipes);
const result_resto = kits % equipes


console.log("Quantidade de kits:", kits)
console.log("Quantidade de equipes:", equipes)
console.log("Kits por equipe:", porEquipe)
console.log("Kits restantes:", resto)