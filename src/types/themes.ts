// Definir os tipos para os temas
export type ThemeColors = {
  background: string;
  infoContainer: string;
  expoContainer: string;
};

// Temas para cada rota
export const themes: Record<string, ThemeColors> = {
  '/rota1': {
    background: '#67781B',
    infoContainer: '#394603',
    expoContainer: '#404F03',
  },
  '/rota2': {
    background: '#D66B00',
    infoContainer: '#753d00',
    expoContainer: '#b55a01',
  },
};
