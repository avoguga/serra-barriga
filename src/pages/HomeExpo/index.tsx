import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';

import obj1 from '../../assets/modelosOtimizados/Objeto_01-f-02.glb';
import obj2 from '../../assets/modelosOtimizados/Objeto_01-b.glb';
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




import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';
import { useState } from 'react';

import * as C from './styles';

export type Modelo3D = {
  id: number;
  src: string;
  alt: string;
  title:string;
  description: string;
};


const HomeExpo = () => {
  const ExpoIcon = Icons['Expo'];
  const ArqIcon = Icons['Arqueologia'];
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const modelos: Modelo3D[] = [
    {
      id: 1,

      src: obj1,
      alt: 'Modelo',
      title: 'ARTEFATO',
      description: 'Artefacto ou artefato, em arqueologia, é qualquer objeto feito ou modificado por seres humanos. Esses objetos fornecem, através de pesquisas e análises arqueológicas, diversas informações sobre as ...'
    },
    {
      id: 2,

      src: obj2,
      alt: 'Modelo',
      title: '',
      description: ''
    },
    {
      id: 3,

      src: obj3,
      alt: 'Vasilhame de cerâmica',
      title: 'Vasilhame de cerâmica',
      description: ''
    },
    {
      id: 4,

      src: obj4,
      alt: 'Opérculo',
      title: 'Opérculo',
      description: ' Objeto cerâmico utilizado para cobrir a urna funerária (Igaçara).'
    },
    {
      id: 5,

      src: obj5,
      alt: 'Cachimbo de cerâmica',
      title: 'Cachimbo de cerâmica',
      description: 'Representação de animal (zoomorfo).'
    },
    {
      id: 6,

      src: obj6,
      alt: 'Cachimbo de cerâmica',
      title: 'Cachimbo de cerâmica',
      description: ''
    },
    {
      id: 7,

      src: obj7,
      alt: 'Cachimbo de cerâmica',
      title: 'Cachimbo de cerâmica',
      description: ''
    },
    {
      id: 8,

      src: obj8,
      alt: 'Cachimbo de cerâmica',
      title: 'Cachimbo de cerâmica',
      description: ''
    },
    {
      id: 9,

      src: obj9,
      alt: 'Disco de argila.',
      title: 'Disco de argila',
      description: ''
    },
    {
      id: 10,

      src: obj10,
      alt: '',
      title: '',
      description: ''
    },
    {
      id: 11,

      src: obj11,
      alt: 'Machado de lítico ',
      title: 'Machado de lítico',
      description: ''
    },
    {
      id: 12,

      src: obj12,
      alt: 'Urna funerária (igaçara)',
      title: 'Urna funerária (igaçara)',
      description: `Tradição Aratu
      O tamanho desta urna, os seixos associados e o local onde foi encontrada segerem que foi utilizada para um enterramento secundário de uma criaça. Infelizmente, a peça foi descoberta e desenterrada por não-arqueólogos, impedindo assim que retirássemos mais informações.`
    },
    {
      id: 13,

      src: obj13,
      alt: 'Varilha cerâmica indígena',
      title: 'Varilha cerâmica indígena',
      description: 'tradição Aratu.'
    },
    {
      id: 14,

      src: obj14,
      alt: 'Disco de argila',
      title: 'Disco de argila ',
      description: ''
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
    const backButtonStyle = {
      backgroundColor: '#394603' // Essa cor pode vir de um estado ou prop
    };
  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#67781B',
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
          onClick={() => navigate(-1)}
          style={backButtonStyle} // Passando o estilo aqui
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

        <C.ModelsContainer>
          {modelos.map((modelo) => (
            <button key={modelo.id}      onClick={() => navigate(`/virtual-expo/expo-details/${modelo.id} `, {state: {modelo, background:'#859A27'}})}>
              {modelo.id === 1 || modelo.id === 2 ? ( 
                <model-viewer
                  ar
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
                    backgroundColor: '#859A27',
               

                    borderRadius: '50%',
                  }}
                ></model-viewer>
              ) : (
                <model-viewer
                  ar
                  loading="eager"
                  camera-controls
                  auto-rotate
                  touch-action="pan-y"
                  src={modelo.src}
                  alt={modelo.alt}
                  style={{
                    width: '146px',
                    height: '146px',
                    backgroundColor: '#859A27',

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

export default HomeExpo;
