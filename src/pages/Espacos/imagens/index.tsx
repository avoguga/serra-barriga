import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LowArrow from "../../../components/LowArrowButton";
import { EspacoData, getEspacoData } from "../../../helpers/Espacos";
import Sidebar from "../../Atalaia/Sidebar";
import { View, Nav, Content } from "../infomation/styles";
import * as C from './styles'
import img from '../../../assets/icons/imagem - branco.svg';
import OpenImage from "../../../components/OpenImage";

const ImageView = () => {
    
    const navigate = useNavigate();
   const { figureName } = useParams<{ figureName: string }>();
    const [openImage, setOpenImage] = useState<{ src: string; description: string; } | null>(null);
  
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
    if (!figureData) {
        return <p>Espaço não encontrado.</p>;
    }
    return (
      <View>
        <Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
        </Nav>
        <C.NavFooter>
          <Sidebar />
        </C.NavFooter>
        <Content>
          <C.AgroupImgs>
          <img
              src={figureData.icon } 
              alt={`Ilustração de ${figureData.title}`}
              style={{
                width: '200px',
                height: 'auto',
                margin: '100px 0 0 0',
              }}
            />
            <h1>{figureData.title}</h1>
            <p>{figureData.subtitle}</p>
          </C.AgroupImgs>
          <C.ImgText>
            <img
              src={img} 
              alt="ícone de imagens"
              style={{ width: '25px', height: '25px',  }}
            />
            <h3>Imagens</h3>
          </C.ImgText>
          <C.AgroupImg>
          {figureData.images ? (
            figureData.images.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Imagem do espaço ${figureData.title}`}
                onClick={() => setOpenImage({ src: imageSrc, description: `Imagem do espaço ${figureData.title}` })}
                style={{ cursor: 'pointer' }} // Adiciona um indicador de que é clicável
              />
            ))
          ) : (
            <p>Nenhuma imagem disponível.</p>
          )}
        </C.AgroupImg>
      </Content>
      {openImage && (
        <OpenImage
          src={openImage.src}
          alt={openImage.description}
          background="#8aa61e"
          description={openImage.description}
          onClose={() => setOpenImage(null)} // Fecha a visualização da imagem
        />
      )}
    </View>

    );
  };
  
  export default ImageView;