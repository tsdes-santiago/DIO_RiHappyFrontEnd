/* Get pokemon id from url */
const id = new URLSearchParams(window.location.search).get('id')

function convertPokemonToAbout(aboutPokemon) {
    return `
        <div class="pokemon">
            <span class="name">${aboutPokemon.name}</span>  
            <span class="number">#${id}</span>
        </div>

        <div class="detail-types">
            <ol class="types">
            ${aboutPokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        </div>
        <div class="img">
        <img src=${aboutPokemon.photo} alt=${aboutPokemon.name}>
        </div>

        <div class="info">
            <ol class="about">
        <li class="about-list">
            <span class="about-item">Height:</span>
            <span class="about-value">${aboutPokemon.height} cm</span>
        </li>
        <li class="about-list">
            <span class="about-item">Weight:</span>
            <span class="about-value">${aboutPokemon.weight} kg</span>
        </li>
        <li class="about-list">
            <span class="about-item">Abilities:</span>
            <span class="about-value">${aboutPokemon.abilities.join(', ')}</span>
        </li>
            </ol>
        </div>
      `
}


pokeApi.getAboutPokemonDetails(id)
    .then((aboutPokemon) => {
        const aboutList = document.querySelector('.content')
        aboutList.innerHTML = convertPokemonToAbout(aboutPokemon)
        aboutList.classList.add(aboutPokemon.type);
    })
