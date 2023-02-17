//Once button is clicked the function getPokemon gets called.
document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  //The pokemon name is set to lower case so no errors occur during the search.
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
      // Use slice to only return 5 pokemon moves or a large number of moves will come up.
      document.getElementById("data_moves").innerHTML = data.moves
        .map((move) => move.move.name)
        .slice(0, 5)
        .join(", ");
// The pokemon image is displayed depending on the id of the pokemon.
// The id to a img tag is set to pokemon-image with a blank src. Thr src is updated with the image link.
      const img_link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      document.getElementById("pokemon-image").setAttribute("src", img_link);
    })
    .catch((err) => {
      console.log("Error pokemon not found", err);
    });
  e.preventDefault();
}
