import foto1 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/foto-de-aprigio-vilanova-2.webp';
import foto2 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/fotos-personalidades-4.webp';
import foto3 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/larissa-fontes-4.webp';
import foto4 from '../assets/images/Fotos das personalidades/Mãe Neide/Jpeg/larissa-fontes-6.webp';

import caroline1 from '../assets/images/Fotos das personalidades/Carolina de Jesus/foto-retirada-da-internet-1.webp';
import caroline2 from '../assets/images/Fotos das personalidades/Carolina de Jesus/foto-retirada-da-internet-2.webp';
import caroline3 from '../assets/images/Fotos das personalidades/Carolina de Jesus/imagem-ims-acervo-uh-folhapress.webp';

import joao1 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Foto - Fundação Pierre Verger (2).webp';
import joao2 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Foto retirada da internet (2).webp';
import joao3 from '../assets/images/Fotos das personalidades/Joãozinho da Gomeia/Imagem do Fundo Correio da Manhã (2).webp';

import lupinicio1 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto - Evandro Teixeira (2).webp';
import lupinicio2 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto retirada da internet (3).webp';
import lupinicio3 from '../assets/images/Fotos das personalidades/Lupicinio Rodrigues/Foto retirada da internet (4).webp';
export type PersonalityType = {
  name: string;
  image: string;
  description: {
    pt: string; // Descrição em Português
    en: string; // Descrição em Inglês
  };
  photos?: string[];
};

// Importe as imagens usando a sintaxe ES6. Ajuste os caminhos conforme necessário.
import maeNeideImage from '../assets/mae-neide.webp';
import carolinaDeJesusImage from '../assets/carolina-de-jesus_1.webp';
import joaozinhoDaGomeiaImage from '../assets/joaozinho-da-gomeia.webp';
import lupicinioRodriguesImage from '../assets/lupicinio-rodrigues.webp';

export const personalities: PersonalityType[] = [
  {
    name: 'Mãe Neide',
    image: maeNeideImage,
    description: {
      pt: 'Protegidos pela densa mata atlântica, os quilombolas usavam tática de guerrilha avançada, surpreendendo e derrotando dezenas de expedições portuguesas e holandesas ao longo de décadas. Sitiando a Serra da Barriga, as tropas portuguesas somente conseguiram romper e adentrar o reduto palmarino usando armamento pesado – canhões e escopetas. Aqui, a história registra o maior número de homens, mulheres e crianças mortos e degolados em combates. Esse genocídio aconteceu na madrugada do dia 6 de fevereiro de 1694. ACAIUBA´S LOOKOUT ',
      en: 'Protected by the dense Atlantic forest, the Palmarinos employed guerrilla tactics, surprising and defeating dozens of Portugueses and Dutch expeditions for decades. The Portugueses troops were able to break and entre the Palmarino stronghold only by besieging the Serra da Barriga and by using cannons and muskets. Here, history records the largest number of mem, women and children killed in battle. This genocide happened during the early hours of February 6, 1694.',
    },
    photos: [foto1, foto2, foto3, foto4],
  },
  {
    name: 'Carolina de Jesus',
    image: carolinaDeJesusImage,
    description: {
      pt: 'Texto descritivo em Português para Carolina de Jesus.',
      en: 'Descriptive text in English for Carolina de Jesus.',
    },
    photos: [caroline1, caroline2, caroline3],
  },
  {
    name: 'Joãozinho da Gomeia',
    image: joaozinhoDaGomeiaImage,
    description: {
      pt: 'Texto descritivo em Português para Joãozinho da Gomeia.',
      en: 'Descriptive text in English for Joãozinho da Gomeia.',
    },
    photos: [joao1, joao2, joao3],
  },
  {
    name: 'Lupicínio Rodrigues',
    image: lupicinioRodriguesImage,
    description: {
      pt: 'Texto descritivo em Português para Lupicínio Rodrigues.',
      en: 'Descriptive text in English for Lupicínio Rodrigues.',
    },
    photos: [lupinicio1, lupinicio2, lupinicio3],
  },
];
