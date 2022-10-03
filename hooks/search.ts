import create from 'zustand';

interface SearchState {
  visibility: boolean ,
}

const useSearch = create<SearchState>(() => ({
  visibility: false,
}));

export { useSearch };
