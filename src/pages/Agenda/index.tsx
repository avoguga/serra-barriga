import { useEffect, useState } from 'react';
import { useOutlet, useNavigate, Outlet } from 'react-router-dom';

import {
  agenda,
  Evento,
  getEventosPorMes,
  MesAgenda,
} from '../../helpers/agenda';

import FloatingButtonBar from '../../components/FloatingContainer';
import Arrow from '../../components/ArrowButton';
import * as C from './styles';
import Header from '../../components/Header';

const Agenda = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();

  const [mesSelecionado, setMesSelecionado] = useState<string>(agenda[0].mes);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null);

  const handleLeftClick = () => {
    console.log('Clicou na seta esquerda');
    setActiveArrow('left');
  };

  const handleRightClick = () => {
    console.log('Clicou na seta direita');
    setActiveArrow('right');
  };

  useEffect(() => {
    setEventos(getEventosPorMes(mesSelecionado));
  }, [mesSelecionado]);

  const goToAgenda = (EventId: number) => {
    navigate(`/agenda/${EventId}`);
  };
  if (outlet) {
    return <div>{outlet}</div>;
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMesSelecionado(event.target.value);
  };

  return (
    <C.PageContainer>
      <FloatingButtonBar backgroundColor="#026660" />
      <Header />
      <C.SelectContainer>
        <h2>CONFIRA A AGENDA</h2>
        <C.MonthContainer>
          <C.MonthSelector value={mesSelecionado} onChange={handleMonthChange}>
            {agenda.map((mesAgenda: MesAgenda) => (
              <option key={mesAgenda.mes} value={mesAgenda.mes}>
                <span>{mesAgenda.mes}</span>
              </option>
            ))}
          </C.MonthSelector>
        </C.MonthContainer>
      </C.SelectContainer>
      <C.EventContainer>
        {eventos.map((event) => (
          <C.EventCard key={event.id}>
            <C.EventTitle>{event.titulo}</C.EventTitle>
            <C.EventDateTime>{`${event.data} às ${event.hora}`}</C.EventDateTime>
            <C.ButtonCard>
              <C.MoreButton onClick={() => goToAgenda(event.id)}>
                {' '}
                SAIBA MAIS
              </C.MoreButton>
            </C.ButtonCard>
          </C.EventCard>
        ))}
      </C.EventContainer>
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
      <Outlet />
    </C.PageContainer>
  );
};

export default Agenda;
