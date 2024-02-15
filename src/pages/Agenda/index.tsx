import styled from 'styled-components';
import appSerra from '../../assets/logo.png';
import AgendaSvg from '../../assets/icons/audio.svg';
import {
  agenda,
  Evento,
  getEventosPorMes,
  MesAgenda,
} from '../../helpers/agenda';

import FloatingButtonBar from '../../components/FloatingContainer';
import { useEffect, useState } from 'react';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #009289;
  height: 150vh;
  justify-content: baseline;
  align-items: center;
  padding: 9rem 1rem;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 4.3rem;
  background: #026660;
  width: 100%;
  border-radius: 35px;

  text-transform: uppercase;
  color: #ffffff;

  padding: 0 20px;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  font-family: 'Futura PT', sans-serif;
  font-size: 14px;
  opacity: 1;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  > h2 {
    font-family: 'Futura PT', sans-serif;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

const MonthSelector = styled.select`
  width: 215px;
  height: 35px;
`;
const EventContainer = styled.div`
  display: flex;

  flex-direction: row;
  overflow-x: auto;
  margin: 0 -1rem 0 2.55rem; // Ajuste a margem negativa com base no padding do seu PageContainer
  padding: 1rem;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  min-width: 80%;
  height: 12rem;
`;

const EventTitle = styled.h4`
  color: #333;
  margin-bottom: 0.5rem;
`;
const EventDateTime = styled.p`
  color: #3f3f3f;
  margin-bottom: 1rem;
`;
const MoreButton = styled.button`
  background-color: transparent;
  color: #3f3f3f;
  border: 2px solid #707070;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  text-align: center;
  width: 75%;
  transition: background-color 0.3s ease;
  justify-content: center;
`;
const ButtonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Agenda = () => {
  const [mesSelecionado, setMesSelecionado] = useState<string>(agenda[0].mes);
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    setEventos(getEventosPorMes(mesSelecionado));
  }, [mesSelecionado]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMesSelecionado(event.target.value);
  };

  return (
    <PageContainer>
      <FloatingButtonBar backgroundColor="#026660" />
      <MainContainer>
        <img
          src={appSerra}
          alt="app Serra da Barriga"
          style={{
            width: '200px',
            height: '70px',

            marginBottom: '30px',
          }}
        />
        <PageHeader>
          <HeaderContent>
            <img
              src={AgendaSvg}
              alt="AgendaIcon"
              style={{
                width: '38px',
                height: '55px',
              }}
            />
            <h3>AGENDA</h3>
          </HeaderContent>
        </PageHeader>
      </MainContainer>
      <SelectContainer>
        <h2>CONFIRA A AGENDA</h2>
        <MonthSelector value={mesSelecionado} onChange={handleMonthChange}>
          {agenda.map((mesAgenda: MesAgenda) => (
            <option key={mesAgenda.mes} value={mesAgenda.mes}>
              {mesAgenda.mes}
            </option>
          ))}
        </MonthSelector>
      </SelectContainer>
      <EventContainer>
        {eventos.map((evento) => (
          <EventCard key={evento.id}>
            <EventTitle>{evento.titulo}</EventTitle>
            <EventDateTime>{`${evento.data} às ${evento.hora}`}</EventDateTime>
            <ButtonCard>
              <MoreButton>SAIBA MAIS</MoreButton>
            </ButtonCard>
          </EventCard>
        ))}
      </EventContainer>
    </PageContainer>
  );
};

export default Agenda;
