import { create } from "zustand";
import axios from "axios";

const useMusicStore = create((set) => ({
  query: "",
  songs: [],
  loading: false,
  error: null,

  setQuery: (query) => set({ query }),

  searchSongs: async () => {
    set({ loading: true, error: null });
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: useMusicStore.getState().query },
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "854660b5bemshdd177fb04fbf564p1bb694jsn9571180e5941",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("Fetched Songs:", response.data.data); // ✅ Log to console
      set({ songs: response.data.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch songs", loading: false });
      console.error(error);
    }
},
}));

export default useMusicStore;