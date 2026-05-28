
// Classe pai
class Animal {
    constructor(nome) {
        this.nome = nome
    }

    // Método herdado
    dormir() {
        return `${this.nome} está dormindo.`
    }
}

// Classe Cavalo
class Cavalo extends Animal {

    // Método próprio
    relinchar() {
        return `${this.nome} fez: Iiiirrrrrí.`
    }
}

// Classe Pássaro
class Passaro extends Animal {

    // Método próprio
    cantar() {
        return `${this.nome} fez: Piu piu!`
    }
}

// Criando objetos
const cavalo = new Cavalo('Pé de pano')
const passaro = new Passaro('Piu')

// Exibindo na tela
document.body.innerHTML = `
    <h1>Herança</h1>

    <h2>Cavalo</h2>
    <p>${cavalo.dormir()}</p>
    <p>${cavalo.relinchar()}</p>

    <h2>Pássaro</h2>
    <p>${passaro.dormir()}</p>
    <p>${passaro.cantar()}</p>

`
    