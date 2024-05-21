// Acotirene
import acotirene1 from '../assets/images/Espacos/Acotierne/Foto de Aprigio Vilanova.webp';
import acotirene2 from '../assets/images/Espacos/Acotierne/sem legenda.webp';
// Aqualtune
import aqualtune1 from '../assets/images/Espacos/Aqualtune/Sem Descrição.webp';
import aqualtune2 from '../assets/images/Espacos/Aqualtune/Sem Descrição (2).webp';
import aqualtune3 from '../assets/images/Espacos/Aqualtune/Sem Descrição (3).webp';
// Caá-Pueira
import capueira1 from '../assets/images/Espacos/caapueira/Foto de Aprigio Vilanova (1).webp';
import capueira2 from '../assets/images/Espacos/caapueira/sem legenda (1).webp';
// Ganga Zumba
import ganga1 from '../assets/images/Espacos/Ganga Zuma/Foto de Aprigio Vilanova (1).jpg';
import ganga2 from '../assets/images/Espacos/Ganga Zuma/Foto de Aprigio Vilanova (2).jpg';
// Quilombo dos Palmares
import quilombo1 from '../assets/images/Espacos/Quilombo dos Palmares/Foto de Aprigio Vilanova (1).jpg';
import quilombo2 from '../assets/images/Espacos/Quilombo dos Palmares/Foto de Aprigio Vilanova.jpg';
// Zumbi
import zumbi1 from '../assets/images/Espacos/Zumbi/Foto de Aprigio Vilanova (1) (2).jpg';
import zumbi2 from '../assets/images/Espacos/Zumbi/Foto de Aprigio Vilanova (6).jpg';
// Onjo de cruzambe
import cruzambe1 from '../assets/images/Espacos/Onjó Cruzambe/Desenho pedro franca.jpg';
import cruzambe2 from '../assets/images/Espacos/Onjó Cruzambe/Sem Descrição (1).jpg';
// Oxile das Ervas
import oxile1 from '../assets/images/Espacos/Oxile das Ervas/Sem Descrição (1) (1).jpg';
import oxile2 from '../assets/images/Espacos/Oxile das Ervas/Sem Descrição (5).jpg';
// Muxima de Palmares
import muxima1 from '../assets/images/Espacos/Muxima de Palmares/sem legenda (2) (1).jpg';
import muxima2 from '../assets/images/Espacos/Muxima de Palmares/sem legenda (2).jpg';
// Atalaia Acaiene
import atalaia1 from '../assets/images/Espacos/Atalaia Acaiene/Foto de Aprigio Vilanova (7).jpg';
import atalaia2 from '../assets/images/Espacos/Atalaia Acaiene/sem legenda (2) (2).jpg';
import atalaia3 from '../assets/images/Espacos/Atalaia Acaiene/sem legenda (3).jpg';
// Ocas indigenas
import ocas1 from '../assets/images/Espacos/Ocas Indígenas/sem legenda (1).jpg';
import ocas2 from '../assets/images/Espacos/Ocas Indígenas/sem legenda (2).jpg';
// Batucajé
import batucaje1 from '../assets/images/Espacos/Batucajé/Sem Descrição (1) (3).jpg';
import batucaje2 from '../assets/images/Espacos/Batucajé/Sem Descrição (7).jpg';
// Atalaia Acaiuba
import acaiuba1 from '../assets/images/Espacos/Atalaia de Acaiuba/Sem Descrição (1) (1).jpg';
import acaiuba2 from '../assets/images/Espacos/Atalaia de Acaiuba/Sem Descrição (5).jpg';
// Lagoa Encantada dos Negros
import lagoa1 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Foto de Aprigio Vilanova (1) (1).jpg';
import lagoa2 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Foto de Aprigio Vilanova (3).jpg';
import lagoa3 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Foto de Aprigio Vilanova (4).jpg';
import lagoa4 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Foto de Aprigio Vilanova (5).jpg';
import lagoa5 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Sem Descrição (1).jpg';
import lagoa6 from '../assets/images/Espacos/Lagoa Encantada dos Negros/Sem Descrição (2) (1).jpg';
// Onjo de farinha
import farinha1 from '../assets/images/Espacos/Onjo de Farinha/Sem Descrição (4).jpg';
import farinha2 from '../assets/images/Espacos/Onjo de Farinha/Sem Descrição1.jpg';
// Restaurante Kúuku-Waana
import restaurante1 from '../assets/images/Espacos/Restaurante Kúuku-Waana/Entrada.jpg';
import restaurante2 from '../assets/images/Espacos/Restaurante Kúuku-Waana/Foto de Aprigio Vilanova (1).jpg';
// Atalaia de Toculo
import toculo1 from '../assets/images/Espacos/Atalaia de Toculo/Sem Descrição (1) (2).jpg';
import toculo2 from '../assets/images/Espacos/Atalaia de Toculo/Sem Descrição (5).jpg';

interface EspacoImagesMap {
  [key: string]: { src: string; description: string }[];
}

export const espacoImages: EspacoImagesMap = {
  'Espaço Acotirene': [
    { src: acotirene1, description: 'Foto de Aprigio Vilanova' },
    { src: acotirene2, description: 'Sem descrição no momento ' },
  ],
  'Espaço Aqualtune': [
    { src: aqualtune1, description: 'SSem descrição no momento' },
    { src: aqualtune2, description: 'SSem descrição no momento ' },
    { src: aqualtune3, description: 'SSem descrição no momento ' },
  ],
  'Espaço Caá-Pueira': [
    { src: capueira1, description: 'Foto de Aprigio Vilanova' },
    { src: capueira2, description: 'Sem legenda' },
  ],
  'Espaço Ganga Zumba': [
    { src: ganga1, description: 'Foto de Aprigio Vilanova' },
    { src: ganga2, description: 'Foto de Aprigio Vilanova' },
  ],
  'Espaço Quilombo dos Palmares': [
    { src: quilombo1, description: 'Foto de Aprigio Vilanova' },
    { src: quilombo2, description: 'Foto de Aprigio Vilanova' },
  ],
  'Espaço Zumbi': [
    { src: zumbi1, description: 'Foto de Aprigio Vilanova' },
    { src: zumbi2, description: 'Foto de Aprigio Vilanova' },
  ],
  'Espaço Onjó Cruzambe': [
    { src: cruzambe1, description: 'Desenho pedro franca' },
    { src: cruzambe2, description: 'SSem descrição no momento' },
  ],
  'Espaço Oxile das Ervas': [
    { src: oxile1, description: 'SSem descrição no momento' },
    { src: oxile2, description: 'SSem descrição no momento ' },
  ],
  'Espaço Muxima de Palmares': [
    { src: muxima1, description: 'Sem legenda' },
    { src: muxima2, description: 'Sem legenda' },
  ],
  'Espaço Atalaia Acaiene': [
    { src: atalaia1, description: 'Foto de Aprigio Vilanova' },
    { src: atalaia2, description: 'Sem legenda' },
    { src: atalaia3, description: 'Sem legenda' },
  ],
  'Espaço Ocas indígenas': [
    { src: ocas1, description: 'Sem legenda' },
    { src: ocas2, description: 'Sem legenda' },
  ],
  'Espaço Batucajé': [
    { src: batucaje1, description: 'SSem descrição no momento' },
    { src: batucaje2, description: 'SSem descrição no momento ' },
  ],
  'Espaço Atalaia de Acaiuba': [
    { src: acaiuba1, description: 'SSem descrição no momento' },
    { src: acaiuba2, description: 'SSem descrição no momento ' },
  ],
  'Espaço Lagoa Encantada dos Negros': [
    { src: lagoa1, description: 'Foto de Aprigio Vilanova' },
    { src: lagoa2, description: 'Foto de Aprigio Vilanova' },
    { src: lagoa3, description: 'Foto de Aprigio Vilanova' },
    { src: lagoa4, description: 'Foto de Aprigio Vilanova' },
    { src: lagoa5, description: 'SSem descrição no momento' },
    { src: lagoa6, description: 'SSem descrição no momento ' },
  ],
  'Espaço Onjó de Farinha': [
    { src: farinha1, description: 'SSem descrição no momento' },
    { src: farinha2, description: 'SSem descrição no momento' },
  ],
  'Espaço Restaurante Kúuku-Waana': [
    { src: restaurante1, description: 'Entrada' },
    { src: restaurante2, description: 'Foto de Aprigio Vilanova' },
  ],
  'Espaço Atalaia de Toculo': [
    { src: toculo1, description: 'SSem descrição no momento' },
    { src: toculo2, description: 'SSem descrição no momento ' },
  ],
};
