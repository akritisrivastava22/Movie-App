const input = document.getElementsByTagName("input")[0];

async function handleSearch(event) {
  event.preventDefault();
  // if(input.status != 200){
  //   alert("Enter correct movie name");
  // }
  const moviename = input.value;
  const result = await fetch(
    `https://www.omdbapi.com/?apikey=a46c2bf6&t=${moviename}`
  );
 
  const show = await result.json();
  console.log(show);

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
  } = show;

  const movieimg = document.getElementById("photo");
  movieimg.src = Poster;

  const name = document.getElementById("Title");
  name.innerHTML = Title;

  const movieyear = document.getElementById("Year");
  movieyear.innerHTML = Year;

  const movieRated = document.getElementById("Rated");
  movieRated.innerHTML = Rated;

  const movieReleased = document.getElementById("Released");
  movieReleased.innerHTML = Released;

  const movieRuntime = document.getElementById("Runtime");
  movieRuntime.innerHTML = Runtime;

  const movieGenre = document.getElementById("Genre");
  movieGenre.innerHTML = Genre;

  const movieDirector = document.getElementById("Director");
  movieDirector.innerHTML = Director;

  const movieWriter = document.getElementById("Writer");
  movieWriter.innerHTML = Writer;

  const movieActors = document.getElementById("Actors");
  movieActors.innerHTML = Actors;

  const moviePlot = document.getElementById("Plot");
  moviePlot.innerHTML = Plot;

  const movieLanguage = document.getElementById("Language");
  movieLanguage.innerHTML = Language;

  const movieCountry = document.getElementById("Country");
  movieCountry.innerHTML = Country;

  const movieAwards = document.getElementById("Awards");
  movieAwards.innerHTML = Awards;
}
