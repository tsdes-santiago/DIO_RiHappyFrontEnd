const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 10;
let offset = 0;
const max_pokemon = 151; // Primeira geração

/* Gerando html com a lista de pokemons */

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="clickToDetail(this.querySelector('.number').innerText)">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens( offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

loadMoreButton.addEventListener('click', () => {   
    const offset = pokemonList.children.length
    const recordNext = offset + limit
    if (recordNext >= max_pokemon) {
        const newLimit = max_pokemon - offset
        loadPokemonItens(offset, newLimit)    
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})

function clickToDetail(number) {
    console.log(number.slice(1))
    window.location = "http://127.0.0.1:5500/detail.html?id="+number.slice(1)
}