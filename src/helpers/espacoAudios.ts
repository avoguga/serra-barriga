//Acotierne
import acotirene1 from '../assets/EspacoAudios/Acotirene/acotirene.mp3';

//Aqualtune
import aqualtune1 from '../assets/EspacoAudios/Aqualtune/Audio Espaço Aqualtune.mp3';

//Caá-Pueira
import capoeira1 from '../assets/EspacoAudios/Caapueira/caapoeira.mp3';

//Ganga Zumba
import zumba1 from '../assets/EspacoAudios/Ganga Zumba/gangazumba.mp3';

//Quilombo dos Palmares
import quilombo1 from '../assets/EspacoAudios/Quilombo dos Palmares/espaço quilombo.mp3';
import quilombo2 from '../assets/EspacoAudios/Quilombo dos Palmares/espaço quilombo.mp3';

//Zumbi
import zumbi1 from '../assets/EspacoAudios/Zumbi/zumbi.mp3';

//Onjo de cruzambe

//Oxile das Ervas

//Muxima de Palmares

//Atalaia Acaiene

//Ocas indigenas

//Batucajé

//Atalaia Acaiuba

//Lagoa Encantada dos Negros

//Onjo de farinha

//Restaurante Kúuku-Waana

//Atalaia de Toculo

interface AudioData {
  audio: string[];
  title: string;
  interpretacao: string;
  texto: string;
  trilha: string;
}

interface EspacoAudiosMap {
  [key: string]: AudioData[];
}

export const espacoAudios: EspacoAudiosMap = {
  'Espaço Acotirene': [
    {
      audio: [acotirene1],
      title: 'Espaço Contemplativo Acotirene',
      interpretacao: 'Chica Xavier',
      texto: 'Patrícia Mourão',
      trilha: 'Trilha do Áudio 1',
    },
  ],
  'Espaço Aqualtune': [
    {
      audio: [aqualtune1],
      title: 'Espaço Contemplativo Aqualtune',
      interpretacao: '',
      texto: 'Leila Pinheiro',
      trilha: 'Trilha do Áudio 2',
    },
  ],
  'Espaço Caá-Pueira': [
    {
      audio: [capoeira1],
      title: 'Espaço Contemplativo Caá-pueira',
      interpretacao: 'Djavan',
      texto: 'Lepê Correia',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Ganga Zumba': [
    {
      audio: [zumba1],
      title: 'Espaço Contemplativo Ganga-Zumba',
      interpretacao: 'Tony Tornado',
      texto: 'Patrícia Mourão',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Quilombo dos Palmares': [
    {
      audio: [quilombo1, quilombo2],
      title: 'Espaço Contemplativo Quilombo',
      interpretacao: 'Leci Brandão',
      texto: 'Patrícia Mourão',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Zumbi': [
    {
      audio: [zumbi1],
      title: 'Espaço Contemplativo Zumbi',
      interpretacao: 'Carlinhos Brown',
      texto: 'Helcias Pereira',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Onjó Cruzambe': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Oxile das Ervas': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Muxima de Palmares': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Atalaia Acaiene': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Ocas indígenas': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Batucajé': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Atalaia de Acaiuba': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Lagoa Encantada dos Negros': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Onjó de Farinha': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Restaurante Kúuku-Waana': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
  'Espaço Atalaia de Toculo': [
    {
      audio: [],
      title: 'Título do Áudio 3',
      interpretacao: 'Interpretação do Áudio 3',
      texto: 'Texto do Áudio 3',
      trilha: 'Trilha do Áudio 3',
    },
  ],
};

export function getEspacoAudios(espacoName?: string): AudioData[] {
  if (!espacoName) {
    // Retorna todos os áudios de todos os espaços
    return Object.values(espacoAudios).flat();
  }
  return espacoAudios[espacoName] || [];
}
