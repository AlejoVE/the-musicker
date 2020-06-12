const views = {
  renderArtists: (arrayData) => {
    const artists = arrayData;

    const divEl = document.createElement("div");
    divEl.setAttribute("id", "artists-container");

    const mainDiv = document.getElementById("root");

    const olEl = document.createElement("ol");

    artists.forEach((artist) => {
      const container = document.createElement("div");
      container.setAttribute("id", `artist-${artist.Name}`);

      const buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "btn btn-info");
      buttonEl.textContent = "Get Albums";

      const liEl = document.createElement("li");
      liEl.innerHTML = `<details close>
  <summary>${artist.Name}</summary>
  <button id="button-getAlbums-${artist.artistId}" class="btn btn-info">Get Albums</button>
  <button id="button-getSongs-${artist.artistId}" class="btn btn-info">Get Songs</button>
</details>
`;
      container.appendChild(liEl);
      olEl.appendChild(container);
    });

    divEl.appendChild(olEl);
    mainDiv.appendChild(divEl);
  },
};
