import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FloatingButtonBar from '../../components/FloatingContainer';
import appSerra from '../../assets/icons/app serra.svg';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import { personalities } from '../../helpers/personalitiesData';
import Arrow from '../../components/ArrowButton';

const Container = styled.div`
  display: flex;
  background: #b21522;
  height: 200vh;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  max-width: 485px;

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
  font-size: 15px;
  max-width: 80%;
  opacity: 1;
  margin-top: 15px;
  cursor: pointer;
  justify-content: center;
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

const ScrollContainer = styled.div`
   overflow-x: auto; 
  padding: 20px; 
  width: 100vw; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;
const InnerScrollContainer = styled.div`
  display: flex;
  gap: 10px; 
`;
const PhotoBox = styled.div`
 flex-shrink: 0;
  width: 08.43rem; 
  height:8.5rem; 
  background-color: ${(props) => props.color || '#EEE'}; 
  display: inline-flex;
  justify-content: center;
  align-items: center;

`;
const SubTitleContainer = styled.div`

font-family: 'FuturaPTDemi', sans-serif;
    color: #ffffff;
    font-size:10px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 50px;

`;

const VideoBox = styled.div`
  width: 18.3rem; 
  height:11rem; 
  background-color: ${(props) => props.color || '#EEE'}; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  
`;

const ArrowContainer = styled.div`
  display: flex;

  flex-direction: row;

  left: 0;
  justify-content: space-between;
  width: 95%;

`;


const PersonalityPage = () => {
  const { personalityName } = useParams<{ personalityName: string }>();
  const personality = personalities.find((p) => p.name === personalityName);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null);
  const handleLeftClick = () => {
    console.log('Clicou na seta esquerda');
    setActiveArrow('left');
  };

  const handleRightClick = () => {
    console.log('Clicou na seta direita');
    setActiveArrow('right');
  };


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
         <SubTitleContainer>
            <h2>FOTOS</h2>
            </SubTitleContainer>
        <ScrollContainer>
         
         <InnerScrollContainer>
         <PhotoBox color="#F48306"> {/* Conteúdo da foto 1 */} </PhotoBox>
        <PhotoBox color="#D6C75C"> {/* Conteúdo da foto 2 */} </PhotoBox>
        <PhotoBox color="#93B293"> {/* Conteúdo da foto 2 */} </PhotoBox>
      

         </InnerScrollContainer>
       
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
        
          
         
         

        
        </ScrollContainer>
        <SubTitleContainer>
            <h2>VIDEOS</h2>
            </SubTitleContainer>
         
        
       
        <VideoBox color="#FFF"> {/* Conteúdo do vídeo */} </VideoBox>
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
    </Container>
  );
};

export default PersonalityPage;
