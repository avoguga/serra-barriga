import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import * as C from './styles';
import Header from '../../components/Header';

interface EventoProps {
  id: number;
  Title: string;
  Month: string;
  DescriptionPT: string;
  DescriptionEN: string;
  Span: string;
  Data: Date;
}

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Captura o ID do evento da URL
  const [evento, setEvento] = useState<EventoProps | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (eventId) {
      axios.get(`https://serra-gestor.vercel.app/api/agendas/${eventId}`) // Ajuste no endpoint para pegar evento específico
        .then(response => {
          const { data } = response;
          if (!data) {
            throw new Error('Evento não encontrado');
          }
          const eventoData: EventoProps = {
            id: data.id,
            Title: data.Title,
            Month: data.Month,
            DescriptionPT: data.DescriptionPT,
            DescriptionEN: data.DescriptionEN || '', // Supondo que pode não existir
            Span: data.Span || '', // Supondo que pode não existir
            Data: new Date(data.Data)
          };
          setEvento(eventoData);
        })
        .catch(err => {
          setError('Evento não encontrado');
          console.error('Erro ao buscar detalhes do evento:', err);
        });
    }
  }, [eventId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!evento) {
    return <div style={{ backgroundColor: '#009289', height: '100vh' }}>Carregando...</div>;
  }

  const formattedDate = evento.Data ? format(evento.Data, 'dd/MM \'às\' HH\'h\'') : 'Data indisponível';

  return (
    <C.Container>
      <Header />
      <C.DetalhesContainer>
        <C.TituloEvento>{evento.Title}</C.TituloEvento>
        <C.DataHoraEvento>
          <h2>{formattedDate}</h2>
        </C.DataHoraEvento>
        <C.DescricaoEvento>{evento.DescriptionPT}</C.DescricaoEvento>
        <C.TituloSecaoEvento>{evento.Span}</C.TituloSecaoEvento>
        <C.DescricaoEvento>
          <span>{evento.DescriptionEN}</span>
        </C.DescricaoEvento>
      </C.DetalhesContainer>
    </C.Container>
  );
};

export default EventDetails;
