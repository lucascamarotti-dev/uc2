import PromptSync from "prompt-sync";

const input = PromptSync()

const peso = input("Digite o peso em KG:")
const altura = input( "Digite a altura em M:")
const IMC = peso / (altura ** 2)




console.log("Peso (kg):", peso)
console.log("Altura (m):", altura)
console.log("IMC:", peso / (altura ** 2))
