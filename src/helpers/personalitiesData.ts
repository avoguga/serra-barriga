import foto1 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/foto-de-aprigio-vilanova-2.webp';
import foto2 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/fotos-personalidades-4.webp';
import foto3 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/larissa-fontes-4.webp';
import foto4 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/larissa-fontes-6.webp';

import caroline1 from '../assets/images/Fotos das personalidades/Carolina de Jesus/foto-retirada-da-internet-1.webp';
import caroline2 from '../assets/images/Fotos das personalidades/Carolina de Jesus/foto-retirada-da-internet-2.webp';
import caroline3 from '../assets/images/Fotos das personalidades/Carolina de Jesus/imagem-ims-acervo-uh-folhapress.webp';
import caroline4 from '../assets/images/Fotos das personalidades/Carolina de Jesus/Acervo UH - Folhapress (2).webp';

import joao1 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Foto - Fundação Pierre Verger (2).webp';
import joao2 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Foto retirada da internet (2).webp';
import joao3 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Imagem do Fundo Correio da Manhã (2).webp';

import lupinicio1 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto - Evandro Teixeira (2).webp';
import lupinicio2 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto retirada da internet (3).webp';
import lupinicio3 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto retirada da internet (4).webp';

import abdias1 from '../assets/images/Fotos das personalidades/Abdias Nascimento/Foto - Acervo Abdias Nascimento - Ipeafro.webp';
import abdias2 from '../assets/images/Fotos das personalidades/Abdias Nascimento/Foto - Ricardo Stuckert - Pr.webp';
import abdias3 from '../assets/images/Fotos das personalidades/Abdias Nascimento/Foto - Senado Federal (2).webp';

import chica1 from '../assets/images/Fotos das personalidades/Chica Xavier/Foto Luana Xavier.webp';
import chica2 from '../assets/images/Fotos das personalidades/Chica Xavier/Foto retirada da internet (1).webp';
import chica3 from '../assets/images/Fotos das personalidades/Chica Xavier/Foto retirada da internet (3).webp';
import chica4 from '../assets/images/Fotos das personalidades/Chica Xavier/Still do filme A Feijoada da Vovó Maria Conga.webp';

import helcias1 from '../assets/images/Fotos das personalidades/Helcias Pereira/Acervo APNS (2).webp';
import helcias2 from '../assets/images/Fotos das personalidades/Helcias Pereira/Acervo Vamos Subir a Serra.webp';
import helcias3 from '../assets/images/Fotos das personalidades/Helcias Pereira/Foto de Aprigio Vilanova (2).webp';

import biu1 from '../assets/images/Fotos das personalidades/Mãe Biu de Xambá/Foto Arquivo Nação Xambá (2)_3.webp';
import biu2 from '../assets/images/Fotos das personalidades/Mãe Biu de Xambá/Foto retirada da internet (2)_2_11zon.webp';
import biu3 from '../assets/images/Fotos das personalidades/Mãe Biu de Xambá/Imagem de Beto Figueiroa_1_11zon.webp';

import mirian1 from '../assets/images/Fotos das personalidades/Mãe Mírian/Foto Edilson Omena (2)_1_11zon.webp';
import mirian2 from '../assets/images/Fotos das personalidades/Mãe Mírian/Foto de Aprigio Vilanova (2)_2_11zon.webp';
import mirian3 from '../assets/images/Fotos das personalidades/Mãe Mírian/Foto retirada da internet (2)_3_11zon.webp';

import camisa1 from '../assets/images/Fotos das personalidades/Mestre Camisa/Foto Acervo Pessoal (2)_2_11zon.webp';
import camisa2 from '../assets/images/Fotos das personalidades/Mestre Camisa/Foto Fabio Rossi (2)_1_11zon.webp';
import camisa3 from '../assets/images/Fotos das personalidades/Mestre Camisa/Foto retirada da internet (2)_4_11zon.webp';
import camisa4 from '../assets/images/Fotos das personalidades/Mestre Camisa/Stéphane Lemistre - Minaris studio (2)_3.webp';

import claudio1 from '../assets/images/Fotos das personalidades/Mestre Cláudio/Acervo Vamos Subir a Serra.webp';

import zezito1 from '../assets/images/Fotos das personalidades/Zezito Araújo/Acervo Vamos Subir a Serra_11zon.webp';
import zezito2 from '../assets/images/Fotos das personalidades/Zezito Araújo/Foto - Rovena Rosa.webp';
import zezito3 from '../assets/images/Fotos das personalidades/Zezito Araújo/Foto retirada da internet.webp';

export type PhotoType = {
  src: string;
  id: number;
  descriptionPhoto: string;
};

export type PersonalityType = {
  id: number;
  name: string;
  image: string;
  description: {
    pt: string; // Descrição em Português
    en: string; // Descrição em Inglês
  };
  photos?: PhotoType[];
};

import maeNeideImage from '../assets/icons/icones-personalidades/icones_Mae Neide.webp';
import carolinaDeJesusImage from '../assets/icons/icones-personalidades/icones_Carolina .webp';
import joaozinhoDaGomeiaImage from '../assets/icons/icones-personalidades/icones_Joãozinho .webp';
import lupicinioRodriguesImage from '../assets/icons/icones-personalidades/icones_Lupicínio .webp';
import abdiasImage from '../assets/icons/icones-personalidades/icones_Abdias .webp';
import ChicaImage from '../assets/icons/icones-personalidades/icones_Chica.webp';
import helciasImage from '../assets/icons/icones-personalidades/icones_Helcias .webp';
import maeBiuImage from '../assets/icons/icones-personalidades/icones_Mãe Biu .webp';
import maeMirianImage from '../assets/icons/icones-personalidades/icones_Mae Mírian.webp';
import mestreCamisaImage from '../assets/icons/icones-personalidades/icones_Mestre Camisa.webp';
import mestreClaudioImage from '../assets/icons/icones-personalidades/icones_Mestre Cláudio.webp';
import zezitoImage from '../assets/icons/icones-personalidades/icones_Zezito.webp';

export const personalities: PersonalityType[] = [
  {
    name: 'Mãe Neide',
    image: maeNeideImage,
    description: {
      pt: 'Protegidos pela densa mata atlântica, os quilombolas usavam tática de guerrilha avançada, surpreendendo e derrotando dezenas de expedições portuguesas e holandesas ao longo de décadas. Sitiando a Serra da Barriga, as tropas portuguesas somente conseguiram romper e adentrar o reduto palmarino usando armamento pesado – canhões e escopetas. Aqui, a história registra o maior número de homens, mulheres e crianças mortos e degolados em combates. Esse genocídio aconteceu na madrugada do dia 6 de fevereiro de 1694. ACAIUBA´S LOOKOUT ',
      en: 'Protected by the dense Atlantic forest, the Palmarinos employed guerrilla tactics, surprising and defeating dozens of Portugueses and Dutch expeditions for decades. The Portugueses troops were able to break and entre the Palmarino stronghold only by besieging the Serra da Barriga and by using cannons and muskets. Here, history records the largest number of mem, women and children killed in battle. This genocide happened during the early hours of February 6, 1694.',
    },
    photos: [
      { id: 1, src: foto1, descriptionPhoto: 'Foto - Larissa Fontes' },
      { id: 2, src: foto2, descriptionPhoto: 'Foto - Larissa Fontes' },
      { id: 3, src: foto3, descriptionPhoto: 'Foto - Larissa Fontes' },
      { id: 4, src: foto4, descriptionPhoto: 'Foto de Aprigio Vilanova' },
    ],
    id: 0,
  },
  {
    name: 'Carolina de Jesus',
    image: carolinaDeJesusImage,
    description: {
      pt: 'Texto descritivo em Português para Carolina de Jesus.',
      en: 'Descriptive text in English for Carolina de Jesus.',
    },
    photos: [
      {
        id: 5,
        src: caroline4,
        descriptionPhoto: 'Acervo UH - Folhapress ',
      },
      {
        id: 6,
        src: caroline1,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 7,
        src: caroline2,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 8,
        src: caroline3,
        descriptionPhoto: 'Imagem- IMS Acervo - UH Folhapress',
      },
    ],
    id: 1,
  },
  {
    name: 'Joãozinho da Gomeia',
    image: joaozinhoDaGomeiaImage,
    description: {
      pt: 'Texto descritivo em Português para Joãozinho da Gomeia.',
      en: 'Descriptive text in English for Joãozinho da Gomeia.',
    },
    photos: [
      {
        id: 9,
        src: joao1,
        descriptionPhoto: 'Foto - Fundação Pierre Verger',
      },
      {
        id: 10,
        src: joao2,
        descriptionPhoto: 'Foto retirada da internet ',
      },
      {
        id: 11,
        src: joao3,
        descriptionPhoto: 'Imagem do Fundo Correio da Manhã',
      },
    ],
    id: 2,
  },
  {
    name: 'Lupicínio Rodrigues',
    image: lupicinioRodriguesImage,
    description: {
      pt: 'Texto descritivo em Português para Lupicínio Rodrigues.',
      en: 'Descriptive text in English for Lupicínio Rodrigues.',
    },
    photos: [
      {
        id: 12,
        src: lupinicio1,
        descriptionPhoto: 'Foto - Evandro Teixeira',
      },
      {
        id: 13,
        src: lupinicio2,
        descriptionPhoto: 'Foto retirada da internet ',
      },
      {
        id: 14,
        src: lupinicio3,
        descriptionPhoto: 'Foto retirada da internet',
      },
    ],
    id: 3,
  },
  {
    name: 'Abdias Nascimento',
    image: abdiasImage,
    description: {
      pt: 'Texto descritivo em Português para Abdias Nascimento.',
      en: 'Descriptive text in English for Abdias Nascimento.',
    },
    photos: [
      {
        id: 15,
        src: abdias1,
        descriptionPhoto: 'Foto - Acervo Abdias Nascimento - Ipeafro',
      },
      {
        id: 16,
        src: abdias2,
        descriptionPhoto: 'Foto - Ricardo Stuckert - Pr',
      },
      {
        id: 17,
        src: abdias3,
        descriptionPhoto: 'Foto - Senado Federal ',
      },
    ],
    id: 4,
  },
  {
    name: 'Chica Xavier',
    image: ChicaImage,
    description: {
      pt: 'Texto descritivo em Português para Chica Xavier.',
      en: 'Descriptive text in English for Chica Xavier.',
    },
    photos: [
      {
        id: 18,
        src: chica1,
        descriptionPhoto: 'Foto Luana Xavier',
      },
      {
        id: 19,
        src: chica2,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 20,
        src: chica3,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 21,
        src: chica4,
        descriptionPhoto: 'Still do filme A Feijoada da Vovó Maria Conga',
      },
    ],
    id: 5,
  },
  {
    name: 'Helcias Pereira',
    image: helciasImage,
    description: {
      pt: 'Texto descritivo em Português para Helcias Pereira.',
      en: 'Descriptive text in English for Helcias Pereira.',
    },
    photos: [
      {
        id: 22,
        src: helcias1,
        descriptionPhoto: 'Acervo APNS',
      },
      {
        id: 23,
        src: helcias2,
        descriptionPhoto: 'Acervo Vamos Subir a Serra',
      },
      {
        id: 24,
        src: helcias3,
        descriptionPhoto: 'Foto de Aprigio Vilanova ',
      },
    ],
    id: 6,
  },
  {
    name: 'Mãe Biu de Xambá',
    image: maeBiuImage,
    description: {
      pt: 'Texto descritivo em Português para Mãe Biu de Xambá.',
      en: 'Descriptive text in English for Mãe Biu de Xambá.',
    },
    photos: [
      {
        id: 25,
        src: biu1,
        descriptionPhoto: 'Foto Arquivo Nação Xambá',
      },
      {
        id: 26,
        src: biu2,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 27,
        src: biu3,
        descriptionPhoto: 'Imagem de Beto Figueiroa',
      },
    ],
    id: 7,
  },

  {
    name: 'Mãe Mírian',
    image: maeMirianImage,
    description: {
      pt: 'Texto descritivo em Português para Mãe Mírian.',
      en: 'Descriptive text in English for Mãe Mírian.',
    },
    photos: [
      {
        id: 28,
        src: mirian1,
        descriptionPhoto: 'Foto de Aprigio Vilanova',
      },
      {
        id: 29,
        src: mirian2,
        descriptionPhoto: 'Foto Edilson Omena',
      },
      {
        id: 30,
        src: mirian3,
        descriptionPhoto: 'Foto retirada da internet',
      },
    ],
    id: 8,
  },
  {
    name: 'Mestre Camisa',
    image: mestreCamisaImage,
    description: {
      pt: 'Texto descritivo em Português para Mestre Camisa.',
      en: 'Descriptive text in English for Mestre Camisa.',
    },
    photos: [
      {
        id: 31,
        src: camisa1,
        descriptionPhoto: 'Foto Acervo Pessoal',
      },
      {
        id: 32,
        src: camisa2,
        descriptionPhoto: 'Foto Fabio Rossi',
      },
      {
        id: 33,
        src: camisa3,
        descriptionPhoto: 'Foto retirada da internet',
      },
      {
        id: 34,
        src: camisa4,
        descriptionPhoto: 'Stéphane Lemistre - Minaris studio ',
      },
    ],
    id: 9,
  },
  {
    name: 'Mestre Cláudio',
    image: mestreClaudioImage,
    description: {
      pt: 'Texto descritivo em Português para Mestre Cláudio.',
      en: 'Descriptive text in English for Mestre Cláudio.',
    },
    photos: [
      {
        id: 35,
        src: claudio1,
        descriptionPhoto: 'Acervo Vamos Subir a Serra',
      },
    ],
    id: 10,
  },
  {
    name: 'Zezito Araújo',
    image: zezitoImage,
    description: {
      pt: 'Texto descritivo em Português para Zezito Araújo.',
      en: 'Descriptive text in English for Zezito Araújo.',
    },
    photos: [
      {
        id: 36,
        src: zezito1,
        descriptionPhoto: 'Foto - Rovena Rosa',
      },
      {
        id: 37,
        src: zezito2,
        descriptionPhoto: 'Foto - Vivi Leão ',
      },
      {
        id: 38,
        src: zezito3,
        descriptionPhoto: 'Foto retirada da internet ',
      },
    ],
    id: 11,
  },
];
