import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';

import obj1 from '../../assets/modelosOtimizados/Objeto_01-f-02.glb';

import obj3 from '../../assets/modelosOtimizados/Objeto_02-b (2).glb';
import obj4 from '../../assets/modelosOtimizados/Objeto_03-b.glb';
import obj5 from '../../assets/modelosOtimizados/Objeto_04_4k-c.glb';
import obj6 from '../../assets/modelosOtimizados/Objeto_05_4k-b.glb';
import obj7 from '../../assets/modelosOtimizados/Objeto_06_4k-b.glb';
import obj8 from '../../assets/modelosOtimizados/Objeto_07_4k-b.glb';
import obj9 from '../../assets/modelosOtimizados/Objeto_08_4k-c.glb';
import obj10 from '../../assets/modelosOtimizados/Objeto_09_4k-b.glb';
import obj11 from '../../assets/modelosOtimizados/Objeto_11_4k-b.glb';
import obj12 from '../../assets/modelosOtimizados/Objeto_12_4k-b.glb';
import obj13 from '../../assets/modelosOtimizados/Objeto_13_4k-b.glb';
import obj14 from '../../assets/modelosOtimizados/Objeto_15_4k-b.glb';

import Video from '../../assets/icons/i_video pagina.png';

import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useState } from 'react';

import * as C from './styles';

export type Modelo3D = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

const VirtualExpo = () => {
  const ExpoIcon = Icons['Expo'];
  const ArqIcon = Icons['Arqueologia'];
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const modelos: Modelo3D[] = [
    {
      id: 1,

      src: obj1,
      alt: 'Vasilhame de cerâmica (alisado) - Tradição Aratu.      ',
      title: 'Vasilhame de cerâmica (alisado) -       ',
      description: 'Tradição Aratu.',
    },

    {
      id: 2,

      src: obj3,
      alt: 'Vasilhame de cerâmica (alisado) - Tradição Aratu.      ',
      title: 'Vasilhame de cerâmica (alisado)       ',
      description: 'Tradição Aratu.',
    },
    {
      id: 3,

      src: obj4,
      alt: 'Vasilhame de cerâmica - Tradição Papeba      ',
      title: 'Vasilhame de cerâmica       ',
      description: 'Tradição Papeba. ',
    },
    {
      id: 4,

      src: obj5,
      alt: 'Opérculo ',
      title: 'Opérculo ',
      description:
        'objeto cerâmico (alisado) utilizado para cobrir a urna funerária (Igaçaba) - Tradição Aratu.',
    },
    {
      id: 5,

      src: obj6,
      alt: 'Cachimbo de cerâmica com representação de animal (zoomorfo).',
      title: 'Cachimbo de cerâmica com representação de animal (zoomorfo).',
      description: 'Representação provavelmente de Tatu.',
    },
    {
      id: 6,

      src: obj7,
      alt: 'Cachimbo de cerâmica (alisado).',
      title: 'Cachimbo de cerâmica (alisado).      ',
      description: '',
    },
    {
      id: 7,

      src: obj8,
      alt: 'Fornilho de cachimbo (não é inteiro).',
      title: 'Fornilho de cachimbo (não é inteiro).',
      description: '',
    },
    {
      id: 8,

      src: obj9,
      alt: 'Fornilho de cachimbo (picoteado).      ',
      title: 'Fornilho de cachimbo (picoteado).      ',
      description: '',
    },
    {
      id: 9,

      src: obj10,
      alt: 'Fornilho de cachimbo (alisado).      ',
      title: 'Fornilho de cachimbo (alisado).      ',
      description: '',
    },
    {
      id: 10,

      src: obj11,
      alt: 'Machado lítico polido.      ',
      title: 'Machado lítico polido.      ',
      description: '',
    },
    {
      id: 11,

      src: obj12,
      alt: 'Urna funerária (igaçaba)',
      title: 'Urna funerária (igaçaba)',
      description: `Tradição Aratu
      O tamanho desta urna, os seixos associados e o local onde foi encontrada segerem que foi utilizada para um enterramento secundário de uma criaça. Infelizmente, a peça foi descoberta e desenterrada por não-arqueólogos, impedindo assim que retirássemos mais informações.`,
    },
    {
      id: 12,

      src: obj13,
      alt: 'Vasilhame de cerâmica indígena alisado em baixo e roletado em cima',
      title: 'Vasilhame de cerâmica indígena',
      description: ' alisado em baixo e roletado em cima.',
    },
    {
      id: 13,

      src: obj14,
      alt: 'Disco de argila',
      title: 'Disco de argila ',
      description: 'possivelmente usado em atividades lúdicas.',
    },
  ];

  const fullText = `A Serra da Barriga possui um patrimônio arqueológico que conta a história de diversos povos que aqui habitavam em tempos passados. A sua passagem por essas terras foi preservada através de diversos vestígios que resistiram ao tempo. \n\n
   Estudos arqueológicos realizados pelo Núcleo de Ensino e Pesquisa Arqueológico da Universidade Federal de Alagoas, revelaram cachimbos, panelas de barro, ferramentas de pedra lascada e polida, marcas dos pisos de moradias e muito mais. Essas evidências permitem que se aprenda muito sobre a vida cotidiana desses grupos.`;

  const paragraphs = fullText.split('\n\n');

  // Define o número de parágrafos a serem mostrados na prévia
  const previewParagraphCount = 1; // Ajuste conforme necessário

  // Determina quais parágrafos mostrar com base no estado de expansão
  const textToShow = isExpanded
    ? paragraphs
    : paragraphs.slice(0, previewParagraphCount);

  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100%',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '50px',
            marginBottom: '60px',
          }}
        />
        <C.BackButton
          onClick={() => {
            navigate(-1), { state: { background: '#753D00' } };
          }}
        >
          <img src={seta} alt="" />
        </C.BackButton>
        <C.ExpoContainer>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </C.ExpoContainer>

        <C.ExpoInfoContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '2rem',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <ArqIcon />
            <h2>ARQUEOLOGIA DA SERRA DA BARRIGA</h2>
          </div>
          {textToShow.map((paragraph, index) => (
            <C.ExpoText key={index}>{paragraph}</C.ExpoText>
          ))}

          <C.ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'LER MENOS' : 'LER MAIS'}
          </C.ReadMoreButton>
        </C.ExpoInfoContainer>

        <C.SelfieContainer
          onClick={() => {
            navigate(`/virtual-expo/expo-videos`);
          }}
        >
          <C.Icon src={Video} alt="video" />

          <C.Text>VÍDEOS</C.Text>
        </C.SelfieContainer>

        <C.ModelsContainer>
          {modelos.map((modelo) => (
            <button
              key={modelo.id}
              onClick={() =>
                navigate(`/virtual-expo/expo-details/${modelo.id} `, {
                  state: { modelo, background: '#EB7400' },
                })
              }
            >
              {modelo.id === 1 || modelo.id === 2 ? (
                <model-viewer
                  loading="eager"
                  camera-controls
                  auto-rotate
                  camera-orbit="0deg 75deg 105%"
                  max-camera-orbit="400deg 75deg auto"
                  min-camera-orbit="0deg 75deg auto"
                  touch-action="pan-y"
                  src={modelo.src}
                  alt={modelo.alt}
                  style={{
                    width: '146px',
                    height: '146px',
                    backgroundColor: '#EB7400',

                    borderRadius: '50%',
                  }}
                ></model-viewer>
              ) : (
                <model-viewer
                  loading="eager"
                  camera-controls
                  auto-rotate
                  touch-action="pan-y"
                  src={modelo.src}
                  alt={modelo.alt}
                  style={{
                    width: '146px',
                    height: '146px',
                    backgroundColor: '#EB7400',

                    borderRadius: '50%',
                  }}
                ></model-viewer>
              )}
            </button>
          ))}
        </C.ModelsContainer>
      </div>
    </WatermarkWrapper>
  );
};

export default VirtualExpo;
