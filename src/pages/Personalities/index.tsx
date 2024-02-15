import { useState } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';
import styled from 'styled-components';
import appSerra from '../../assets/app_serra.svg';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { PersonalityType, personalities } from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';
import FloatingButtonBar from '../../components/FloatingContainer';

const PageContainer = styled.div`
  display: flex;
  background: #b21522;
  height: 100vh;
  justify-content: center;
  align-items: baseline;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 60px;
  background: #8c111b;
  width: 70%;
  border-radius: 35px;

  text-transform: uppercase;
  color: #ffffff;

  margin-top: 8px;

  padding: 0 20px;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: 'FuturaPTDemiOblique', sans-serif;
  font-size: 13px;
  opacity: 1;
`;

const PersonalitiesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 400px;
  gap: 5px;
  padding: 10px;
`;

const PersonalityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
  color: #ffffff;
  font-size: 14px;
  height: auto;
  overflow: hidden;
  margin-bottom: 2px;

  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
    object-position: center;
  }
`;

const ArrowContainer = styled.div`
  display: flex;

  flex-direction: row;

  left: 0;
  justify-content: space-between;
  width: 95%;
  margin-left: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <PageContainer>
      <FloatingButtonBar backgroundColor="#8C111B" />
      <MainContainer>
        <img
          src={appSerra}
          alt="app Serra da Barriga"
          style={{
            width: '100%',
            height: '90px',
            marginTop: '110px',
          }}
        />
        <PageHeader>
          <HeaderContent>
            <img
              src={PersonalitiesSvg}
              alt="personalitieIcon"
              style={{
                width: '38px',
                height: '55px',
              }}
            />
            <h3>PERSONALIDADES</h3>
          </HeaderContent>
        </PageHeader>

        <PersonalitiesGrid>
          {personalities.map((personality: PersonalityType) => (
            <PersonalityCard key={personality.name}>
              <img
                src={personality.image}
                alt={personality.name}
                onClick={() => goToPersonality(personality.name)}
              />
            </PersonalityCard>
          ))}
        </PersonalitiesGrid>

        <ArrowContainer>
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
        </ArrowContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default Personalities;
