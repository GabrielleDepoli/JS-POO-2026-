// 1 - Requisitos 1 e 2 Abstração e encapsulamento
class Pedido {
    #cliente //atributo encapsulado 

    constructor(cliente) {
        this.#cliente = cliente
    }

    //abstração - método herdado
    mostrarPedido() {
        return "Pedido enviado!"
    }
    
    //Getter para acessar o atributo encapsulado
    getCliente() {
        return this.#cliente
    }

}

// 3 - Herança e Polimorfismo
//Classe PedidoLanche

class PedidoLanche extends Pedido {

    // Método próprio
    mostrarPedido() {
        return `Pedido de lanche enviado!` 
    }
}

//Classe PedidoPizza
class PedidoPizza extends Pedido {

    // Método próprio
    mostrarPedidos() {
        return `Pedido de pizza enviado!`
    }
}

// 5 - Função Polimórfica
function exibirPedido(pedido) {
    return pedido.mostrarPedido()
}

//Criando objetos
const pizza = new PedidoPizza("Ana")
const lanche = new PedidoLanche("Carlos")


// Exibindo
document.body.innerHTML = `
    <h1>Sistema de Pedidos</h1>

    <h2>Pedido 1</h2>
    <P>Cliente: ${pizza.getCliente()}</p>
    <p>${pizza.mostrarPedidos()}</p>
    <p>________________________________</p>

    <h2>Pedido 2</h2>
    <P>Cliente: ${lanche.getCliente()}</p>
    <p>${lanche.mostrarPedido()}</p>
`