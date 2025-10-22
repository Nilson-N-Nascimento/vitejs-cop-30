import type { Evento } from '../types';

// Simulação de API - Em produção, seria uma chamada HTTP real
const eventosData: Evento[] = [
  {
    id: 1,
    titulo: 'Abertura Oficial COP-30',
    descricao: 'Cerimônia de abertura da 30ª Conferência das Partes sobre Mudanças Climáticas em Belém do Pará.',
    data: '2025-11-10',
    hora: '09:00',
    local: 'Centro de Convenções Hangar',
    categoria: 'Cerimônia',
    palestrantes: ['Presidente da COP-30', 'Ministro do Meio Ambiente'],
    vagasDisponiveis: 500,
    imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  },
  {
    id: 2,
    titulo: 'Painel: Amazônia e Clima',
    descricao: 'Discussão sobre o papel da Amazônia nas mudanças climáticas globais e estratégias de preservação.',
    data: '2025-11-11',
    hora: '14:00',
    local: 'Auditório Principal',
    categoria: 'Painel',
    palestrantes: ['Dr. Carlos Nobre', 'Dra. Mercedes Bustamante', 'Dr. Paulo Artaxo'],
    vagasDisponiveis: 200,
    imagem: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800'
  },
  {
    id: 3,
    titulo: 'Workshop: Energias Renováveis',
    descricao: 'Hands-on sobre tecnologias de energia solar e eólica aplicadas à Amazônia.',
    data: '2025-11-12',
    hora: '10:00',
    local: 'Sala de Workshops',
    categoria: 'Workshop',
    palestrantes: ['Eng. Ana Silva', 'Eng. Roberto Santos'],
    vagasDisponiveis: 50,
    imagem: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'
  },
  {
    id: 4,
    titulo: 'Mesa Redonda: Povos Indígenas',
    descricao: 'Diálogo sobre conhecimentos tradicionais e sua importância para a preservação ambiental.',
    data: '2025-11-13',
    hora: '15:30',
    local: 'Espaço Cultural',
    categoria: 'Mesa Redonda',
    palestrantes: ['Cacique Raoni', 'Sônia Guajajara', 'Ailton Krenak'],
    vagasDisponiveis: 150,
    imagem: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
  },
  {
    id: 5,
    titulo: 'Palestra: Economia Verde',
    descricao: 'Como construir uma economia sustentável que preserve a floresta amazônica.',
    data: '2025-11-14',
    hora: '11:00',
    local: 'Auditório B',
    categoria: 'Palestra',
    palestrantes: ['Prof. Eduardo Brondizio', 'Dra. Virgílio Viana'],
    vagasDisponiveis: 180,
    imagem: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800'
  },
  {
    id: 6,
    titulo: 'Expo: Tecnologias Verdes',
    descricao: 'Exposição de inovações tecnológicas para sustentabilidade e preservação ambiental.',
    data: '2025-11-15',
    hora: '09:00',
    local: 'Hall de Exposições',
    categoria: 'Exposição',
    palestrantes: ['Diversos Expositores'],
    vagasDisponiveis: 300,
    imagem: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800'
  }
];

export const eventosService = {
  // Simula um delay de rede
  async getEventos(): Promise<Evento[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...eventosData]);
      }, 500);
    });
  },

  async getEventoPorId(id: number): Promise<Evento | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evento = eventosData.find(e => e.id === id);
        resolve(evento);
      }, 300);
    });
  },

  async filtrarEventos(categoria?: string, data?: string, busca?: string): Promise<Evento[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let resultado = [...eventosData];

        if (categoria && categoria !== 'todas') {
          resultado = resultado.filter(e => e.categoria === categoria);
        }

        if (data) {
          resultado = resultado.filter(e => e.data === data);
        }

        if (busca) {
          const termo = busca.toLowerCase();
          resultado = resultado.filter(e =>
            e.titulo.toLowerCase().includes(termo) ||
            e.descricao.toLowerCase().includes(termo) ||
            e.local.toLowerCase().includes(termo)
          );
        }

        resolve(resultado);
      }, 400);
    });
  }
};
