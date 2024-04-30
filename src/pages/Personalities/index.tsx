
import { useNavigate, useOutlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import {
  PersonalityType,
  personalities,
} from '../../helpers/personalitiesData';

import seta from '../../assets/seta voltar e abaixo - branco.svg';
import * as C from './styles';



const Personalities = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
 
  



  const goToPersonality = (personalityName: string) => {
    navigate(`/takehome/personalities/${personalityName}`);
  };
  if (outlet) {
    return <div>{outlet}</div>;
  } 

  return (
    <C.PageContainer>
      <C.BackButton
            onClick={() => {
              navigate('/takehome');
            }}
          >
            <img src={seta} alt="" />
          </C.BackButton>
      <C.MainContainer>
        <img
          src={logo}
          alt="logo serra da barriga"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '100px',
            marginBottom: '30px',
          }}
        />
        <C.PageHeader>
          <C.HeaderContent>
            <img
              src={PersonalitiesSvg}
              alt="personalitieIcon"
              style={{
                width: '38px',
                height: '55px',
              }}
            />
            <h3>PERSONALIDADES</h3>
          </C.HeaderContent>
        </C.PageHeader>

        <C.PersonalitiesGrid>
          {personalities.map((personality: PersonalityType) => (
            <C.PersonalityCard key={personality.name}>
              <img
                src={personality.image}
                loading='lazy'
                alt={personality.name}
                onClick={() => goToPersonality(personality.name)}
              />
            </C.PersonalityCard>
          ))}
        </C.PersonalitiesGrid>

    
      </C.MainContainer>
    </C.PageContainer>
  );
};

export default Personalities;
