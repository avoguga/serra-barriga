export type PersonalityType = {
  name: string;
  image: string;
};

// Importe as imagens usando a sintaxe ES6. Ajuste os caminhos conforme necessário.
import maeNeideImage from '../assets/mae-neide.webp';
import carolinaDeJesusImage from '../assets/carolina-de-jesus_1.webp';
import joaozinhoDaGomeiaImage from '../assets/joaozinho-da-gomeia.webp';
import lupicinioRodriguesImage from '../assets/lupicinio-rodrigues.webp';

export const personalities: PersonalityType[] = [
  { name: 'Mãe Neide', image: maeNeideImage },
  { name: 'Carolina de Jesus', image: carolinaDeJesusImage },
  { name: 'Joãozinho da Gomeia', image: joaozinhoDaGomeiaImage },
  { name: 'Lupicínio Rodrigues', image: lupicinioRodriguesImage },
];
