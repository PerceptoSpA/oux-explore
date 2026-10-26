export interface TeamMember {
  name: string;
  image: string;
  imageAlt: string;
  area: 'geology' | 'drilling' | 'geophysics' | 'management';
  hideImage?: boolean;
  hideRole?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jorge Sances',
    image: `${__BASE_PATH__}images/equipo/jorge-sances.webp`,
    imageAlt: 'Foto de Jorge Sances',
    area: 'management',
  },
  {
    name: 'José Astudillo',
    image: `${__BASE_PATH__}images/equipo/jose-pablo-astudillo.webp`,
    imageAlt: 'Foto de José Astudillo',
    area: 'geology',
  },
  {
    name: 'Diego Peralta',
    image: `${__BASE_PATH__}images/equipo/diego-peralta.webp`,
    imageAlt: 'Foto de Diego Peralta',
    area: 'drilling',
  },
  {
    name: 'Felipe Campos',
    image: `${__BASE_PATH__}images/equipo/felipe-campos.webp`,
    imageAlt: 'Foto de Felipe Campos',
    area: 'geophysics',
  },
  {
    name: 'Gonzalo Peterli',
    image: `${__BASE_PATH__}images/equipo/gonzalo-peterli.webp`,
    imageAlt: 'Foto de Gonzalo Peterli',
    area: 'geology',
  },
  {
    name: 'Pablo Mercado',
    image: `${__BASE_PATH__}images/equipo/pablo-mercado.webp`,
    imageAlt: 'Foto de Pablo Mercado',
    area: 'geology',
  },
  {
    name: 'Rafael Correa',
    image: `${__BASE_PATH__}images/equipo/rafael-correa.webp`,
    imageAlt: 'Foto de Rafael Correa',
    area: 'geology',
  },
  {
    name: 'Felipe Aguilera',
    image: `${__BASE_PATH__}images/equipo/felipe-aguilera.webp`,
    imageAlt: 'Foto de Felipe Aguilera',
    area: 'geology',
  },
];

export const areaColors = {
  geology: 'bg-emerald-400',
  drilling: 'bg-orange-300',
  geophysics: 'bg-teal-700',
  management: 'bg-orange-300',
};

export const areaLabels = {
  geology: 'Geology',
  drilling: 'Drilling',
  geophysics: 'Geophysics',
  management: 'Management',
};