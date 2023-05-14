const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const botaoPokemonLogo = document.getElementById("pegar-um-pokemon");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const selecionarListaDePokemons = document.querySelector(".listagem-pokemon");
const listaPokemonCompleta = document.querySelector(".listagem-pokemon").innerHTML;
const capturandoBulbasaur = document.getElementById("bulba").innerHTML;
const capturandoCharmander = document.getElementById("charmander").innerHTML;
const capturandoSquirtle = document.getElementById("squirtle").innerHTML;
const pokebola = document.getElementById("logo");



botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");

    if (!modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

botaoPokemonLogo.addEventListener("click", () => {
    var pokedexNumber = getRandomInt(3);
    selecionarListaDePokemons.textContent = "";
    alert("Gotta!!")
    if (pokedexNumber < 2) {
        selecionarListaDePokemons.innerHTML = capturandoBulbasaur;
    } else if (pokedexNumber == 2) {
        selecionarListaDePokemons.innerHTML = capturandoCharmander;
    } else {
        selecionarListaDePokemons.innerHTML = capturandoSquirtle;
    }
});

pokebola.addEventListener("click", () => {
    selecionarListaDePokemons.innerHTML = listaPokemonCompleta;
}
)


