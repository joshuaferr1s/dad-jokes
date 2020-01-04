const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    },
  });
  const { joke } = await jokeRes.json();
  jokeEl.innerHTML = joke;
};

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
