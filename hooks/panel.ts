import create from 'zustand';

type Panels = 'home' | 'messages' | 'profile' | 'more';
interface PanelState {
  selectedPanel: Panels,
}

const usePanel = create<PanelState>(() => ({
  selectedPanel: 'home',
}));

export { usePanel };
export type { Panels, PanelState };