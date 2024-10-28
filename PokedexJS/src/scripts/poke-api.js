
const pokeApi = {}

function convertPokeAPIDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.type = type
    pokemon.types = types
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

/* Convertendo dados do API para a classe AboutPokemon */
function convertPokeAPIDetailToPokemonAbout(pokeDetail) {
    const about = new AboutPokemon()
    about.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    about.type = type
    about.types = types
    about.photo = pokeDetail.sprites.other.dream_world.front_default

    about.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    about.height = pokeDetail.height * 10 //convert to cm
    about.weight = pokeDetail.weight / 10 //convert to Kg
    return about
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeAPIDetailToPokemon)
        .catch((error) => console.log(error))
}
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.log(error))
}

pokeApi.getAboutPokemonDetails = (id) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        .then((response) => response.json())
        .then(convertPokeAPIDetailToPokemonAbout)
        .catch((error) => console.log(error))
}