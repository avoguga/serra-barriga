import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';
import Header from '../../components/Header';
import { formatDate } from '../../helpers/DataHelpers';


interface EventoProps {
  id: number;
  Title: string;
  Month: string;
  DescriptionPT: string;
  DescriptionEN: string;
  Span: string;
  Data: string;  
}

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [evento, setEvento] = useState<EventoProps | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (eventId) {
      axios.get(`https://serra-gestor.vercel.app/api/eventos/${eventId}`)
        .then(response => {
          const { data } = response;
          console.log(response.data);
          
          if (!data) {
            throw new Error('Evento não encontrado');
          }
          const eventoData: EventoProps = {
            id: data.id,
            Title: data.Title,
            Month: data.Mes,
            DescriptionPT: data.DescriptionPT,
            DescriptionEN: data.DescriptionEN || '',
            Span: data.Span || '',
            Data: data.Data  
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
    return <div style={{  height: '100vh',background: '#009289' }}>Carregando...</div>;
  }

  return (
    <C.Container>
      <Header />
  
      <C.DetalhesContainer>
        <C.TituloEvento>{evento.Title}</C.TituloEvento>
        <C.DataHoraEvento>
          <h2>{formatDate(evento.Data)} </h2>
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
