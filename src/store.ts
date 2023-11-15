import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  rating_top?: number;
  pageSize?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setOrderid: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setOrderid: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

export default useGameQueryStore;
