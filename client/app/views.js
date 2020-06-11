const views = {
  renderArtists: (arrayData) => {
    const artists = arrayData;

    const divEl = document.createElement("div");
    divEl.setAttribute("id", "artists-container");

    const mainDiv = document.getElementById("root");

    const ulEl = document.createElement("ul");

    artists.forEach((artist) => {
      const liEl = document.createElement("li");

      const aEl = document.createElement("a");
      aEl.href = artist.ArtistId;
      aEl.innerHTML = artist.Name;

      liEl.appendChild(aEl);
      ulEl.appendChild(liEl);
    });

    divEl.appendChild(ulEl);
    mainDiv.appendChild(divEl);
  },
};
