import PromptSync from "prompt-sync";
const input = PromptSync()
let sub_total = Number(input("Digite o subtotal:"))
console.log("Subtotal inicial:", sub_total)
sub_total = sub_total + sub_total * (5 / 100)

console.log("Taxa de serviço: 5%")
console.log("Total atualizado: ", sub_total.toFixed(2))