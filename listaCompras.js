const prompt = require('prompt-sync')();

let listaDeCompras = []

function adicionar(item){
    listaDeCompras.push(item)
    console.log(`O item adicionado foi ${item}`)
    console.log("=======================")
    listaDeCompras.forEach(itens => (console.log(itens)))
    console.log("=======================")
}
function remover(item){
    
    let index = listaDeCompras.indexOf(item)
    let verificador = listaDeCompras.includes(item)
    if(verificador == true){
        listaDeCompras.splice(index, 1)
        console.log(`O item removido foi ${item}`)
        console.log("=======================")
        listaDeCompras.forEach(itens => (console.log(itens)))
        console.log("=======================")
    }else{
        console.log(`${item} não está na lista`)
    }
}
function lista(){
    console.log("======== LISTA ========")
    listaDeCompras.forEach(itens => (console.log(itens)))
    console.log("=======================")
}

let escolher
do{
    console.log("==== Menu de ações ====")
    console.log("Adicionar item - (0)")
    console.log("Remover item - (1)")
    console.log("=======================")

    let opcao = parseInt(prompt("Digite a ação desejada: "))

    switch(opcao){
        case 0:
            
            let item = prompt("Digite o item que deseja adicionar: ")
            adicionar(item)
            break    
        case 1:
            if(listaDeCompras.length === 0){
                console.log("A lista ainda está vazia, adicione algo para poder remover")
            }else{
                console.log("======== LISTA ========")
                let itemRemovido = prompt("Digite o item que deseja remover: ")
                remover(itemRemovido)
            }
            break
        default:
            console.log("Desculpe, a opção escolhida não existe. Escolha outra")        
    }    
    escolher = prompt("Deseja fazer mais alguma ação? (S/N) ").toLowerCase()
}while(escolher == 's')

lista()

console.log("Obrigado por usar o sistema :)")
