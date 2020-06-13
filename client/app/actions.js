const handlers = {
  getArtists: async () => {
    try {
      const res = await fetch("/api/artists");
      const data = await res.json();
      views.renderArtists(data);
    } catch (error) {
      console.log(error);
    }
  },
  getAlbums: async (e) => {
    try {
      const artistIdString = e.target.id.split("-");
      const ArtistId = Number(artistIdString[1]);
      const res = await fetch(`/api/artists/albums/${ArtistId}`);
      const data = await res.json();
      views.renderAlbums(data, e);
    } catch (error) {
      console.log(error);
    }
  },
  getSongs: async (e) => {
    try {
      const albumIdString = e.target.parentNode.parentNode.parentNode.id.split(
        "-"
      );
      const albumId = Number(albumIdString[1]);
      const res = await fetch(`/api/artists/albums/${albumId}/songs`);
      const data = await res.json();
      views.renderSongs(data, e);
    } catch (error) {
      console.log(error);
    }
  },
  getAllSongs: async (e) => {
    const idString = e.target.parentNode.parentNode.parentNode.id.split("-");
    const id = Number(idString[1]);
    const res = await fetch(`/api/artists/${id}/songs`);
    const data = await res.json();
    views.renderSongs(data, e);
  },
  getPlaylists: async () => {
    try {
      const res = await fetch("/api/playlists/");
      const data = await res.json();
      views.renderPlaylist(data);
    } catch (error) {
      console.log(error);
    }
  },
  getPlaylistSong: async (e) => {
    const playlistIdString = e.target.parentNode.parentNode.parentNode.id.split(
      "-"
    );
    const playlistId = Number(playlistIdString[1]);
    const res = await fetch(`/api/playlists/${playlistId}/songs`);
    const data = await res.json();
    views.renderSongs(data, e);
  },
};
