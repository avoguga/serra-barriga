import './style.css/';
import logo from '../../assets/app_serra.svg';
import setaEsquerda from '../../assets/set_esquerda.svg';
import setaDireita from '../../assets/set_direita.svg';

const SerraDaBarriga = () => {
  return (
    <div>
      <img src={logo} className="logoStyle"/>
      <p><strong>Serra da Barriga</strong> está localizada no atual município de União dos Palmares, no estado de Alagoas. À época do Quilombo dos Palmares, fazia parte da Capitania de Pernambuco. Foi tombada pelo Instituro do Patrimônio Histórico e Artístico Nacional em 1986.</p>
      <div>fotos</div>
      <button><img src={setaEsquerda}/></button>
      <button><img src={setaDireita}/></button>
      <div>vídeos</div>
      <button><img src={setaEsquerda}/></button>
      <button><img src={setaDireita}/></button>
    </div>
    );
};

export default SerraDaBarriga;
