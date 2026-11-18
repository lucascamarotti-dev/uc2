import PromptSync from "prompt-sync";

const input = PromptSync()

const km = input("Digite o número de quilometros percorridos:")
const l = input("Digite o número de litros consumidos:")
const consumo = km / l


console.log("Quilometros percorridos:", km)
console.log("Litros consumidos:", l)
console.log("Consumo médio:", km/l)

Quilômetros percorridos 360
Litros consumidos: 30
Consumo médio: 12.00 