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
      pt: 'Maria Neide Martins, conhecida como Mãe Neide Oyá D’Oxum, nasceu no município de Arapiraca/AL. A ialorixá fundou, em 1984, o Grupo Espírita Santa Bárbara (Guesb), onde desenvolve projetos com o foco no resgate social de pessoas em situação de vulnerabilidade, por meio da religiosidade, e da preservação da arte e da cultura negra. Mãe Neide também é responsável pelo Centro de Formação e Inclusão Social INAÊ, Gastróloga, Patrimônio Vivo do Estado de Alagoas e Embaixadora da Gastronomia Brasileira.',
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
      pt: 'De família pobre, Carolina de Jesus nasceu em Sacramento/MG. É considerada uma das maiores escritoras negras do país, e tem em sua obra um importante referencial para os estudos culturais no Brasil e no mundo. Publicou seu primeiro livro em 1960 com o título “Quarto de Despejo” que, traduzido para 29 idiomas, vendeu mais de cem mil exemplares em diferentes partes do mundo. Publicou também “Casa de Alvenaria” (crônicas), “Pedaços da fome” (romance, 1963) e “Diário de Bitita” (na França em 1982, e no Brasil em 1986). Está incluída no Dicionário mundial de mulheres notáveis, publicado em Lisboa.',
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
      pt: `A partir de João Alves de Torres Filho, o Joãozinho da Goméia, nascido em 1914, os cultos de matriz africana nunca mais foram vistos da mesma maneira no Brasil, especialmente em regiões onde seus adeptos foram cruelmente perseguidos por décadas. Responsável pela popularização dessas religiões, eternizou-se como referência nas tradições de Matrizes Africanas e ficou conhecido como Rei do Candomblé.`,
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
      pt: `Nascido em Porto Alegre/RS em 1914, Lupi, como era também conhecido, demonstrou seu interesse pela música ainda criança. Ao longo da vida compôs desde marchinhas de carnaval a hinos de times de futebol. Porém, seu principal estilo era samba-canção, caracterizado por letras repletas de sentimento e melancolia. “Nervos de Aço”, “Cadeira Vazia” e “Se Acaso Você Chegasse” são exemplos de suas experiências amorosas que foram musicadas. Deixou mais de uma centena de canções editadas, e cerca de 500 inéditas.`,
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
      pt: `Escritor, artista plástico, teatrólogo, político e poeta, Abdias Nascimento foi um dos maiores ativistas pelos direitos do povo negro, no Brasil. Nascido em 1914 em Franca/SP, teve sua trajetória marcada pela participação na Frente Negra Brasileira, nos anos 1930, e pela contribuição ao Congresso Afro-Campineiro, em 1938. Em 1944 fundou e dirigiu o Teatro Experimental do Negro (TEN) no Rio de Janeiro, tornando-se pioneiro em levar ao palco um elenco negro, inovando a formação do teatro moderno brasileiro.
      `,
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
      pt: 'Chica Xavier, nome artístico de Francisca Xavier Queiroz de Jesus, nasceu em Salvador, em 22 de janeiro de 1932. Foi uma ialorixá, produtora teatral e atriz de teatro, cinema e televisão brasileira. Mesmo sendo mais conhecida pelo grande público por seus trabalhos nas telenovelas da TV Globo, onde eternizou personagens emblemáticas, atuou no teatro nacional por mais de 60 anos destacando-se como grande personalidade da representatividade negra na arte do Brasil.',
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
      pt: `Natural de Maceió/AL, Helcias Pereira é considerado um dos ativistas mais atuantes pela causa social do negro em Alagoas. Desde a adolescência, se dedica ao desenvolvimento de estratégias de combate ao racismo, à discriminação racial e à intolerância religiosa. Foi coordenador nacional dos Agentes de Pastoral Negros do Brasil (APNs) e fundador do Centro de Cultura e Estudos Étnicos Anajô. Em 2010, recebeu as comendas Zumbi dos Palmares e Dandara, concedidas pela Câmara Municipal de Maceió/AL, em reconhecimento a sua atuação pela diversidade étnico-racial no estado.
      `,
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
      pt: `Filha de Ogum, Severina Paraíso da Silva, conhecida como Mãe Biu, foi responsável pela manutenção da tradição Xambá, em Pernambuco. Durante mais de uma década  de repressão às religiões de matriz africana, garantiu a continuidade da cultura que vive em função do candomblé e que caracteriza a comunidade Portão do Gelo. Reconhecida pela Fundação Cultural Palmares como um dos primeiros quilombos urbanos do país, a comunidade se mantém viva e unida a partir da perpetuação dos valores e saberes transmitidos pela Ialorixá.`,
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
      pt: `Representante das Casas de Culto Afro-brasileiras de Alagoas, é uma das mais respeitadas ialorixás do estado. À frente da Casa Ilé N’ifé Omi Omo Posú Bétá, criada por seu esposo em 1950, perpetua a cultura e religiosidade de seus ancestrais. Em 2012 recebeu, em nome das comunidades religiosas de matriz africana, o pedido oficial de perdão pelo governo do Estado, sobre a Quebra de Xangô. O fato ocorrido 100 anos antes, consistiu na destruição de todas as casas de culto afro-brasileiro de Maceió.      `,
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
      pt: `José Tadeu Carneiro Cardoso, nascido em Jacobina, na Bahia, iniciou-se na Capoeira nos anos 60 com seu irmão mais velho, o Camisa Roxa. Em seguida mudou-se para Salvador, indo morar no bairro da Lapinha, onde continuou a praticar capoeira nas rodas de rua, principalmente nas de Mestre Valdemar e Mestre Traíra, que eram realizadas na Rua Pero Vaz. Posteriormente foi treinar na academia de Mestre Bimba, onde se formou. Mestre Camisa fundou a Escola Abadá-Capoeira, hoje presente em todos os estados brasileiros e em mais de 28 países do mundo, entre eles: Estados Unidos, México, Canadá, França, Dinamarca, Inglaterra, Israel e Angola. A Escola se tornou uma divulgadora da língua portuguesa pelo mundo, com cerca de 40 mil capoeiristas, seguindo a filosofia, doutrina, normas e fundamentos ditados pelo Mestre.
      `,
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
      pt: `Severino Cláudio Figueiredo Leite, também conhecido como Mestre Cláudio, é natural do Rio de Janeiro/RJ. Aprendeu a arte da ginga aos 12 anos. Em 1982, a Capoeira tornou-se seu ofício. Professor de Educação Física, Mestre Cláudio é um dos fundadores da Escola de Capoeira Pôr do Sol dos Palmares, onde há mais de 30 anos desenvolve atividades de formação de capoeiristas em todo o estado de Alagoas. Mestre Cláudio é massoterapeuta, biodanceiro e leitor corporal, com especialização em treinamento esportivo.
      `,
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
      pt: `Militante do Movimento Negro desde a década de 1980, Zezito Araújo teve relevante participação no tombamento da Serra da Barriga, localizada em União dos Palmares/AL, assim como nos projetos de desenvolvimento do Parque Memorial Quilombo dos Palmares. Zezito é historiador e foi diretor do Núcleo de Estudos Afro-brasileiros da Universidade Federal de Alagoas (UFAL). Por sua vasta experiência e atuação política contra a discriminação cultural, foi homenageado em 2012 pela Câmara Municipal de Maceió com a Comenda Zumbi dos Palmares.`,
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
