document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${name || id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.getElementById("data_id").innerHTML = data.id;
      document.getElementById("data_name").innerHTML = data.name;
      document.getElementById("data_type").innerHTML = data.types
        .map((type) => type.type.name)
        .join(", ");
      document.getElementById("data_moves").innerHTML = data.moves
        .map((move) => move.move.name)
        .slice(0, 5)
        .join(", ");

      const img_link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      document.getElementById("pokemon-image").setAttribute("src", img_link);
    })
    .catch((err) => {
      console.log("Error pokemon not found", err);
    });
  e.preventDefault();
}
