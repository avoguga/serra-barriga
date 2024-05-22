// Libs
import { styled } from 'styled-components';

// Components
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

// Assets
import WatermarkImage from '../../assets/background-red.png';
import appSerra from '../../assets/logo.png';

import BtnDownArrow from '../../components/ScrollButton';
import FloatingButtonBar from '../../components/FloatingContainer';

const View = styled.div`
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  background-color: #8d094a;
  text-align: center;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: auto;
  h1,
  p,
  span {
    font-size: 17px;
    margin: 20px 0;
    line-height: 2;
  }
`;

const Ficha = () => {
  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <View>
        <FloatingButtonBar backgroundColor="#700238" backBgColor="#4E0026" />
        <BtnDownArrow />
        <img
          src={appSerra}
          alt="Logo do aplicativo Serra da Barriga"
          style={{ width: '200px', height: '70px', margin: '140px 0 50px' }}
        />
        <h1>Ficha Técnica</h1>
        <p>APLICATIVO SERRA DA BARRIGA</p>
        <p>
          Diferentes instituições se uniram para contribuir com a preservação
          cultural e histórica de um dos lugares mais importantes do Brasil.
        </p>
        <p>
          SUPERVISÃO
          <br />
          Fundação Cultural Palmares
        </p>
        <p>
          EXECUÇÃO, PESQUISA E COORDENAÇÃO
          <br />
          Centro de Cultura e Estudos Étnicos Anajô
          <br />
          Projeto Vamos Subir a Serra
        </p>
        <p>
          PARCERIA E APOIO
          <br />
          TikTok
        </p>
        <p>
          APOIO
          <br />
          Iphan - Instituto do Patrimônio Histórico e Artístico Nacional
        </p>
        <p>
          Coordenação do Projeto
          <br />
          HANDEMBA MUTANA
          <br />
          VALDICE GOMES
          <br />
          SIMONE BENCHIMOL
        </p>
        <p>
          Textos do Totem
          <br />
          HELCIAS PEREIRA
        </p>
        <p>
          DESENVOLVIMENTO E CONTEÚDO
          <br />
          ESTÚDIO NÚCLEO ZERO
        </p>
        <p>
          Design Gráfico
          <br />
          WERNER SALLES BAGETTI
          <br />
          ULYSSES RIBAS
          <br />
          REBECCA MACHADO
        </p>
        <p>
          Ilustrações
          <br />
          WEBER SALLES BAGETTI
          <br />
          ULYSSES RIBAS
        </p>
        <p>
          Vídeos
          <br />
          PAULO SILVER
          <br />
          VANESSA MOTA
          <br />
          WERNER SALLES BAGETTI
          <br />
          WEBER SALLES BAGETTI
        </p>
        <p>
          Fotogrametria
          <br />
          ULYSSES RIBAS
        </p>
        <p>
          Desenvolvimento tecnológico do aplicativo
          <br />
          KMF - ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
        </p>
      </View>
    </WatermarkWrapper>
  );
};

export default Ficha;
