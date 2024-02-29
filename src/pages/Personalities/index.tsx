import { useState } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';

import logo from '../../assets/logo.png';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import {
  PersonalityType,
  personalities,
} from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';
import FloatingButtonBar from '../../components/FloatingContainer';
import * as C from './styles';



const Personalities = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null);
  const handleLeftClick = () => {
    console.log('Clicou na seta esquerda');
    setActiveArrow('left');
  };

  const handleRightClick = () => {
    console.log('Clicou na seta direita');
    setActiveArrow('right');
  };

  const goToPersonality = (personalityName: string) => {
    navigate(`/personalities/${personalityName}`);
  };
  if (outlet) {
    return <div>{outlet}</div>;
  }

  return (
    <C.PageContainer>
      <FloatingButtonBar backgroundColor="#8C111B" />
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
                alt={personality.name}
                onClick={() => goToPersonality(personality.name)}
              />
            </C.PersonalityCard>
          ))}
        </C.PersonalitiesGrid>

        <C.ArrowContainer>
          <Arrow
            direction="left"
            onClick={handleLeftClick}
            isActive={activeArrow === 'left'}
          />
          <Arrow
            direction="right"
            onClick={handleRightClick}
            isActive={activeArrow === 'right'}
          />
        </C.ArrowContainer>
      </C.MainContainer>
    </C.PageContainer>
  );
};

export default Personalities;
