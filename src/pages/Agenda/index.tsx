import { useEffect, useState, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

import FloatingButtonBar from '../../components/FloatingContainer';
import HeaderC from '../../components/Header';
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
  const eventContainerRef = useRef<HTMLDivElement>(null);

  const mesAtual = new Date().toLocaleString('pt-BR', { month: 'long' }).toLowerCase();
  const [mesSelecionado, setMesSelecionado] = useState<string>(mesAtual);
  const [eventos, setEventos] = useState<EventoProps[]>([]);
  const [eventosFiltrados, setEventosFiltrados] = useState<EventoProps[]>([]);
  const [uniqueMonths, setUniqueMonths] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://serra-gestor.vercel.app/api/agendas/")
      .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const eventosMapeados: EventoProps[] = response.data.data.map((evento: any) => ({
          id: evento.id,
          Title: evento.Title,
          Mes: evento.Mes.toLowerCase(), // Assume que Mes é uma string diretamente acessível
          DescriptionPT: evento.DescriptionPT,
          Data: new Date(evento.Data),
        }));

        setEventos(eventosMapeados);
        setUniqueMonths([...new Set(eventosMapeados.map(evento => evento.Mes))]);
      })
      .catch(error => {
        console.error("Erro ao buscar eventos:", error);
      });
  }, []);

  useEffect(() => {
    const eventosDoMesSelecionado = eventos.filter(evento => evento.Mes.toLowerCase() === mesSelecionado);
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

  return (
    <C.PageContainer>
      <FloatingButtonBar backgroundColor="#026660" backBgColor='#003431' />
      <HeaderC />
      <C.SelectContainer>
        <h2>CONFIRA A AGENDA</h2>
        <C.MonthContainer>
          <C.MonthSelector value={mesSelecionado} onChange={handleMonthChange}>
            {uniqueMonths.map((month, index) => (
              <option key={index} value={month}>
                {month.charAt(0).toUpperCase() + month.slice(1)} {/* Capitalize the first letter */}
              </option>
            ))}
          </C.MonthSelector>
        </C.MonthContainer>
      </C.SelectContainer>
      <C.EventContainer ref={eventContainerRef}>
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map(event => (
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
        <div onClick={handleDownClick}>
          <img src={ArrowDownIcon} alt="seta para baixo" width={30} height={41} />
        </div>
      </C.ArrowContainer>
      <Outlet />
    </C.PageContainer>
  );
};

export default Agenda;
