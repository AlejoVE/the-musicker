const views = {
  renderArtists: (arrayData) => {
    const artists = arrayData;

    const divEl = document.createElement("div");
    divEl.setAttribute("id", "artists-container");

    const mainDiv = document.getElementById("root");

    const olEl = document.createElement("ol");
    const hEl = document.createElement("h4");
    hEl.innerHTML = ` Artists <svg class="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <hr>`;

    olEl.appendChild(hEl);

    artists.forEach((artist) => {
      const container = document.createElement("div");
      container.setAttribute("id", `artist-${artist.ArtistId}`);

      const buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "btn btn-info");
      buttonEl.textContent = "Get Albums";

      const liEl = document.createElement("li");
      liEl.innerHTML = `<details close>
  <summary>${artist.Name}</summary>
  <button id="getAlbums-${artist.ArtistId}" class="btn btn-info" onclick="handlers.getAlbums(event)">Get Albums</button>
  <button id="getSongs-${artist.ArtistId}" class="btn btn-info" onclick="handlers.getAllSongs(event)">Get Songs</button>
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
    const hEl = document.createElement("h4");
    hEl.innerHTML = ` Albums <svg class="bi bi-folder" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/>
  <path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/>
</svg> <hr>`;

    ulEl.appendChild(hEl);
    Albums.forEach((album) => {
      const container = document.createElement("div");
      container.setAttribute("id", `album-${album.AlbumId}`);

      const liEl = document.createElement("li");
      liEl.innerHTML = `<details close>
  <summary>${album.Title}</summary>
  <button class="btn btn-secondary" onclick="handlers.getSongs(event)">Get Songs</button>
</details>`;
      container.appendChild(liEl);
      ulEl.appendChild(container);
    });
    divEl.appendChild(ulEl);
    parentNode.appendChild(divEl);
  },
  renderSongs: (data, e) => {
    const songs = data;
    const parent = e.target.parentNode;
    console.log(parent);

    const ulEl = document.createElement("ul");
    const hEl = document.createElement("h4");
    hEl.innerHTML = ` Songs <svg class="bi bi-music-note-beamed" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg> <hr>`;

    ulEl.appendChild(hEl);

    songs.forEach((song) => {
      const liEl = document.createElement("li");
      liEl.innerHTML = song.Name;
      ulEl.appendChild(liEl);
    });
    parent.appendChild(ulEl);
  },
  renderPlaylist: (data) => {
    const playlists = data;

    const divEl = document.createElement("div");
    divEl.setAttribute("id", "playlist-container");

    const mainDiv = document.getElementById("root");

    const olEl = document.createElement("ol");

    const hEl = document.createElement("h4");
    hEl.innerHTML = `Playlists <svg class="bi bi-music-note-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
  <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg> <hr>`;

    olEl.appendChild(hEl);
    playlists.forEach((playlist) => {
      const container = document.createElement("div");
      container.setAttribute("id", `playlist-${playlist.PlaylistId}`);

      const buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "btn btn-info");
      buttonEl.textContent = "Get Albums";

      const liEl = document.createElement("li");
      liEl.innerHTML = `<details close>
  <summary>${playlist.Name}</summary>
  <button id="buttonPlaylist-${playlist.PlaylistId}" class="btn btn-info" onclick="handlers.getPlaylistSong(event)">Get Songs</button>
  <button class="btn btn-danger" id="delete-${playlist.PlaylistId}" onclick="handlers.deletePlaylist(event)">Delete Playlist</button>
</details>
`;
      container.appendChild(liEl);
      olEl.appendChild(container);
    });

    divEl.appendChild(olEl);
    mainDiv.appendChild(divEl);
  },
};
