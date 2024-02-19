import React from 'react';
import { useParams } from 'react-router-dom';
import { agenda } from '../../helpers/agenda';

import * as C from './styles';
import Header from '../../components/Header';

const EventDetails = () => {
  const { eventId } = useParams();

  const evento = agenda
    .flatMap((mesAgenda) => mesAgenda.eventos)
    .find((e) => e.id.toString() === eventId);

  if (!evento) {
    return <div>Evento não encontrado</div>;
  }

  return (
    <C.Container>
      <Header />
      <C.DetalhesContainer>
        <C.TituloEvento>{evento.titulo}</C.TituloEvento>

        <C.DataHoraEvento>
          {' '}
          <h2>
            {evento.data} às {evento.hora}
          </h2>{' '}
        </C.DataHoraEvento>
        <C.DescricaoEvento>{evento.descricao.pt}</C.DescricaoEvento>
<C.TituloSecaoEvento>ACAIUBA´S LOOKOUT </C.TituloSecaoEvento>
       
          <C.DescricaoEvento>{evento.descricao.en}</C.DescricaoEvento>
        
      </C.DetalhesContainer>
    </C.Container>
  );
};

export default EventDetails;
