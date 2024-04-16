import acotierne from '../assets/icons/tela-espaco/Espaco_Acotirene (1).png';
import aqualtune from '../assets/icons/tela-espaco/Espaco_Aqualtune (1).webp';
import capoeira from '../assets/icons/tela-espaco/Espaco_Caa-Pueira (2).webp';
import zumba from '../assets/icons/tela-espaco/Espaco_Ganga-Zumba (1).png';
import quilombo from '../assets/icons/tela-espaco/Espaco_Quilombo_dos_Palmares (1).png';
import zumbi from '../assets/icons/tela-espaco/Espaco_Zumbi (1).png';
import onjoCruzambe from '../assets/icons/tela-espaco/desenhos_ONJÓ CRUZAMBÊ.webp';
import onjoFarinha from '../assets/icons/tela-espaco/desenhos_ONJÓ DE FARINHA.webp';

import oxile from '../assets/icons/tela-espaco/desenhos_OXILE DAS ERVAS.webp';
import muxima from '../assets/icons/tela-espaco/desenhos_MUXIMA DE PALMARES.webp';
import acaiene from '../assets/icons/tela-espaco/desenhos_ATALAIA DE ACAIENE.webp';
import ocas from '../assets/icons/tela-espaco/desenhos_OCAS INDÍGENAS.webp';
import batucaje from '../assets/icons/tela-espaco/desenhos_BATUCAJÉ.webp';
import acaiuba from '../assets/icons/tela-espaco/desenhos_ATALAIA DO ACAIUBA (1).webp';
import toculo from '../assets/icons/tela-espaco/desenhos_ATALAIA DO TOCULO.webp';

import lagoa from '../assets/icons/tela-espaco/desenhos_LAGOA ENCANTADA DOS NEGROS.webp';
import restaurante from '../assets/icons/tela-espaco/desenhos_RESTAURANTE KÚUKU-WAANA.webp';

import { espacoImages } from './EspacoImages';
import { espacoVideos } from './EspacoVideos';
import { espacoAudios } from './espacoAudios';
import { espacoSelfie } from './EspacoSelfie';
export interface VideoData {
  url: string;
  title: string;
  interpretacao: string;
  texto: string;
  trilha: string;
}
export interface AudioData {
  audio: string[];
  title: string;
  interpretacao: string;
  texto: string;
  trilha: string;
}
export interface EspacoData {
  path: string;
  title: string;
  subtitle?: string;
  icon: string;
  description: {
    pt: string;
    en: string;
    italic?: string;
  };
  images?: string[];
  videos?: VideoData[];
  audios?: AudioData[];
  selfie?: string[];
}

// Mapeie as classes previstas para os dados de rota correspondentes
const espacos: Record<string, EspacoData> = {
  'Espaço Acotirene': {
    path: '/historical-figure/Espaço Acotirene',
    title: 'Espaço Acotirene',
    icon: acotierne,
    description: {
      pt: `
      O Deus de todos os nomes: N´Zambi, Olorum, Tupã e Oxalá, foi fonte de resistência dos quilombolas. Inquices dos Bantus, Voduns dos Jéjes e Orixás dos lorubás, representando as forças da natureza, inspiravam e protegiam o povo palmarino. 
      Na história do Quilombo dos Palmares estão presentes mitos e fatos reais. Essa mescla de informações é resultado da postura ideológica dos segmentos sociais que se envolveram no passado com esse fato histórico, e daqueles que, no presente, procuram resgatar a história do negro a partir da perspectiva dos vencidos. A história de Acotirene exemplifica bem essa visão mítica e real do Quilombo dos Palmares. Enquanto mito, era a conselheira de todos os Palmarinos; como fato real, seu nome foi dado a um importante mocambo. Acotirene era um dos mocambos do Quilombo dos Palmares, instalado no litoral dos Estados de Pernambuco e Alagoas, em homenagem a uma das primeiras mulheres que habitou o Quilombo dos Palmares e que exerceu grande influencia na vida dos negros quilombolas.
`,
      en: `N´Zambi, Olorum, Tupã and Oxalá are  names for the same deity and source of resistance for the marrons Inquices to the Bantu, Voduns to the Jaje, and Orixás to the Yorubá, all representing the forces of nature, inspired and protected the Palmarino people.

      In the history of Quilombo dos Palmares there are myths and real facts. This mixture of information is the result of the ideological stance of social segments that were involved in the past with this historical fact, and of those who, in the present, seek to rescue the history of black people from the perspective of the defeated. The story of Acotirene exemplifies this mythical and real vision of Quilombo dos Palmares. As a myth, she was the advisor of all Palmarinos; As a real fact, her name was given to an important mocambo. Acotirene was one of the mocambos of Quilombo dos Palmares, installed on the coast of the States of Pernambuco and Alagoas, in honor of one of the first women who inhabited Quilombo dos Palmares and who had a great influence on the lives of black quilombolas.
      `,
    },
    images: espacoImages['Espaço Acotirene'],
    videos: espacoVideos['Espaço Acotirene'],
    audios: espacoAudios['Espaço Acotirene'],
    selfie: espacoSelfie['Espaço Acotirene'],
  },
  'Espaço Aqualtune': {
    path: '/historical-figure/Espaço Aqualtune',
    title: 'Espaço Aqualtune',
    icon: aqualtune,
    description: {
      pt: `Princesa e guerreira africana, que fugiu grávida de um engenho em Porto Calvo. Com coragem e determinação adentrou e desbravou uma terra desconhecida e hostil. Fundou o Quilombo dos Palmares, também conhecido como Angola Janga (minha pequena Angola).

      Teria sido princesa do reino do Congo no século 17, Aqualtune liderou um exército de cerca de 10 mil pessoas, entre eles homens e mulheres, contra as investidas de forças portuguesas. Acabou derrotada e capturada por portugueses, esses que estavam subjugando e vendendo para senhores de escravos brasileiros. Chegando no Brasil em Recife, foi vendida para o engenho de Porto Calvo, atual município de Alagoas. No entanto, ao saber sobre a existência do maior centro de resistência negra do Brasil, o Quilombo dos Palmares, não demorou muito para Aqualtune colocar em prática sua força de liderança e comandar uma fuga junto de outros companheiros em direção a Palmares. Teve seus filhos Ganga Zumba e Ganga Zona, dois grandes guerreiros, e Sabina, que supostamente seria mãe de Zumbi dos Palmares.
      `,
      en: `A princess and African Warrior, Aqualtune escaped, pregnant, from a sugar plantation in Porto Calvo. Through courage and determination, she explored an unknown and hostile land and established the Quilombo dos  Palmares, also known as Angola Janga, my little Angola.

      Having been princess of the kingdom of Congo in the 17th century, Aqualtune led an army of around 10 thousand people, including men and women, against the attacks of Portuguese forces. She ended up defeated and captured by the Portuguese, who were subjugating and selling them to Brazilian slave owners. Arriving in Brazil in Recife, it was sold to the Porto Calvo mill, now the municipality of Alagoas. However, upon learning about the existence of the largest center of black resistance in Brazil, Quilombo dos Palmares, it didn't take long for Aqualtune to put his leadership strength into practice and command an escape with other companions towards Palmares. She had her children Ganga Zumba and Ganga Zona, two great warriors, and Sabina, who was supposedly the mother of Zumbi dos Palmares.
      `,
    },
    images: espacoImages['Espaço Acotirene'],
  },
  'Espaço Caá-Pueira': {
    path: '/historical-figure/Espaço Caá-Pueira',
    title: 'Espaço Caá-Pueira',
    icon: capoeira,
    description: {
      pt: `A capoeira se desenvolveu no Brasil e suas raízes estão nas danças africanas e indígenas. É um estado de espírito que se expressa num diálogo corporal lúdico e prazeroso. É dança, é ginca, é esporte, é cultura, é terapia, é filosofia. É luta de libertação.

      Na Roda de Capoeira se expressam, simultaneamente, o canto, o toque dos instrumentos, a dança, os golpes, o jogo, a brincadeira, os símbolos e rituais de herança africana - notadamente banto - recriados no Brasil. Profundamente ritualizada, a Roda de Capoeira congrega cantigas e movimentos que expressam uma visão de mundo, uma hierarquia e um código de ética que são compartilhados pelo grupo. Na Roda de Capoeira se batizam os iniciantes, se formam e se consagram os grandes mestres, se transmitem e se reiteram práticas e valores afro-brasileiros.`,
      en: `Capoeira originated in Brazil and its roots lie in African and Amerindian dances. It is a spiritual state that is expressed through joyful and pleasant body dialogue. It is dance, movement, sport, culture, therapy, philosophy. Is is a quest for freedom.

      In the Capoeira Roda, singing, playing instruments, dancing, striking, playing, playing, symbols and rituals of African heritage - notably Bantu - recreated in Brazil are simultaneously expressed. Deeply ritualized, the Roda de Capoeira brings together songs and movements that express a worldview, a hierarchy and a code of ethics that are shared by the group. In the Capoeira Roda, beginners are baptized, great masters are trained and consecrated, Afro-Brazilian practices and values are transmitted and reiterated.
      `,
    },
    images: espacoImages['Espaço Caá-Pueira'],
  },
  'Espaço Ganga Zumba': {
    path: '/historical-figure/Espaço Ganga Zumba',
    title: 'Espaço Ganga-Zumba',
    icon: zumba,
    description: {
      pt: 'Filho da princesa Aqualtune, reinou durante décadas, levando Palmares ao apogeu e a ser reconhecido como nação pela coroa Portuguesa. Assinou um pacto em 1678, com o governador da capitania de Pernambuco. Foi traído e assasinado no mocambo de Cucaú.',
      en: 'Son of Princess Aqualtune, he reigned for decades, leading Palmares to its zenith and gaining recognition as a nation by the Portuguese crown. He signed a pact in 1678 with the governor of the Captaincy of Pernambuco. He was betrayed and assassinated in the mocambo of Cucaú.',
    },
    images: espacoImages['Espaço Ganga Zumba'],
  },
  'Espaço Quilombo dos Palmares': {
    path: '/historical-figure/Espaço Quilombo dos Palmares',
    title: 'Quilombo',
    icon: quilombo,
    description: {
      pt: 'De 1597 a 1694, a Zona da Mata da Capitania de Pernambuco abrigou num raio de 200km² dezenas de mocambos cuja organização política, social e militar consolidou o lendário Quilombo dos Palmares.',
      en: 'From 1597 to 1694, the Zona da Mata region of the Captaincy of Pernambuco hosted within a 200km² radius dozens of settlements whose political, social, and military organization consolidated the legendary Quilombo dos Palmares ',
    },
    images: espacoImages['Espaço Quilombo dos Palmares'],
  },
  'Espaço Zumbi': {
    path: '/historical-figure/Espaço Zumbi',
    title: 'Espaço Zumbi',
    icon: zumbi,
    description: {
      pt: 'O último líder de Palmares, Zumbi foi traído e morto em 20 de novembro de 1695. Como resultado da incansável mobilização do Movimento Negro Brasileiro, ele foi reconhecido como herói nacional pelo govenro federal, em 21 de março de 1997. ZUMBI VIVE!',
      en: `Last leader of Palmares, Zumbi was betrayed and killed on November 20, 1695. As the result of untiring mobilization by the Brazilian Black Movement, he was recognized as a National Hero by the Brazilian Government on March 21, 1997. ZUMBI LIVES!
      `,
    },
    images: espacoImages['Espaço Zumbi'],
  },
  'Espaço Onjó Cruzambe': {
    path: '/historical-figure/Espaço Onjó Cruzambe',
    title: 'Onjó Cruzambê',
    subtitle: 'Casa Do Campo Santa',
    icon: onjoCruzambe,
    description: {
      pt: 'Este espaço serve de apoio à prática das religiões de matriz africana que aqui se entrelaçam. Neste solo sagrado, Babalaôs, Ialorixás, Ekédes, Ogãs e Abiãs fazem axexês (oferendas) e Orikis (orações) aos eguns (espíritos) que vagam desassossegados pelo sangue derramado. Desde a década de 80, essas atividades acontecem na madrugada do dia 20 de novembro. Em oração, se pede proteção para a Serra e seus visitantes e licença para que a Serra seja visitada.',
      en: `
      This place serves as support for diverse religions customs of African origin that are practiced here. On this sacred ground, Babalaôs, Babalorixás, Ialorixás, Ekedes, Ogãs, and Abiãs, make offerings (axexês) and say prayers (orikis) to the spirits (Eguns) that roam the Serra da Barriga, restless by the shedding of blood. Every year since the 1980s, these activities have taken place at dawn on November 20 th. Participants pray and ask for protection and permission so that the Serra da Barriga may be visited by all.
      `,
      italic: `HOUSE OF THE SACRED`,
    },
    images: espacoImages['Espaço Onjó Cruzambe'],
  },
  'Espaço Oxile das Ervas': {
    path: '/historical-figure/Espaço Oxile das Ervas',
    title: 'Oxile das Ervas',
    subtitle: 'TERREIRO DAS ERVAS',
    icon: oxile,
    description: {
      pt: 'Na cultura dos diversos povos africanos e indígenas, as plantas e raízes eram utilizadas para cura, banhos e oferendas. Este conhecimento da medicina natural, mantido no Quilombo dos Palmares, perdura até hoje nas comunidades indígenas e remanescentes de Quilombo, nas casas religiosas de matriz africana, nas casas de rezadeiras e nas pajelanças. Esta prática se perpetua também através do plantio de ervas nos quintais, nas hortas e nos canteiros das famílias brasileiras.',
      en: `
      Plants and roots were used for cures, baths and offerings in the cultures of many African and Amerindian peoples these secrets of natural medicine, held by the Palmarinos, remain today among Native south American Indians and present-day maroon communities, in religious centers of African origin, in the houses of healers and in tribal rituals. These medicinal traditions have been kept ative by Brasilia families through the cultivation of herbs in backyards, gardens and flower pots.
      
      `,
      italic: `HERBAL GARDEN`,
    },
    images: espacoImages['Espaço Oxile das Ervas'],
  },
  'Espaço Muxima de Palmares': {
    path: '/historical-figure/Espaço Muxima de Palmares',
    title: ' Muxima de Palmares',
    subtitle: 'CORAÇÃO DE PALMARES',
    icon: muxima,
    description: {
      pt: 'Muxima de Palmares é uma homenagem aos Comandantes-em-Chefe que formavam o Conselho Deliberativo do Quilombo dos Palmares: Acaiene, Acaiuba, Acotirene, Amaro, Andalaquituche, Dambrabanga, Ganga-Muíça, Ganga-Zona, Osenga, Subupira, Toculo, Tabocas e seus principais líderes: Aqualtune, Ganga-Zumba e Zumbi, além de Banga, Comoanga e Souza que resistiram depois da morte de Zumbi. Aqui são homenageados também todos os negros e negras, guerreiros e guerreiras que ao longo de quatro séculos lutaram e ainda lutam pela liberdade e pela igualdade racial.',
      en: `
      Muxima de Palmares is a tribute to the military leaders who formed the deliberating counsel of the Quilombo dos Palmares: Acaiene, Acaiuba, Acotirene, Amaro, Andalaquituche, Dambrabanga, Ganga-Muiça, Ganga-Zona, Osenga, Subupira, Toculo, Tabocas and the principal leaders, Aqualtune, Ganga-Zumba and Zumbi. Banga, Camoanga and Souza, who resisted after the death of Zumbi, are also paid homage here, as well as all centuries, forght and still fight for freedom and equal rights.
      
      
      `,
      italic: `MUXIMA DE PALMARES 
      THE HEART OF PALMARES`,
    },
    images: espacoImages['Espaço Muxima de Palmares'],
  },
  'Espaço Atalaia Acaiene': {
    path: '/historical-figure/Espaço Atalaia Acaiene',
    title: ' Atalaia Acaiene',
    subtitle: 'MIRANTE DE ACAIENE - FILHO DE GANGA-ZUMBA',
    icon: acaiene,
    description: {
      pt: `Neste local, diante do avanço das tropas inimigas, centenas de guerreiros iniciaram a fuga estratégica e planejada. Travando um combate sangrento, muitos se jogaram do despenhadeiro, preferindo a morte ao cativeiro. Zumbi, mesmo ferido, conseguiu escapar com um grupo de elite para o Sumidouro na Serra Dois Irmãos, em Viçosa. Daquele esconderijo, tentou reorganizar o Quilombo dos Palmares, retomando a prática da guerrilha. Aparecia em povoados, arraiais e engenhos, disseminando a lenda da sua imortalidade.

      Atalaia significa ''Ponto Alto''
      
      O Memorial da Serra da Barriga tem três pontos de Atalaia; a todos os três é dado o nome dos filhos de Ganga Zumba: Acaiuba, Toculo e Acaiene.
      `,
      en: `
      Overwhelmed by advancing enemy troops, hundreds of warriors began their strategically-planned escape at this location. Fighting a bloody battle, many threw themselves off the cliffs, preferring death to captivity. Zumbi, though wounded, managed to escape with his elite and loyal warriors to a hideout on the Serra Dois Irmãos. Once there, he tried to reorganize the Quilombo by undertaking guerrilla warfare. He went into small towns, villages and farms, thus spreading the legend of his immortality.
      
      Atalaia means ''High Point''
      
      The Serra da Barriga Memorial has three Atalaia points; all three are given the name of Ganga Zumba's children: Acaiuba, Toculo and Acaiene.
      
      
      
      `,
      italic: `ACAIENE’S LOOKOUT`,
    },
    images: espacoImages['Espaço Atalaia Acaiene'],
  },
  'Espaço Ocas indígenas': {
    path: '/historical-figure/Espaço Ocas indígenas',
    title: 'Espaço Ocas indígenas',
    subtitle: '',
    icon: ocas,
    description: {
      pt: `Foi fundamental para a sobrevivência dos quilombolas, o conhecimento da cultura indígena e seus valores. Pesquisas arqueológicas trouxeram à luz a presença do índio na ocupação da Serra da Barriga, centenas de anos antes da chegada dos europeus ao Brasil, até a formação dos Quilombos. A vida doméstica girava em torno de grandes ocas, vestígios que ainda restam neste sítio arqueológico, atualmente em fase de prospecção. Aqui já foram encontrados diversos artefatos, como potes, urnas funerárias, cachimbos feitos de barro queimado, ferramentas de lítico (pedra), incluindo machados e raspadores.

      As moradias expostas na Serra da Barriga têm muita semelhança com ocas - construídas com paredes de pau a pique e cobertura vegetal. Isso porque os negros fugidos dos engenhos faziam morada nas matas, onde já viviam os nativos indígenas, e formavam os mocambos, como eram chamadas as comunidades quilombolas na época.
      
      Estima-se que esse quilombo, que teve entre suas lideranças Zumbi dos Palmares, existiu entre o final do século XVI e o fim do século XVII, e recebeu cerca de 20 mil pessoas. O quilombo também abrigou índios e brancos.
      
      `,
      en: `
      Knowledge of Amerindian culture was essential for the survival of the maroons. Archaeological research has shed light on the presence of Indian groups at the Serra da Barriga, from hundreds of years before the arrival of Europeans in Brazil, until the formation of the Quilombos. Amerindian doméstic life centered around large oblong dwellings, remains of which are still visible-on the site. Many diverse artifacts have been discovered, such as pots, burial urns and pipes made of fired clay, and tools made of stone including axes and scrapers.
      
      The houses on display in Serra da Barriga are very similar to hollow houses - built with wattle and daub walls and vegetation cover. This is because the black people who fled the plantations lived in the forests, where the indigenous natives already lived, and formed mocambos, as the quilombola communities were called at the time.
      
      It is estimated that this quilombo, whose leaders included Zumbi dos Palmares, existed between the end of the 16th century and the end of the 17th century, and welcomed around 20 thousand people. The quilombo also housed Indians and whites.
      
      
      
      `,
      italic: `INDIAN DWELLINGS`,
    },
    images: espacoImages['Espaço Ocas indígenas'],
  },
  'Espaço Batucajé': {
    path: '/historical-figure/Espaço Batucajé',
    title: 'Batucajé',
    subtitle: 'DANÇA AO SOM DE TAMBORES',
    icon: batucaje,
    description: {
      pt: `O batuque é a essência da cultura afro-brasileira, os sons dos tambores, berimbaus, adufes (pandeiros) e agogôs, levam homens e mulheres a sintonizar profundamente com seus corpos e espíritos, através da ginga da capoeira, da congada, do maracatu e do samba. Os acontecimentos da vida cotidiana, como nascimentos, mortes, plantios, colheitas, vitórias e manifestações da natureza, eram comemorados comunitariamente com danças, músicas e baticuns. Antigamente, os toques eram também um precioso meio de comunicação entre os guerreiros e entre o divino e o profano.

      `,
      en: `
      The drum beat is the essence of African-Brazilian culture.  The sound of the drums, berimbaus, tambourines and agogôs take me and women deeply into synchronism with their bodies and souls, through the movements of capoeira, congada, maracatu and samba. Events of daily life, such as birth, planting, harvest, victories and natural elements were celebrated in the communities through dance, music and the beat of drums in the past, the pounding of the drums was also a precious means of communication between warriors, the divine and the profane.
      
      
      `,
      italic: `Batucajé
      DANCING TO THE BEAT OF DRUMS`,
    },
    images: espacoImages['Espaço Batucajé'],
  },
  'Espaço Atalaia de Acaiuba': {
    path: '/historical-figure/Espaço Atalaia de Acaiuba',
    title: 'Atalaia de Acaiuba',
    subtitle: 'MIRANTE DE ACAIUBA - LÍDER PALMARINO ',
    icon: acaiuba,
    description: {
      pt: `Protegidos pela densa mata atlântica, os quilombolas usavam tática de guerrilha avançada, surpreendendo e derrotando dezenas de expedições portuguesas e holandesas ao longo de décadas. Sitiando a Serra da Barriga, as tropas portuguesas somente conseguiram romper e adentrar o reduto palmarino usando armamento pesado – canhões e escopetas. Aqui, a história registra o maior número de homens, mulheres e crianças mortos e degolados em combates. Esse genocídio aconteceu na madrugada do dia 6 de fevereiro de 1694.

Atalaia significa ''Ponto Alto''

O Memorial da Serra da Barriga tem três pontos de Atalaia; a todos os três é dado o nome dos filhos de Ganga Zumba: Acaiuba, Toculo e Acaiene.



      `,
      en: `
      Protected by the dense Atlantic forest, the Palmarinos employed guerrilla tactics, surprising and defeating dozens of Portugueses and Dutch expeditions for decades. The Portugueses troops were able to break and enter the Palmarino stronghold only by besieging the Serra da Barriga and by using cannons and muskets. Here, history records the largest number of men, women and children killed in battle. This genocide happened during the early hours of February 6, 1694.
      
      Atalaia means ''High Point''
      
      The Serra da Barriga Memorial has three Atalaia points; all three are given the name of Ganga Zumba's children: Acaiuba, Toculo and Acaiene.
      
      
      
      `,
      italic: `ACAIUBA´S LOOKOUT`,
    },
    images: espacoImages['Espaço Atalaia de Acaiuba'],
  },
  'Espaço Lagoa Encantada dos Negros': {
    path: '/historical-figure/Espaço Lagoa Encantada dos Negros',
    title: 'Lagoa Encantada dos Negros',
    subtitle: 'GAMELEIRA SAGRADA - IRÔCO',
    icon: lagoa,
    description: {
      pt: `Este lugar representa a purificação da vida, onde os quilombolas, através da energia das águas e das árvores, repousavam e saciavam a sede, afiavam suas armas com a presença do supremo através da natureza. No Brasil, Irôco é o orixá da gameleira branca e representa o tempo. É a essência da criação, o poder da terra, e ensina aos homens o sentido da vida. É a árvore primordial trazida pelos africanos, existe desde os princípios dos tempos e a tudo assistiu, a tudo resistiu e a tudo resistirá.

      Iroco ou Irocô (em iorubá: Iroko) é um orixá do candomblé Queto. No Brasil, é associado à árvore conhecida como gameleira (Ficus insípida), enquanto que, na África, é associado à árvore milicia excelsa. Corresponde ao 'vodum Locô' no Candomblé Jeje e ao 'Inquice Tempo' no Candomblé Banto.
      



      `,
      en: `
      This place represents the purification of life, where the Palmarinos, through the energy of water and trees, rested and quenched their thirst. They sharpened their weapons and tools, nourishe their souls through the presence of their supreme god, through nature. In Brazil, Irôco is the Orixá of the white Gameleira tree and represents time. Ir is the essence of creation, the power of the land, and teaches men and women the meaning of life. It is the primordial tree. Brought to Brazil by Africans, ir has witnessed everything, resisted everything and continues to see everything. 
      
      Iroco or Irocô (in Yoruba: Iroko) is an orixá from Candomblé Queto. In Brazil, it is associated with the tree known as gameleira (Ficus insipida), while, in Africa, it is associated with the Milicia excelsa tree. It corresponds to 'vodum Locô' in Candomblé Jeje and 'Inquice Tempo' in Candomblé Banto.
      
      
      
      `,
      italic: `MAGICAL POND OF THE PALMARINOS
      SACRED IÔCO`,
    },
    images: espacoImages['Espaço Lagoa Encantada dos Negros'],
  },
  'Espaço Onjó de Farinha': {
    path: '/historical-figure/Espaço Onjó de Farinha',
    title: 'Onjó de Farinha',
    subtitle: 'CASA DE FARINHA',
    icon: onjoFarinha,
    description: {
      pt: `A farinhada, tão comum nas comunidades rurais, era uma prática indigena, incorporada pelos negros e muito usada no Quilombo dos Palmares. Os quilombolas criavam animais e cultivavam milho, feijão, macaxeira, cana-de-açúcar, banana e laranja. Plantavam também a mandioca, de onde se extraia a farinha que, depois de torrada, poderia ser usada no preparo de deliciosos bolos, beijus, tapiocas e outras guloseimas, tão presentes nas mesas das famílias nordestinas.

      



      `,
      en: `
      Manual flour production, so common in rural communities, was an Indian custom, incorporated by African-Brazilians and much used at the Quilombo dos Palmares. Palmarinos raised animals and cultivated corn, beans, sugar cane, bananas and oranges. They also planted manioc, from which they extracted flour that, after roasted, could be used to make delicious cakes, “beijus”, “tapioca” and other treats, still served by families of northeastern Brazil.
      
      
      
      `,
      italic: `MILL HOUSE`,
    },
    images: espacoImages['Espaço Onjó de Farinha'],
  },
  'Espaço Restaurante Kúuku-Waana': {
    path: '/historical-figure/Espaço Restaurante Kúuku-Waana',
    title: 'Restaurante Kúuku-Waana',
    subtitle: 'BANQUETE FAMILIAR',
    icon: restaurante,
    description: {
      pt: `A culinária afro-brasileira tem uma dimensão que transcende o alimento. Ela é uma oferenda da natureza aos seres vivos, e serve de elo de comunicação com os seus ancestrais. Na cultura Bantu, a culinária é um dos elementos de restauração da força vital e mantém o equilíbrio entre os vivos e os mortos. Aqui você poderá saborear alguns dos quitutes que eram produzidos e consumidos pelos quilombolas quando chegaram à Serra da Barriga em 1597, sob a liderança da Princesa Aqualtune.

      



      `,
      en: `
      African-Brazilian cuisine has a dimension beyond the meal itself. Feasting serves as a link of communication with the ancestors. In Bantu culture, food is an important element to restore vital forces, and maintains balance between the living and the deceased. Here, you may taste some of the same kinds of food produced and consumed by the palmarinos when they arrived at the Serra da Barriga in 1597, under the leadership of Princess Aqualtune.
      
      
      
      
      `,
      italic: `Kúuku-Wáana
      FAMILY FEAST`,
    },
    images: espacoImages['Espaço Restaurante Kúuku-Waana'],
  },
  'Espaço Atalaia de Toculo': {
    path: '/historical-figure/Espaço Atalaia de Toculo',
    title: 'Atalaia de Toculo',
    subtitle: 'MIRANTE DE TOCULO, FILHO DE GANGA-ZUMBA ',
    icon: toculo,
    description: {
      pt: `Daqui do alto da Serra da Barriga, avistando o Rio Mundaú, Zumbi dos Palmares comandava a resistência quilombola, controlando todo movimento suspeito na mata. A paliçada construída logo abaixo no sopé da Serra tornou-se uma proteção impenetrável, uma fortaleza, rodeada por fossos contendo bichos ferozes e objetos pontiagudos. Canhões foram utilizados pela primeira vez contra Palmares em 6 de fevereiro de 1694, surpreendendo os quilombolas e determinando o fim trágico da Cerca Real dos Macacos. Em 06 de fevereiro de 1694.

      Atalaia significa ''Ponto Alto''
      
      O Memorial da Serra da Barriga tem três pontos de Atalaia; a todos os três é dado o nome dos filhos de Ganga Zumba: Acaiuba, Toculo e Acaiene.
      



      `,
      en: `
      From the top of Serra da Barriga, overlooking the Mundaú River, Zumbi dos Palmares commanded the maroon resistance, controlling all suspicious movements in the woods. A stockade, constructed at the base of the hill, turned the quilombo into a fortress, for its trenches filled with deadly sharpened sticks. Cannons were used for the maroons and leading to  the tragic demise of the Cerca Real dos Macacos, on February 6, 1694.
      
      Atalaia means ''High Point''
      
      The Serra da Barriga Memorial has three Atalaia points; all three are given the name of Ganga Zumba's children: Acaiuba, Toculo and Acaiene.
      
      
      
      `,
      italic: `TOCULO´S LOOKOUT`,
    },
    images: espacoImages['Espaço Atalaia de Toculo'],
  },
};

// Função para obter os dados de rota com base na classe prevista
export function getEspacoData(className: string): EspacoData | undefined {
  return espacos[className];
}
