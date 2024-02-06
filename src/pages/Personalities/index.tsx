import appSerra from '../../assets/app serra.svg';
import PersonalitiesSvg from '../../assets/personalidade - branco.svg';
import Carousel from '../../components/Carousel';
import useCarousel from '../../components/Carousel/hooks/useCarousel';
import FloatingButtonBar from '../../components/FloatingContainer';
import { PersonalityType, personalities } from '../../types/personalitiesData';
import {
  HeaderContent,
  MainContainer,
  PageContainer,
  PageHeader,
  PersonalityCard,
} from './styles';

const Personalities = () => {
  const { currentItems, hasNextPage, hasPrevPage, nextPage, prevPage } =
    useCarousel<PersonalityType>({
      itemHeight: 128,
      items: personalities,
    });

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
            marginTop: 24,
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

        <Carousel
          leftArrowActive={hasPrevPage}
          rightArrowActive={hasNextPage}
          onClickNextPage={nextPage}
          onClickPreviousPage={prevPage}
          renderItems={currentItems.map((personality: PersonalityType) => (
            <PersonalityCard key={personality.name}>
              <img src={personality.image} alt={personality.name} />
            </PersonalityCard>
          ))}
        />
      </MainContainer>
    </PageContainer>
  );
};

export default Personalities;
