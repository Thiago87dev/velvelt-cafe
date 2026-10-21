import Image from 'next/image';
import PawIcon from './PawIcon';

const buttonClass =
  'inline-flex min-h-13.5 cursor-pointer items-center justify-center rounded border px-4.75 py-3.5 text-xs leading-normal font-semibold transition-[background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#a7813f] motion-reduce:transform-none motion-reduce:transition-none hero:px-4.25 wide:px-6 wide:py-3.75';
const primaryClass = `${buttonClass} gap-5 border-forest bg-forest text-[#fffdf5] hover:bg-[#3c634b] hero:gap-2.25 wide:gap-5`;
const eyebrowClass =
  'flex items-center gap-2.5 text-[9px] leading-normal font-semibold tracking-[1.8px] hero:text-[10px] hero:tracking-[2.3px]';

function Icon({ pin = false }: { pin?: boolean }) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      className='shrink-0'
    >
      {pin ? (
        <>
          <path d='M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z' />
          <circle cx='12' cy='10' r='2.5' />
        </>
      ) : (
        <path d='M4 12h16m-6-6 6 6-6 6' />
      )}
    </svg>
  );
}

function Cup() {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.3'
      strokeLinecap='round'
      aria-hidden='true'
    >
      <path d='M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Zm13 1h2a3 3 0 0 1 0 6h-2M8 2v3m5-3v3M2 22h18' />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id='inicio'
        className='mx-auto grid min-h-svh max-w-480 grid-cols-1 hero:grid-cols-2'
        aria-labelledby='hero-title'
      >
        <div className='flex flex-col px-6.25 py-7 hero:pt-11 hero:pr-6.25 hero:pb-8 hero:pl-7.5 wide:px-[clamp(32px,5.6vw,108px)]'>
          <div
            className='flex items-center gap-3 font-serif text-[27px] leading-normal hero:text-[30px]'
            aria-label='Velvet Café'
          >
            <span className='grid size-13 place-items-center rounded-full border border-[#91a88a]'>
              <Cup />
            </span>
            <span>
              Velvet <i>Café</i>
              <small className='mt-1.75 block font-sans text-[8px] leading-normal tracking-[3px]'>CAFÉ & AFETO</small>
            </span>
          </div>

          <div className='my-auto pt-13.5 pb-9.5 hero:pt-18.75 hero:pb-16'>
            <a
              href='#pet-friendly'
              className='mb-5 inline-flex min-h-11 items-center gap-3 rounded-full border border-sage/30 bg-sage/15 px-4 py-2 text-xs font-semibold text-forest transition-colors hover:bg-sage/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest motion-reduce:transition-none'
            >
              <PawIcon className='size-5' /> Somos pet friendly <span aria-hidden='true'>↗</span>
            </a>
            <p className={`${eyebrowClass} my-[1em]`}>
              <span className='size-1.5 rounded-full bg-[#79a76c]' /> SEU CANTINHO EM JOINVILLE
            </p>
            <h1
              id='hero-title'
              className='mt-5.75 mb-6.25 font-serif text-[clamp(43px,9vw,69px)] leading-[1.07] font-normal tracking-[-2px] hero:mt-7 hero:text-[53px] hero:tracking-[-3px] wide:text-[clamp(49px,5.1vw,88px)]'
            >
              A vida pede
              <br />
              uma pausa.
              <br />
              <em className='font-normal whitespace-nowrap text-sage'>E um bom café.</em>
            </h1>
            <p className='my-3.75 max-w-97.5 text-[15px] leading-[1.85] text-[#6a7064] hero:max-w-90'>
              Café fresquinho, receitas caseiras e um cantinho acolhedor para você e seu pet aproveitarem juntos.
            </p>
            <p className='mt-4.5 mb-4.25 font-serif text-[17px] leading-normal italic'>
              Traga seu melhor amigo. Sintam-se em casa.
            </p>
            <div className='mt-8.5 flex flex-wrap gap-2.5 hero:gap-3'>
              <a className={primaryClass} href='#cardapio'>
                Ver cardápio <Icon />
              </a>
              <a
                className={`${buttonClass} gap-2.5 border-[#c6cdbf] bg-transparent hover:bg-[#e9eddf] hero:gap-2.25 wide:gap-2.5`}
                href='https://www.google.com/maps/dir/?api=1&destination=Velvet+Caf%C3%A9+Rua+Henrique+Dias+140+Joinville+SC'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon pin /> Como chegar
              </a>
            </div>
          </div>

          <div className='flex items-center gap-3 border-t border-[#dce0d2] pt-5.5 text-[10px] leading-[1.8] text-[#646e60] [&>svg]:w-4.25'>
            <Icon pin />
            <p>
              Rua Henrique Dias, 140 · Anita Garibaldi
              <span className='block text-[#79806f]'>
                Joinville, SC <b className='px-1.75 font-normal'>•</b> Seu pet também é bem-vindo.
              </span>
            </p>
          </div>
        </div>

        <div className='relative min-h-130 overflow-hidden bg-[#233d32] hero:min-h-185'>
          <Image
            src='/coffee-hero.jpg'
            alt='Café sendo preparado em um coador de vidro com luz natural'
            fill
            preload
            sizes='(max-width: 760px) 100vw, 50vw'
            className='object-cover object-[57%_center]'
            loading='eager'
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,#10271d35,transparent_35%,#0e251c99)]' />
          <div className='absolute top-7.5 left-6.25 flex items-center gap-2.5 text-[9px] leading-normal tracking-[2px] text-[#fffdf0] hero:top-14.75 hero:text-[8px] wide:left-10 wide:text-[9px]'>
            <span className='size-1.5 rounded-full bg-[#d1dfa6]' /> UM CONVITE PARA DESACELERAR
          </div>
          <div
            className='absolute top-17.5 left-9.25 flex size-25 rotate-11 flex-col items-center justify-center gap-1.5 rounded-full bg-[#e9eddb] text-[#3c583c] shadow-[0_0_0_5px_#e9eddb55] hero:top-26.5 hero:right-8.5 hero:size-28.25'
            aria-hidden='true'
          >
            <span className='text-[10px] leading-normal tracking-[1px]'>feito com</span>
            <Cup />
            <em className='font-serif text-[25px] leading-normal'>afeto</em>
          </div>
          <div className='absolute right-10 bottom-12.5 left-7 font-serif text-[31px] leading-tight text-[#fffef1] hero:bottom-16.25 hero:left-11.25'>
            <span>Pequenos momentos.</span>
            <p className='mt-0.75 mb-5.5 italic'>Boas memórias.</p>
            <div className='h-px w-13.5 bg-[#c5d4aa]' />
          </div>
          <span className='absolute right-5 bottom-3.75 text-[9px] leading-normal text-white/70'>
            Imagem ilustrativa
          </span>
        </div>
      </section>
    </>
  );
}
