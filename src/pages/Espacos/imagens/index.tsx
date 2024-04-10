import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LowArrow from "../../../components/LowArrowButton";
import { EspacoData, getEspacoData } from "../../../helpers/Espacos";
import Sidebar from "../../Atalaia/Sidebar";

import * as C from './styles'
import img from '../../../assets/icons/imagem - branco.svg';
import OpenImage from "../../../components/OpenImage";
import SpaceHeader from "../../../components/SpaceHeader";

const ImageView = () => {
    
    const navigate = useNavigate();
   const { figureName } = useParams<{ figureName: string }>();
    const [openImage, setOpenImage] = useState<{ src: string; description: string; } | null>(null);
  
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
    if (!figureData) {
        return <p>Espaço não encontrado.</p>;
    }
    return (
      <C.View>
        <C.Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
        </C.Nav>
        <C.NavFooter>
          <Sidebar />
        </C.NavFooter>
        <C.Content>
        <SpaceHeader/>
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
      </C.Content>
      {openImage && (
        <OpenImage
          src={openImage.src}
          alt={openImage.description}
          background="#8aa61e"
          description={openImage.description}
          onClose={() => setOpenImage(null)} // Fecha a visualização da imagem
        />
      )}
    </C.View>

    );
  };
  
  export default ImageView;