const jokePlaceholder = document.getElementById("jokePlaceholder");
const introText = document.getElementById("introText");

const loadJoke = async () => {
  try {
    const jokeFetch = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/random",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const jokeData = await jokeFetch.json();
    introText.classList.add("d-none");
    jokePlaceholder.innerHTML = `
      <p class="text-success mb-3">${jokeData[0].setup}</p>
      <p class="text-warning">${jokeData[0].punchline}</p>    
    `;
    console.log(jokeData[0]);
  } catch (err) {
    console.log(err);
  }
};
