const input = document.getElementsByTagName("input")[0];

async function handleSearch(event) {
  event.preventDefault();
  
  const moviename = input.value;
  const result = await fetch(
    `https://www.omdbapi.com/?apikey=a46c2bf6&t=${moviename}`
  );
  const show = await result.json();
  console.log(show);
  
    if (show.Response === "False") {
      alert("Enter a valid movie name");
      return ;
    }
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

  const name = document.getElementById("title");
  name.innerHTML = Title;

  const movieyear = document.getElementById("year");
  movieyear.innerHTML = Year;

  const movieRated = document.getElementById("rated");
  movieRated.innerHTML = Rated;

  const movieReleased = document.getElementById("released");
  movieReleased.innerHTML = Released;

  const movieRuntime = document.getElementById("runtime");
  movieRuntime.innerHTML = Runtime;

  const movieGenre = document.getElementById("genre");
  movieGenre.innerHTML = Genre;

  const movieDirector = document.getElementById("director");
  movieDirector.innerHTML = Director;

  const movieWriter = document.getElementById("writer");
  movieWriter.innerHTML = Writer;

  const movieActors = document.getElementById("actors");
  movieActors.innerHTML = Actors;

  const moviePlot = document.getElementById("plot");
  moviePlot.innerHTML = Plot;

  const movieLanguage = document.getElementById("language");
  movieLanguage.innerHTML = Language;

  const movieCountry = document.getElementById("country");
  movieCountry.innerHTML = Country;

  const movieAwards = document.getElementById("awards");
  movieAwards.innerHTML = Awards;
}
