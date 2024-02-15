import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FloatingButtonBar from '../../components/FloatingContainer';
import appSerra from '../../assets/icons/app serra.svg';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { personalities } from '../../types/personalitiesData';

const Container = styled.div`
  display: flex;
  background: #b21522;
  height: 150vh;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 60px;
  background: #8c111b;
  width: auto;
  border-radius: 35px;

  text-transform: uppercase;
  color: #ffffff;

  margin-top: 18px;
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
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PersonalityImage = styled.img`
  max-width: 65%;
  border-radius: 10px;
  margin-top: 30px;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-family: 'FuturaPTBold', sans-serif;
  font-size: 20px;
  margin-top: 15px;
`;

const Description = styled.p`
  color: #ffffff;
  text-align: left;
  font-family: 'FuturaPTBook', sans-serif;
  font-size: 19px;
  max-width: 80%;
  opacity: 1;
  margin-top: 15px;
  cursor: pointer;
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #e5dfae;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;
  font-family: 'FuturaPTBold', sans-serif;
`;

const PersonalityPage = () => {
  const { personalityName } = useParams<{ personalityName: string }>();
  const personality = personalities.find((p) => p.name === personalityName);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
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
                height: 'auto',
              }}
            />
            <h3>PERSONALIDADES</h3>
          </HeaderContent>
        </PageHeader>
        {personality ? (
          <>
            <PersonalityImage src={personality.image} alt={personality.name} />
            <Title>{personality.name}</Title>
            <Description onClick={toggleIsExpanded}>
              {isExpanded
                ? personality.description.pt
                : `${personality.description.pt.substring(0, 400)}...`}
            </Description>
            <ReadMoreButton onClick={toggleIsExpanded}>
              {isExpanded ? 'LEIA MENOS' : 'LEIA MAIS'}
            </ReadMoreButton>
          </>
        ) : (
          <p>Personalidade não encontrada.</p>
        )}
      </MainContainer>
    </Container>
  );
};

export default PersonalityPage;
