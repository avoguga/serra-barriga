import acotierne from '../assets/icons/Espaco_Acotirene.svg';
import aqualtune from '../assets/icons/Espaco_Aqualtune.svg';
import capoeira from '../assets/icons/Espaco_Caa-Pueira.svg';
import zumba from '../assets/icons/Espaco_Ganga-Zumba.svg';
import quilombo from '../assets/icons/Espaco_Quilombo_dos_Palmares.svg';
import zumbi from '../assets/icons/Espaco_Zumbi.svg';

export interface EspacoData {
  path: string;
  title: string;
  icon: string;
  description: {
    pt: string;
    en: string;
  };
}

// Mapeie as classes previstas para os dados de rota correspondentes
const espacos: Record<string, EspacoData> = {
  'Espaço Acotirene': {
    path: '/historical-figure/Espaço Acotirene',
    title: 'Espaço Acotirene',
    icon: acotierne,
    description: {
      pt: 'O Deus de todos os nomes: N´Zambi, Olorum, Tupã e Oxalá, foi fonte de resistência dos quilombolas. Inquices dos Bantus, Voduns dos Jéjes e Orixás dos lorubás, representando as forças da natureza, inspiravam e protegiam o povo palmarino',
      en: " N'Zambi, Olorum, Tupã, and Oxalá, are names for the same deity and source of resistence for the marrons inquices to the Bantu, Voduns to the Jaje, and Orixás to the Yorubá, all representing the forces of nature, inspired and protected the Palmarino people.",
    },
    // outros dados relevantes
  },
  'Espaço Aqualtune': {
    path: '/historical-figure/Espaço Aqualtune',
    title: 'Aqualtune',
    icon: aqualtune,
    description: {
      pt: 'Princesa e guerreira africana, que fugiu grávida de um engenho em Porto Calvo. Com coragem e determinação adentrou e desbravou uma terra desconhecida e hostil. também conhecido como Angola Janga (minha angolana pequena).',
      en: 'A princess and African Warrior, Aqualtune escaped, pregnant, from a sugar platarion in Porto Calvo. Through courage and dertemination, she explored an unknown and hostile land and established the Quilombo dos Palmares, also known as Angola Janga my little Angola',
    },
    // outros dados relevantes
  },
  'Espaço Caá-Pueira': {
    path: '/historical-figure/Caá-Pueira',
    title: 'Caá-Pueira',
    icon: capoeira,
    description: {
      pt: 'A capoeira se desenvolveu no Brasil e suas raízes estão nas danças africanas e indígenas. É um estado de espírito que se expressa num diálogo corporal lúdico e prazeroso. É dança, é ginca, é esporte, é cultura, é terapia, é filosfia. É lurta de libertação.',
      en: 'Capoeira originated in Brazil an its roots lie in African and Amerindian dances. It is a spiritual state that is expressed through joyful and pleasant body dialogue. It is dance, movement, sport, culture, therapy, philosophy. Is is a quest for freedom.',
    },
  },
  'Espaço Ganga Zumba': {
    path: '/historical-figure/Espaço Ganga Zumba',
    title: 'Ganga-Zumba',
    icon: zumba,
    description: {
      pt: 'Filho da princesa Aqualtune, reinou durante décadas, levando Palmares ao apogeu e a ser reconhecido como nação pela coroa Portuguesa. Assinou um pacto em 1678, com o governador da capitania de Pernambuco. Foi traído e assasinado no mocambo de Cucaú.',
      en: 'Son of Princess Aqualtune, he reigned for decades, leading Palmares to its zenith and gaining recognition as a nation by the Portuguese crown. He signed a pact in 1678 with the governor of the Captaincy of Pernambuco. He was betrayed and assassinated in the mocambo of Cucaú.',
    },
  },
  'Espaço Quilombo dos Palmares': {
    path: '/historical-figure/Espaço Quilombo dos Palmares',
    title: 'Quilombo',
    icon: quilombo,
    description: {
      pt: 'De 1597 a 1694, a Zona da Mata da Capitania de Pernambuco abrigou num raio de 200km² dezenas de mocambos cuja organização política, social e militar consolidou o lendário Quilombo dos Palmares.',
      en: 'From 1597 to 1694, the Zona da Mata region of the Captaincy of Pernambuco hosted within a 200km² radius dozens of settlements whose political, social, and military organization consolidated the legendary Quilombo dos Palmares ',
    },
  },
  'Espaço Zumbi': {
    path: '/historical-figure/Espaço Zumbi',
    title: 'Zumbi',
    icon: zumbi,
    description: {
      pt: 'O último líder de Palmares, Zumbi foi traído e morto em 20 de novembro de 1695. Como resultado da incansável mobilização do Movimento Negro Brasileiro, ele foi reconhecido como herói nacional pelo govenro federal, em 21 de março de 1997. ZUMBI VIVE!',
      en: 'Last leader of Palmares, Zumbi was betrayed and killed on November 20, 1695. As the result of untiring mobilization by the Brazilian Black Movement, he was reacognized as a Nation Hero by the Brazilian Government on March 21, 1997. ZUMBI LIVES!',
    },
  },
};

// Função para obter os dados de rota com base na classe prevista
export function getEspacoData(className: string): EspacoData | undefined {
  return espacos[className];
}
