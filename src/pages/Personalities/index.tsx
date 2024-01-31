import styled from 'styled-components';
import appSerra from '../../assets/app serra.svg';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { PersonalityType, personalities } from '../../types/personalitiesData';
import Arrow from '../../components/ArrowButton';
import { useState } from 'react';

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

  height: 69px;
  background: rgba(0, 0, 0, 0.3);
  width: 262px;
  border-radius: 35px;

  font-family: 'Kumbh Sans', sans-serif;
  text-transform: uppercase;
  color: #ffffff;

  font-size: 15px;
  margin-top: 5px;
  padding: 0 20px;
  margin-left: 50px;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const PersonalitiesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 400px;

  padding: 20px;
  gap: 15px;
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
  margin-bottom: 5px;

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
  top: 660px;
  left: 0;
  justify-content: space-between;
  width: 340px;
  margin-left: 10px;
`;

const Personalities = () => {
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null);
  const handleLeftClick = () => {
    console.log('Clicou na seta esquerda');
    setActiveArrow('left');
  };

  const handleRightClick = () => {
    console.log('Clicou na seta direita');
    setActiveArrow('right');
  };
  return (
    <PageContainer>
      <div>
        <img
          src={appSerra}
          alt="app Serra da Barriga"
          style={{
            width: '100%',
            height: '102px',
            marginTop: '65px',
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
            <h3>Personalidades</h3>
          </HeaderContent>
        </PageHeader>

        <PersonalitiesGrid>
          {personalities.map((personality: PersonalityType) => (
            <PersonalityCard key={personality.name}>
              <img src={personality.image} alt={personality.name} />
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
      </div>
    </PageContainer>
  );
};

export default Personalities;
