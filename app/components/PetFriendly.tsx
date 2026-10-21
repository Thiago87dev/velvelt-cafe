import PawIcon from './PawIcon';

export default function PetFriendly() {
  return (
    <section
      id='pet-friendly'
      aria-labelledby='pet-friendly-title'
      className='scroll-mt-22 bg-forest px-6.25 py-10 text-cream hero:px-10 hero:py-12'
    >
      <div className='mx-auto flex max-w-300 flex-col gap-7 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-start gap-5 md:items-center'>
          <span className='grid size-16 shrink-0 place-items-center rounded-full border border-cream/25 bg-cream/10'>
            <PawIcon className='size-8' />
          </span>
          <div>
            <p className='text-[10px] font-semibold tracking-widest text-cream/70'>SOMOS PET FRIENDLY</p>
            <h2 id='pet-friendly-title' className='mt-3 font-serif text-2xl leading-tight sm:text-3xl'>
              O café é seu. O passeio é de vocês.
            </h2>
            <p className='mt-3 max-w-140 text-sm leading-7 text-cream/80'>
              Aqui, seu companheiro de quatro patas também é bem-vindo. Traga seu pet e aproveitem juntos uma pausa no
              Velvet.
            </p>
          </div>
        </div>
        <a
          href='#contato'
          className='inline-flex min-h-12 shrink-0 items-center justify-center gap-5 self-start rounded border border-cream/40 px-5 py-3 text-xs font-semibold transition-colors hover:bg-cream hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream motion-reduce:transition-none md:self-center'
        >
          Planeje sua visita <span aria-hidden='true'>↗</span>
        </a>
      </div>
    </section>
  );
}
