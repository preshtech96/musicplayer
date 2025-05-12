
import { create } from 'zustand';

const useArtistStore = create((set) => ({
  artist: [],
  loading: false,
  error: null,

  fetchArtistById: async (id) => {
    set({ loading: true, error: null });

    const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '854660b5bemshdd177fb04fbf564p1bb694jsn9571180e5941',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      set({ artist: result, loading: false });
    } catch (error) {
      console.error('Fetch Artist Error:', error);
      set({ error: 'Failed to fetch artist data.', loading: false });
    }
  },
}));

export default useArtistStore;
