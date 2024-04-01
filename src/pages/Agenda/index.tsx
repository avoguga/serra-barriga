import { useEffect, useState, useRef } from 'react';
import { useOutlet, useNavigate, Outlet } from 'react-router-dom';
import ArrowDownIcon from '../../assets/icons/seta baixo.svg'

import axios from 'axios';
import {format} from 'date-fns'



import FloatingButtonBar from '../../components/FloatingContainer';

import * as C from './styles';
import Header from '../../components/Header';


interface EventoProps {
  id: number;
  Title: string;
  Month: string;
  DescriptionPT: string;
  Data: Date;
}

const Agenda = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const eventContainerRef = useRef<HTMLDivElement>(null);

  const mesAtual = new Date().toLocaleString('en-US', { month: 'long' });
  const [mesSelecionado, setMesSelecionado] = useState<string>(mesAtual);
  const [eventos, setEventos] = useState<EventoProps[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const [eventosFiltrados, setEventosFiltrados] = useState<EventoProps[]>([]);


  

  useEffect(() => {
    axios.get("http://localhost:1337/api/agendas")
      .then(response => {
     
        if (Array.isArray(response.data.data)) {
         
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const eventosMapeados: EventoProps[] = response.data.data.map((evento: any ) => ({
            id: evento.id,
            Title: evento.attributes.Title,
            Month: evento.attributes.Month,
            DescriptionPT: evento.attributes.DescriptionPT, // Use `DescriptionEN` conforme necessário
            Data: new Date(evento.attributes.Data), // Certifique-se de converter para um objeto Date, se necessário
          }));
          console.log(error);
          
          setEventos(eventosMapeados);
          const eventosDoMesAtual = eventosMapeados.filter(evento => evento.Month.toLowerCase() === mesAtual.toLowerCase());
          setEventosFiltrados(eventosDoMesAtual);
          if (eventosDoMesAtual.length > 0 && !mesSelecionado) {
            setMesSelecionado(eventosDoMesAtual[0].Month);
          }
        } else {
          console.error("Formato de dados inesperado:", response.data);
        }
      })
      .catch(error => {
        setError((error));
        console.error("Erro ao buscar eventos:", error);
      });
  }, [error, mesAtual, mesSelecionado]);

  useEffect(()=> {
    const eventosFiltrados = eventos.filter(evento => evento.Month === mesSelecionado);
     setEventosFiltrados(eventosFiltrados);
   
   }, [mesSelecionado, eventos]);
  
  
  const handleDownClick = () => {
    
    setIsActive(!isActive)
    if(eventContainerRef.current) {
      eventContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 // useEffect(() => {
  //  setEventos(getEventosPorMes(mesSelecionado));
  //}, [mesSelecionado]);

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
            {eventos.map((month) => (
              <option key={month.id} value={month.Month}>
                <span>{month.Month}</span>
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


