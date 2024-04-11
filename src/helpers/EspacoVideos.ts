interface VideoData {
  url: string;
  title: string;
  interpretacao: string;
  texto: string;
  trilha: string;
}

interface EspacoVideosMap {
  [key: string]: VideoData[];
}

export const espacoVideos: EspacoVideosMap = {
  'Espaço Acotirene': [
    {
      url: 'https://www.youtube.com/embed/VzPZcZnps2o',
      title: 'Título do Vídeo 1',
      interpretacao: 'Interpretação do Vídeo 1',
      texto: 'Texto do Vídeo 1',
      trilha: 'Trilha do Vídeo 1',
    },
  ],
  'Espaço Aqualtune': [],
  'Espaço Caá-Pueira': [],
  'Espaço Ganga Zumba': [],
  'Espaço Quilombo dos Palmares': [],
  'Espaço Zumbi': [],
  'Espaço Onjó Cruzambe': [],
  'Espaço Oxile das Ervas': [],
  'Espaço Muxima de Palmares': [],
  'Espaço Atalaia Acaiene': [],
  'Espaço Ocas indígenas': [],
  'Espaço Batucajé': [],
  'Espaço Atalaia de Acaiuba': [],
  'Espaço Lagoa Encantada dos Negros': [],
  'Espaço Onjó de Farinha': [],
  'Espaço Restaurante Kúuku-Waana': [],
  'Espaço Atalaia de Toculo': [],
};
