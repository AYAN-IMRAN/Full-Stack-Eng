async function getData(pokemonName) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!res.ok) throw new Error("Pokémon not found");
    const data = await res.json();
    return data;
  } catch (error) {
    alert("Error: " + error.message);
    return null;
  }
}


function createCard(pokemon) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="hero-description-bk"></div>
    <h3>${pokemon.name.toUpperCase()}</h3>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <p>📏 Height: ${pokemon.height}</p>
    <p>⚖️ Weight: ${pokemon.weight}</p>
    <p>🆔 ID: ${pokemon.id}</p>
  `;
  return card;
}


document.getElementById("pokemon-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const container = document.getElementById("card-container");
  const input = document.getElementById("pokemon-input");
  const name = input.value.trim();
  if (name === "") return;
  const pokemon = await getData(name);
  if (pokemon) {
    container.innerHTML = ""; // Clear old cards
    const card = createCard(pokemon);
    container.appendChild(card);
  }
  input.value = "";
});
