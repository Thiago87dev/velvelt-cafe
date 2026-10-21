import Image from 'next/image';

const highlights = [
  {
    name: 'Bolo de Morango com Suspiro',
    image: 'bolo-morango-suspiro',
    category: 'Bolos',
    alt: 'Fatia de bolo em camadas com morangos e cobertura de suspiros',
    position: 'object-bottom',
  },
  {
    name: 'Capuccino Italiano',
    image: 'capuccino-italiano',
    category: 'Cafés',
    alt: 'Capuccino em taça de vidro com cobertura cremosa e calda',
    position: 'object-center',
  },
  {
    name: 'Cheesecake de Frutas Vermelhas',
    image: 'cheesecake-frutas-vermelhas',
    category: 'Tortas',
    alt: 'Fatia de cheesecake com cobertura de frutas vermelhas e morangos',
    position: 'object-center',
  },
  {
    name: 'Fatia de Bolo com Morango',
    image: 'bolo-com-morango',
    category: 'Bolos',
    alt: 'Fatia de bolo de chocolate decorada com morangos, acompanhada de café coado',
    position: 'object-bottom',
  },
  {
    name: 'Key Lime Pie',
    image: 'key-lime-pie',
    category: 'Tortas',
    alt: 'Fatia de torta de limão com cobertura cremosa e rodelas de limão no prato',
    position: 'object-center',
  },
  {
    name: 'Cinnamon Roll',
    image: 'cinnamon-roll',
    category: 'Para acompanhar',
    alt: 'Cinnamon roll dourado servido em um prato',
    position: 'object-center',
  },
  {
    name: 'Croissant',
    image: 'croissant',
    category: 'Para acompanhar',
    alt: 'Croissant dourado em prato floral, ao lado de uma xícara de café',
    position: 'object-center',
  },
  {
    name: 'Red Velvet Cake',
    image: 'red-velvet-cake',
    category: 'Bolos',
    alt: 'Fatia de bolo red velvet com camadas de creme branco',
    position: 'object-bottom',
  },
  {
    name: 'Coconut Cake',
    image: 'coconut-cake',
    category: 'Bolos',
    alt: 'Fatia de bolo coberta com coco ralado em prato verde',
    position: 'object-center',
  },
];

export default function Highlights() {
  return (
    <section
      id='destaques'
      aria-labelledby='destaques-title'
      className='scroll-mt-6 hero:-scroll-mt-2 border-b border-forest/10 bg-cream px-6.25 py-20 hero:px-10 hero:py-28'
    >
      <div className='mx-auto max-w-300'>
        <div className='flex flex-col justify-between gap-6 hero:flex-row hero:items-end'>
          <div>
            <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
              <span className='h-px w-8 bg-sage' aria-hidden='true' /> DESTAQUES DO VELVET
            </p>
            <h2
              id='destaques-title'
              className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
            >
              De dar água na boca.
              <br />
              <em className='font-normal text-sage'>De querer voltar.</em>
            </h2>
          </div>
          <p className='max-w-80 text-sm leading-7 text-forest/65'>
            Uma seleção para inspirar sua próxima visita. Escolha uma delícia, encontre seu cantinho e aproveite.
          </p>
        </div>

        <ul className='mx-auto mt-10 grid max-w-264 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3'>
          {highlights.map((item, index) => (
            <li key={item.image}>
              <article className='group h-full'>
                <div className='relative aspect-square overflow-hidden rounded-t-3xl rounded-b-sm bg-forest/10'>
                  <Image
                    src={`/destaques/${item.image}.png`}
                    alt={item.alt}
                    fill
                    sizes='(min-width: 1136px) 336px, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 90vw'
                    className={`object-cover ${item.position} transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}
                  />
                  <span className='absolute top-4 left-4 rounded-full bg-cream/95 px-3.5 py-2 text-[10px] font-medium tracking-wide text-forest'>
                    {item.category}
                  </span>
                </div>
                <div className='mt-5 flex items-start gap-3 border-b border-forest/15 pb-5'>
                  <span className='pt-1 font-serif text-xs italic text-sage' aria-hidden='true'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='font-serif text-xl leading-tight text-forest'>{item.name}</h3>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className='mt-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center'>
          <p className='max-w-100 text-xs leading-6 text-forest/60'>
            Gostou de alguma opção? Consulte a disponibilidade do dia com a nossa equipe.
          </p>
          <a
            href='#cardapio'
            className='inline-flex min-h-13 items-center justify-center gap-6 rounded border border-forest bg-forest px-6 py-3.5 text-xs font-semibold text-cream transition-colors hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage motion-reduce:transition-none'
          >
            Explorar o cardápio <span aria-hidden='true'>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
