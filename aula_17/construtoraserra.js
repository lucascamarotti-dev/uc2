import PromptSync from "prompt-sync";

const input = PromptSync()

const largura = input("Digite a largura em m:")
const comprimento = input( "Digite o comprimento em m:")
const area = comprimento * largura



console.log("largura (m):", largura)
console.log("comprimento (m):", comprimento)
console.log("area:", area. toFixed() )
