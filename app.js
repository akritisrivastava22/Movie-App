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
  document.getElementById("rate").classList.remove("hidden");


  const movieReleased = document.getElementById("released");
  movieReleased.innerHTML = Released;
  document.getElementById("release").classList.remove("hidden");

  const movieRuntime = document.getElementById("runtime");
  movieRuntime.innerHTML = Runtime;
  document.getElementById("run").classList.remove("hidden");

  const movieGenre = document.getElementById("genre");
  movieGenre.innerHTML = Genre;
  document.getElementById("gen").classList.remove("hidden");

  const movieDirector = document.getElementById("director");
  movieDirector.innerHTML = Director;
  document.getElementById("direct").classList.remove("hidden");

  const movieWriter = document.getElementById("writer");
  movieWriter.innerHTML = Writer;
  document.getElementById("write").classList.remove("hidden");

  const movieActors = document.getElementById("actors");
  movieActors.innerHTML = Actors;
  document.getElementById("act").classList.remove("hidden");

  const moviePlot = document.getElementById("plot");
  moviePlot.innerHTML = Plot;
  document.getElementById("pl").classList.remove("hidden");

  const movieLanguage = document.getElementById("language");
  movieLanguage.innerHTML = Language;
  document.getElementById("lang").classList.remove("hidden");

  const movieCountry = document.getElementById("country");
  movieCountry.innerHTML = Country;
  document.getElementById("count").classList.remove("hidden");

  const movieAwards = document.getElementById("awards");
  movieAwards.innerHTML = Awards;
  document.getElementById("prizes").classList.remove("hidden");
}
