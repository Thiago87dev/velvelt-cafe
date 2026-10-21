import Image from 'next/image';

const details = [
  {
    number: '01',
    title: 'Café no seu tempo',
    text: 'Do café coado à delicadeza do latte art, um convite para saborear a pausa.',
  },
  {
    number: '02',
    title: 'Sabor e aconchego',
    text: 'Receitas caseiras, madeira e verde: por dentro ou ao ar livre, encontre seu cantinho.',
  },
  {
    number: '03',
    title: 'Boas companhias',
    text: 'Um encontro entre amigos, um momento só seu. E seu pet também é bem-vindo.',
  },
];

export default function About() {
  return (
    <section
      id='sobre'
      aria-labelledby='sobre-title'
      className='scroll-mt-6 hero:-scroll-mt-2 wide:-scroll-mt-6 bg-[#eeeee4] px-6.25 py-20 hero:px-10 hero:py-28 wide:py-32'
    >
      <div className='mx-auto grid max-w-300 items-center gap-14 hero:grid-cols-2 hero:gap-16 wide:gap-24'>
        <figure className='relative mx-auto w-full max-w-md hero:mx-0'>
          <div
            className='absolute -top-4 -left-4 h-2/3 w-2/3 rounded-t-full border border-sage/40'
            aria-hidden='true'
          />
          <div className='relative mr-8 overflow-hidden rounded-t-full bg-forest/10'>
            <Image
              src='/dog2.png'
              alt='Área externa do Velvet Café, com mesa e cadeiras de madeira sob um ombrelone verde, cercadas por plantas'
              width={481}
              height={734}
              sizes='(max-width: 760px) 80vw, 416px'
              className='aspect-3/4 w-full object-cover brightness-105 saturate-90'
            />
            <div
              className='pointer-events-none absolute inset-0 bg-linear-to-t from-forest/15 via-transparent to-transparent'
              aria-hidden='true'
            />
          </div>
          <div className='absolute right-0 bottom-28 w-2/5 overflow-hidden rounded-t-full border-4 border-cream bg-cream shadow-lg'>
            <Image
              src='/ambiente-velvet.png'
              alt='Interior da cafeteria com cadeiras verdes e creme, balcão de doces e teto de madeira'
              width={567}
              height={767}
              sizes='(max-width: 760px) 36vw, 180px'
              className='aspect-3/4 w-full object-cover brightness-105 saturate-90'
            />
          </div>
          <figcaption className='relative mx-5 mt-5 border border-forest/10 bg-cream px-6 py-6 text-center shadow-sm hero:mx-7'>
            <span className='text-[9px] font-semibold tracking-widest text-sage'>AS PORTAS ESTÃO ABERTAS</span>
            <p className='mt-2 font-serif text-2xl italic text-forest'>Seu próximo café tem lugar.</p>
            <p className='mt-2 text-xs text-forest/65'>Anita Garibaldi · Joinville, SC</p>
          </figcaption>
        </figure>

        <div>
          <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
            <span className='h-px w-8 bg-sage' aria-hidden='true' /> SOBRE O VELVET
          </p>
          <h2
            id='sobre-title'
            className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
          >
            Mais que um café.
            <br />
            <em className='font-normal text-sage'>Um jeito de acolher.</em>
          </h2>
          <div className='mt-7 space-y-4 text-sm leading-7 text-forest/70'>
            <p>
              Velvet significa veludo. Um nome que traduz a proposta de uma pausa suave e acolhedora, em meio à rotina.
              No bairro Anita Garibaldi, em Joinville, esse convite ganha forma entre receitas caseiras, madeira e tons
              de verde.
            </p>
            <p>
              Escolha uma mesa no jardim ou um cantinho no interior. Entre um café coado, a delicadeza do latte art e
              uma fatia de bolo, a ideia é deixar a pressa lá fora e dar espaço à conversa, aos encontros e às pequenas
              coisas.
            </p>
          </div>
          <div className='mt-8 divide-y divide-forest/10 border-y border-forest/10'>
            {details.map(detail => (
              <div key={detail.number} className='flex gap-5 py-5'>
                <span className='pt-1 font-serif text-sm italic text-sage' aria-hidden='true'>
                  {detail.number}
                </span>
                <div>
                  <h3 className='font-serif text-xl text-forest'>{detail.title}</h3>
                  <p className='mt-1 text-xs leading-6 text-forest/65'>{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='mt-7 font-serif text-lg italic text-sage'>Venha pelo café. Fique pelo momento.</p>
        </div>
      </div>
    </section>
  );
}
