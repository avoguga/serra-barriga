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
  indisponivel?: string;
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
      interpretacao: 'Leila Pinheiro',
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
      audio: [quilombo1],
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
      title: 'Espaço Comtemplativo Onjó Cruzambê',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Oxile das Ervas': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Oxile das Ervas',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Muxima de Palmares': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Muxima dos Palmares',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Atalaia Acaiene': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Atalaia Acaiene',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Ocas indígenas': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Ocas Indígenas',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: '',
      texto: 'Sem áudios dispóniveis no momento',
      trilha: '',
    },
  ],
  'Espaço Batucajé': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Batucajé',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Atalaia de Acaiuba': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Atalaia de Acaiuba',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Lagoa Encantada dos Negros': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Lagoa Encatadda dos Negros',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Onjó de Farinha': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Onjó de Farinha',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Restaurante Kúuku-Waana': [
    {
      audio: [],
      title: 'Espaço Comtemplativo  Restaurante Kúuku-Waana',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
    },
  ],
  'Espaço Atalaia de Toculo': [
    {
      audio: [],
      title: 'Espaço Comtemplativo Atalaia de Toculo',
      indisponivel: 'Sem audios disponíveis no momento.',
      interpretacao: 'Sem audios disponíveis no momento.',
      texto: 'Sem audios disponíveis no momento.',
      trilha: 'Sem audios disponíveis no momento.',
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
