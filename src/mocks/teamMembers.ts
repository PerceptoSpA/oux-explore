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
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/64be4e81-fcb1-40b8-bff2-775a770f0c75_compressed_Jorge-Sances-CEO--Founder.webp',
    imageAlt: 'Foto de Jorge Sances',
    area: 'management',
  },
  {
    name: 'José Astudillo',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/cce522fc-34e0-4b1e-b5b2-092ee40fe3f2_compressed_Jos-Pablo-Astudillo-VP-Exploration.webp',
    imageAlt: 'Foto de José Astudillo',
    area: 'geology',
  },
  {
    name: 'Diego Peralta',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/399e933e-e984-446b-be0f-6395d0fdd5e4_compressed_Diego-Peralta-Drilling-Team-Lead.webp',
    imageAlt: 'Foto de Diego Peralta',
    area: 'drilling',
  },
  {
    name: 'Felipe Campos',
    image: 'https://storage.helloreaddy.io/project_files/5558daa9-7059-43a3-8453-c00007595499/f7071d7d-9fec-4864-a907-6571fcd6d626_compressed_Felipe-Campos---Ingeniero-Elctrico.webp',
    imageAlt: 'Foto de Felipe Campos',
    area: 'geophysics',
  },
  {
    name: 'Gonzalo Peterli',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/fecce17d-1dec-4143-931b-640b0f23f89e_compressed_Gonzalo-Peterli-Junior-Geologist.webp',
    imageAlt: 'Foto de Gonzalo Peterli',
    area: 'geology',
  },
  {
    name: 'Pablo Mercado',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/d1c73b48-99ca-45b1-b9e3-78d0ed690777_compressed_Pablo-Mercado-Junior-Geologist.webp',
    imageAlt: 'Foto de Pablo Mercado',
    area: 'geology',
  },
  {
    name: 'Rafael Correa',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/0d3cc801-d448-4734-a7a6-61fee0876055_compressed_Rafael-Correa---Geologo-Assistant.webp',
    imageAlt: 'Foto de Rafael Correa',
    area: 'geology',
  },
  {
    name: 'Felipe Aguilera',
    image: 'https://storage.readdy-site.link/project_files/5558daa9-7059-43a3-8453-c00007595499/a1c40ba5-bb1d-4ff5-87c1-4cb2914d48f4_compressed_Felipe-Aguilera-Geology-Assistant.webp',
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