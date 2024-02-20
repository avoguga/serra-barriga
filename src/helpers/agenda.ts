export type Evento = {
  id: number;
  titulo: string;
  descricao: {
    pt: string;
    en: string;
  };
  data: string;
  hora: string;
};

export type MesAgenda = {
  mes: string;
  eventos: Evento[];
};

export const agenda: MesAgenda[] = [
  {
    mes: 'Março',
    eventos: [
      {
        id: 1,
        titulo: 'Roda de capoeira na Serra da Barriga',
        descricao: {
          pt: 'Protegidos pela densa mata atlântica, os quilombolas usavam tática de guerrilha avançada, surpreendendo e derrotando dezenas de expedições portuguesas e holandesas ao longo de décadas. Sitiando a Serra da Barriga, as tropas portuguesas somente conseguiram romper e adentrar o reduto palmarino usando armamento pesado – canhões e escopetas. Aqui, a história registra o maior número de homens, mulheres e crianças mortos e degolados em combates. Esse genocídio aconteceu na madrugada do dia 6 de fevereiro de 1694. ',
          en: '  Protected by the dense Atlantic forest, the Palmarinos employed guerrilla tactics, surprising and defeating dozens of Portugueses and Dutch expeditions for decades. The Portugueses troops were able to break and entre the Palmarino stronghold only by besieging the Serra da Barriga and by using cannons and muskets. Here, history records the largest number of mem, women and children killed in battle. This genocide happened during the early hours of February 6, 1694.',
        },

        data: '23/03',
        hora: '15h',
      },
      {
        id: 2,
        titulo: 'Visita guiada à trilha ecológica',
        descricao: {
          pt: 'Descrição aqui',
          en: 'Description here',
        },
        data: '25/03',
        hora: '10h',
      },
    ],
  },
  {
    mes: 'Abril',
    eventos: [
      // Eventos de Abril
    ],
  },
  {
    mes: 'Maio',
    eventos: [
      // Eventos de Maio
    ],
  },
  {
    mes: 'Junho',
    eventos: [
      // Eventos de Junho
    ],
  },
];

export const getEventosPorMes = (mesSelecionado: string): Evento[] => {
  const mes = agenda.find((m) => m.mes === mesSelecionado);
  return mes ? mes.eventos : [];
};
