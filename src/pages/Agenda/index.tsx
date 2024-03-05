import { useEffect, useState, useRef } from 'react';
import { useOutlet, useNavigate, Outlet } from 'react-router-dom';
import ArrowDownIcon from '../../assets/icons/seta baixo.svg'

import {
  agenda,
  Evento,
  getEventosPorMes,
  MesAgenda,
} from '../../helpers/agenda';

import FloatingButtonBar from '../../components/FloatingContainer';

import * as C from './styles';
import Header from '../../components/Header';

const Agenda = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const eventContainerRef = useRef<HTMLDivElement>(null);

  const [mesSelecionado, setMesSelecionado] = useState<string>(agenda[0].mes);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [isActive, setIsActive] = useState(false);
  

  
  const handleDownClick = () => {
    
    setIsActive(!isActive)
    if(eventContainerRef.current) {
      eventContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
      <C.EventContainer ref={eventContainerRef}>
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
        <div onClick={handleDownClick} >
        <img src={ArrowDownIcon} alt="seta"  width={30} height={41}  />

        </div>
      </C.ArrowContainer>
      <Outlet />
    </C.PageContainer>
  );
};

export default Agenda;
