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
};
