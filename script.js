const btnEl = document.getElementById('btn');
const animeContainerEl = document.getElementById('anime-container');
const animeImgEl = document.getElementById('anime-img');
const animeNameEl = document.getElementById('anime-name');

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    animeNameEl.innerText = 'Updating...';
    animeImgEl.src = spinner.svg;
    const response = await fetch('https://api.waifu.pics/sfw');
    const data = await response.json();
    console.log(data);
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    animeContainerEl.style.display = 'block';
    animeImgEl.src = data.url;
    animeNameEl.innerText = data.artist;
  } catch (error) {}
});
