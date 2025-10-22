export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  hora: string;
  local: string;
  categoria: string;
  palestrantes: string[];
  vagasDisponiveis: number;
  imagem: string;
}

export interface Filtros {
  categoria: string;
  data: string;
  busca: string;
}
