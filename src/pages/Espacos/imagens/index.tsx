import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LowArrow from "../../../components/LowArrowButton";
import { EspacoData, getEspacoData } from "../../../helpers/Espacos";
import Sidebar from "../Sidebar";

import * as C from './styles'
import img from '../../../assets/icons/i_imagem pagina.png';
import OpenImage from "../../../components/OpenImage";
import SpaceHeader from "../../../components/SpaceHeader";

const ImageView = () => {
  const navigate = useNavigate();
  const { figureName } = useParams<{ figureName: string }>();
  const [openImage, setOpenImage] = useState<{
    images: { src: string; description: string }[];
    initialIndex?: number;
  } | null>(null);

  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 

  if (!figureData) {
    return <p>Espaço não encontrado.</p>;
  }

  const imagesWithDescriptions = figureData.images || [];

  return (
    <C.View>
      <C.Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
      </C.Nav>
      <C.NavFooter>
        <Sidebar activeSection="ImageView" />
      </C.NavFooter>
      <C.Content>
        <SpaceHeader />
        <C.ImgText>
          <img
            src={img} 
            alt="ícone de imagens"
            style={{ width: '35px', height: '35px', marginLeft:'5px' }}
          />
          <h3>Imagens</h3>
        </C.ImgText>
        <C.AgroupImg>
          {imagesWithDescriptions.length > 0 ? (
            imagesWithDescriptions.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.description}
                onClick={() => setOpenImage({
                  images: imagesWithDescriptions,
                  initialIndex: index
                })}
                style={{ cursor: 'pointer' }} // Indica que é clicável
              />
            ))
          ) : (
            <p>Nenhuma imagem disponível.</p>
          )}
        </C.AgroupImg>
      </C.Content>
      {openImage && (
        <OpenImage
          images={openImage.images}
          alt={`Imagem do espaço ${figureData.title}`}
          background="#8aa61e"
          onClose={() => setOpenImage(null)} // Fecha a visualização da imagem
          initialIndex={openImage.initialIndex}
        />
      )}
    </C.View>
  );
};

export default ImageView;
