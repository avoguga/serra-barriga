import { useEffect, useState, useRef } from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

import FloatingButtonBar from '../../components/FloatingContainer';
import Header from '../../components/Header';
import ArrowDownIcon from '../../assets/icons/seta baixo.svg';
import * as C from './styles';

interface EventoProps {
  id: number;
  Title: string;
 Mes: string;
  DescriptionPT: string;
  Data: Date;
}

const Agenda = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const eventContainerRef = useRef<HTMLDivElement>(null);

  const mesAtual =  new Date().toLocaleString('pt-BR', { month: 'long' }).toLowerCase();
  const [mesSelecionado, setMesSelecionado] = useState<string>(mesAtual);
  const [eventos, setEventos] = useState<EventoProps[]>([]);
  const [eventosFiltrados, setEventosFiltrados] = useState<EventoProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/agendas")
      .then(response => {
        console.log(response.data);
        
        const eventosMapeados: EventoProps[] = response.data.data.map((evento: any) => ({
          id: evento.id,
          Title: evento.attributes.Title,
         Mes: evento.attributes.Mes.toLowerCase(),
          DescriptionPT: evento.attributes.DescriptionPT,
          Data: new Date(evento.attributes.Data),
          
        }));

        setEventos(eventosMapeados);
      })
      .catch(error => {
        console.error("Erro ao buscar eventos:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Mês Selecionado para Filtragem:", mesSelecionado); // Verifique o mês selecionado
    const eventosDoMesSelecionado = eventos.filter(evento => evento.Mes === mesSelecionado);
    console.log("Eventos Filtrados:", eventosDoMesSelecionado); // Verifique os eventos após filtragem
    setEventosFiltrados(eventosDoMesSelecionado);
  }, [mesSelecionado, eventos]);

  const handleDownClick = () => {
    if (eventContainerRef.current) {
      eventContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMesSelecionado(event.target.value.toLowerCase());
  };

  const goToAgenda = (EventId: number) => {
    navigate(`/agenda/${EventId}`);
  };

  if (outlet) {
    return <div>{outlet}</div>;
  }
  return (
    <C.PageContainer>
      <FloatingButtonBar backgroundColor="#026660" backBgColor='#003431' />
      <Header />
      <C.SelectContainer>
        <h2>CONFIRA A AGENDA</h2>
        <C.MonthContainer>
          <C.MonthSelector value={mesSelecionado} onChange={handleMonthChange}>
            {eventos.map((month) => (
              <option key={month.id} value={month.Mes}>
                <span>{month.Mes}</span>
              </option>
            ))}
          </C.MonthSelector>
        </C.MonthContainer>
      </C.SelectContainer>
      <C.EventContainer ref={eventContainerRef}>
  {eventosFiltrados.length > 0 ? (
    eventosFiltrados.map((event) => (
      <C.EventCard key={event.id}>
        <C.EventTitle>{event.Title}</C.EventTitle>
        <C.EventDateTime>{format(event.Data, 'dd/MM \'às\' HH\'h\'')}</C.EventDateTime>
        <C.ButtonCard>
          <C.MoreButton onClick={() => goToAgenda(event.id)}>
            SAIBA MAIS
          </C.MoreButton>
        </C.ButtonCard>
      </C.EventCard>
    ))
  ) : (
    <p>Nenhum evento disponível para este mês.</p> 
  )}
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


