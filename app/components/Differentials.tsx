import type { ReactNode } from 'react';

const differentials: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Grãos selecionados',
    description: 'A escolha dos grãos faz parte do cuidado com cada xícara. Aroma e sabor para acompanhar sua pausa.',
    icon: (
      <>
        <ellipse cx='12' cy='12' rx='7' ry='10' transform='rotate(35 12 12)' />
        <path d='M16 4c-9 4 1 12-8 16' />
      </>
    ),
  },
  {
    title: 'Receitas artesanais',
    description: 'Bolos, doces e sabores preparados com carinho. Aquele toque caseiro que dá vontade de repetir.',
    icon: (
      <>
        <path d='M4 13h16v7H4zM4 17h16M7 13V9h10v4M12 9V6M3 20h18' />
        <path d='M12 6c-3-1-2-3 0-4 2 1 3 3 0 4Z' />
      </>
    ),
  },
  {
    title: 'Ambiente aconchegante',
    description: 'Entre a madeira, o verde e os cantinhos do Velvet, encontre seu lugar para desacelerar.',
    icon: (
      <>
        <path d='m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7' />
        <path d='M10 9h4' />
      </>
    ),
  },
  {
    title: 'Wi-Fi disponível',
    description: 'Conecte-se para trabalhar, estudar ou colocar a conversa em dia, com um café por perto.',
    icon: (
      <>
        <path d='M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0' />
        <circle cx='12' cy='20' r='1' />
      </>
    ),
  },
  {
    title: 'Opções veganas',
    description: 'Mais possibilidades para a sua pausa. Pergunte à equipe pelas opções veganas disponíveis no dia.',
    icon: (
      <>
        <path d='M20 3C9 2 3 7 5 14c2 7 15 6 15-11ZM4 21 15 10' />
        <path d='M9 16v-5M9 16h5' />
      </>
    ),
  },
  {
    title: 'Atendimento personalizado',
    description: 'Uma conversa atenciosa e uma ajuda para escolher. Queremos que você se sinta em casa.',
    icon: (
      <>
        <path d='M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z' />
        <path d='M12 15s-5-3-5-6a2.5 2.5 0 0 1 5-1 2.5 2.5 0 0 1 5 1c0 3-5 6-5 6Z' />
      </>
    ),
  },
  {
    title: 'Pet friendly',
    description:
      'A melhor companhia também tem quatro patas. Seu pet é bem-vindo para aproveitar esse momento com você.',
    icon: (
      <>
        <ellipse cx='5' cy='9' rx='2' ry='3' />
        <ellipse cx='10' cy='5' rx='2' ry='3' />
        <ellipse cx='16' cy='5' rx='2' ry='3' />
        <ellipse cx='21' cy='10' rx='2' ry='3' />
        <path d='M6 19c0-3 4-7 7-7s7 4 7 7c0 4-5 1-7 1s-7 3-7-1Z' />
      </>
    ),
  },
  {
    title: 'Estacionamento',
    description: 'Mais praticidade para chegar e aproveitar. Consulte a equipe sobre o acesso ao estacionamento.',
    icon: (
      <>
        <rect x='3' y='3' width='18' height='18' rx='4' />
        <path d='M10 17V7h4a3 3 0 0 1 0 6h-4' />
      </>
    ),
  },
];

export default function Differentials() {
  return (
    <section
      id='diferenciais'
      aria-labelledby='diferenciais-title'
      className='scroll-mt-6 hero:-scroll-mt-2 bg-[#eeeee4] px-6.25 py-20 hero:px-10 hero:py-28'
    >
      <div className='mx-auto max-w-300'>
        <div className='mx-auto max-w-160 text-center'>
          <p className='flex items-center justify-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
            <span className='h-px w-8 bg-sage' aria-hidden='true' /> NOSSOS DIFERENCIAIS{' '}
            <span className='h-px w-8 bg-sage' aria-hidden='true' />
          </p>
          <h2
            id='diferenciais-title'
            className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
          >
            O cuidado mora
            <br />
            <em className='font-normal text-sage'>nos pequenos detalhes.</em>
          </h2>
          <p className='mx-auto mt-6 max-w-115 text-sm leading-7 text-forest/65'>
            Do sabor na xícara ao jeito de receber. Conheça o que torna uma pausa no Velvet ainda mais especial.
          </p>
        </div>

        <ul className='mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12'>
          {differentials.map(item => (
            <li key={item.title} className='border-t border-forest/15 pt-6'>
              <span className='mb-5 grid size-13 place-items-center rounded-full bg-cream text-forest'>
                <svg
                  width='26'
                  height='26'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  {item.icon}
                </svg>
              </span>
              <h3 className='font-serif text-xl leading-tight text-forest'>{item.title}</h3>
              <p className='mt-3 text-sm leading-6 text-forest/70'>{item.description}</p>
            </li>
          ))}
        </ul>

        <p className='mt-12 border-t border-forest/15 pt-7 text-center font-serif text-xl italic text-sage'>
          Tudo para você chegar, se acomodar e ficar mais um pouquinho.
        </p>
      </div>
    </section>
  );
}
