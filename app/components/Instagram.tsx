import Image from 'next/image';

const instagramUrl = 'https://www.instagram.com/amovelvetcafe/';

// Galeria editorial com fotos fornecidas pelo usuário, sem atualização automática.
// Quando disponíveis, adicione os links oficiais dos posts no campo href.
const photos = [
  {
    src: '/instagram/pet-na-mesa.png',
    alt: 'Cachorrinho acompanhado à mesa do Velvet Café',
    caption: 'Seu pet aproveita junto',
    position: 'object-top',
    href: instagramUrl,
  },
  {
    src: '/instagram/encontro-no-jardim.png',
    alt: 'Pessoas aproveitando doces e uma bebida à mesa no jardim',
    caption: 'Encontros que fazem bem',
    position: 'object-top',
    href: instagramUrl,
  },
  {
    src: '/instagram/placa-velvet.png',
    alt: 'Placa verde com o nome Velvet entre flores e folhagens',
    caption: 'Um cantinho cheio de vida',
    position: 'object-bottom',
    href: instagramUrl,
  },
  {
    src: '/instagram/doces-e-cha.png',
    alt: 'Chá, bolo de chocolate com morango e cheesecake de frutas vermelhas à mesa',
    caption: 'Sabores para compartilhar',
    position: 'object-bottom',
    href: instagramUrl,
  },
  {
    src: '/instagram/companhia-pet.png',
    alt: 'Casal com um cachorrinho no colo no jardim da cafeteria',
    caption: 'A melhor companhia',
    position: 'object-center',
    href: instagramUrl,
  },
  {
    src: '/instagram/bolo-e-leitura.png',
    alt: 'Bolo de morango com suspiro, xícara e livro sobre uma mesa de madeira',
    caption: 'Uma pausa só sua',
    position: 'object-center',
    href: instagramUrl,
  },
];

function InstagramIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      aria-hidden='true'
    >
      <rect x='3' y='3' width='18' height='18' rx='5' />
      <circle cx='12' cy='12' r='4' />
      <circle cx='17.5' cy='6.5' r='0.8' fill='currentColor' stroke='none' />
    </svg>
  );
}

export default function Instagram() {
  return (
    <section
      id='instagram'
      aria-labelledby='instagram-title'
      className='scroll-mt-6 hero:-scroll-mt-2 bg-cream px-6.25 py-20 hero:px-10 hero:py-28'
    >
      <div className='mx-auto max-w-300'>
        <div className='flex flex-col justify-between gap-7 hero:flex-row hero:items-end'>
          <div>
            <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
              <InstagramIcon className='size-4' /> O VELVET NO SEU FEED
            </p>
            <h2
              id='instagram-title'
              className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
            >
              Um pouquinho daqui.
              <br />
              <em className='font-normal text-sage'>Onde você estiver.</em>
            </h2>
          </div>
          <div className='max-w-85'>
            <p className='text-sm leading-7 text-forest/65'>
              Sabores, cantinhos e momentos que dão vontade de ficar. Siga o Velvet e acompanhe as novidades da
              cafeteria.
            </p>
            <a
              href={instagramUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-forest underline decoration-sage/50 underline-offset-8 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage'
            >
              @amovelvetcafe <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </div>

        <ul className='mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5'>
          {photos.map(photo => (
            <li key={photo.src}>
              <a
                href={photo.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${photo.caption} — visitar o perfil @amovelvetcafe no Instagram (nova aba)`}
                className='group relative block aspect-square overflow-hidden rounded-lg bg-forest/10 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sage'
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes='(min-width: 1280px) 387px, (min-width: 768px) 30vw, 45vw'
                  className={`object-cover ${photo.position} transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent'
                  aria-hidden='true'
                />
                <span className='absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-cream/95 text-forest md:top-4 md:right-4'>
                  <InstagramIcon className='size-4' />
                </span>
                <span className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-cream md:p-5'>
                  <span className='font-serif text-base leading-tight md:text-xl'>{photo.caption}</span>
                  <span className='shrink-0 text-lg' aria-hidden='true'>
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className='mt-9 flex flex-col items-start justify-between gap-5 border-t border-forest/15 pt-7 sm:flex-row sm:items-center'>
          <p className='max-w-115 text-sm leading-7 text-forest/65'>
            A próxima foto pode ser a sua. Na sua visita, marque{' '}
            <span className='font-medium text-forest'>@amovelvetcafe</span> e compartilhe seu momento.
          </p>
          <a
            href={instagramUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-13 items-center justify-center gap-3 rounded border border-forest bg-forest px-6 py-3.5 text-xs font-semibold text-cream transition-colors hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage motion-reduce:transition-none'
          >
            <InstagramIcon /> Seguir no Instagram <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
