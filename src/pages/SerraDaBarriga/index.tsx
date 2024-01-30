import './style.css/';
import logo from '../../assets/app_serra.svg';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';
import video from '../../assets/teste_video.mp4'
import teste1 from '../../assets/teste1.jpg';
import teste2 from '../../assets/teste2.jpg';
import teste3 from '../../assets/teste3.jpg';
import teste4 from '../../assets/teste4.jpg';
import teste5 from '../../assets/teste5.jpg';
import teste6 from '../../assets/teste6.jpg';



const SerraDaBarriga = () => {
  const images = [
    {src: teste1},
    {src: teste2},
    {src: teste3},
    {src: teste4},
    {src: teste5},
    {src: teste6}
  ];

  return (
    <div className='container'>
      <img src={logo} className="logoStyle"/>
      <div className='text'>
        <strong>Serra da Barriga</strong> está localizada no atual município de União dos Palmares, no estado de Alagoas. À época do Quilombo dos Palmares, fazia parte da Capitania de Pernambuco. Foi tombada pelo Instituto do Patrimônio Histórico e Artístico Nacional em 1986.
      </div>
      <div className='title'>FOTOS</div>
      <div className='carrosel'>
        {images.map((image, index) => (
          <img key={index} src={image.src} className='image'/>
        ))}
      </div>
      <div className="btnSeta">
      <button><img src={setaEsquerda}/></button>
      <button><img src={setaDireita}/></button>
      </div>
      <div className='title'>VÍDEOS</div>
      <iframe src="https://www.youtube.com/embed/USLC-TsQdnI" title="Memórias de luta na Serra da Barriga" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
      <div className="btnSeta">
      <button><img src={setaEsquerda}/></button>
      <button><img src={setaDireita}/></button>
      </div>
    </div>
    );
};

export default SerraDaBarriga;
