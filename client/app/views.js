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
  <button id="getAlbums-${artist.ArtistId}" class="btn btn-info" onclick="handlers.getAlbums(event)">Get Albums</button>
  <button id="getSongs-${artist.ArtistId}" class="btn btn-info">Get Songs</button>
</details>
`;
      container.appendChild(liEl);
      olEl.appendChild(container);
    });

    divEl.appendChild(olEl);
    mainDiv.appendChild(divEl);
  },

  renderAlbums: (arrayData, e) => {
    const Albums = arrayData;

    const divEl = document.createElement("div");

    const parentNode = e.target.parentNode;

    const ulEl = document.createElement("ul");

    Albums.forEach((album) => {
      const container = document.createElement("div");

      const liEl = document.createElement("li");
      liEl.innerHTML = `<details close>
  <summary>${album.Title}</summary>
  
</details>`;
      container.appendChild(liEl);
      ulEl.appendChild(container);
    });
    divEl.appendChild(ulEl);
    parentNode.appendChild(divEl);
  },
};
