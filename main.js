let pokemonName = "";
let pokemonImgUrl = "";

const input = document.getElementById("Pname");
const search = document.getElementById("search");
const nameEl = document.getElementById("name");
const imgEl = document.getElementById("img");

function fetchPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        pokemonName = data.name;
        pokemonImgUrl = data.sprites.front_default;
        console.log(data);
        displayPokemon();
      })
      .catch(() => {
        nameEl.textContent = "Pokémon not found";
        imgEl.src = "";
      });
}

function displayPokemon() {
    nameEl.textContent = pokemonName;
    imgEl.src = pokemonImgUrl;
}

function handleSearch() {
    const pokemon = input.value.toLowerCase().trim();
    if (pokemon) {
        fetchPokemon(pokemon);
    }
}

search.addEventListener("click", handleSearch);
