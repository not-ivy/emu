import create from 'zustand';

interface ThemeState {
  theme: any ,
}

const useTheme = create<ThemeState>(() => ({
  theme: undefined,
}));

export { useTheme };
