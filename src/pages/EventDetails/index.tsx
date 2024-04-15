import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import * as C from './styles';
import Header from '../../components/Header';
import {format} from 'date-fns'

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
  const { eventId } = useParams<{ eventId?: string }>(); // Garanta que o useParams reflita o tipo correto
  const [evento, setEvento] = useState<EventoProps | null>(null); // O estado deve ser inicializado como null
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Certifique-se de que o ID do evento esteja presente antes de fazer a chamada da API
    if (eventId) {
      axios.get(`http://localhost:1337/api/agendas/${eventId}`)
        .then(response => {
          const eventoData: EventoProps = {
            id: response.data.data.id,
            Title: response.data.data.attributes.Title,
            Month: response.data.data.attributes.Month,
            DescriptionPT: response.data.data.attributes.DescriptionPT,
            DescriptionEN: response.data.data.attributes.DescriptionEN,
            Span: response.data.data.attributes.Span,

            Data: new Date(response.data.data.attributes.Data),
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
    return <div style={{ backgroundColor: '#009289', height: '100vh'}}>Carregando...</div>;
  }

  return (
    <C.Container>
      <Header />
      <C.DetalhesContainer>
        <C.TituloEvento>{evento.Title}</C.TituloEvento>
        <C.DataHoraEvento>
          <h2>
          {format(evento.Data, 'dd/MM \'às\' HH\'h\'')}

          </h2>
        </C.DataHoraEvento>
        <C.DescricaoEvento>{evento.DescriptionPT} </C.DescricaoEvento>
        <C.TituloSecaoEvento> {evento.Span} </C.TituloSecaoEvento>
        <C.DescricaoEvento>
          <span>{evento.DescriptionEN}</span>
        </C.DescricaoEvento>
      </C.DetalhesContainer>
    </C.Container>
  );
};

export default EventDetails;
