'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { menuCategories } from './menu-data';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export default function Menu() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const category = menuCategories[active];

  function selectTab(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  return (
    <section
      id='cardapio'
      aria-labelledby='cardapio-title'
      className='scroll-mt-6 hero:-scroll-mt-2 bg-cream px-6.25 py-20 hero:px-10 hero:py-28'
    >
      <div className='mx-auto max-w-300'>
        <div className='flex flex-col justify-between gap-6 hero:flex-row hero:items-end'>
          <div>
            <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
              <span className='h-px w-8 bg-sage' aria-hidden='true' /> NOSSO CARDÁPIO
            </p>
            <h2
              id='cardapio-title'
              className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
            >
              Escolha seu próximo
              <br />
              <em className='font-normal text-sage'>momento favorito.</em>
            </h2>
          </div>
          <p className='max-w-75 text-sm leading-7 text-forest/65'>
            Do primeiro gole à última fatia.
            <br />
            Explore os sabores do Velvet, no seu tempo.
          </p>
        </div>

        <div
          role='tablist'
          aria-label='Categorias do cardápio'
          className='mt-10 flex flex-wrap gap-2 border-b border-forest/15 pb-5'
        >
          {menuCategories.map((item, index) => (
            <button
              key={item.id}
              ref={element => {
                tabs.current[index] = element;
              }}
              type='button'
              role='tab'
              id={`tab-${item.id}`}
              aria-controls={`painel-${item.id}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={event => {
                let next: number;
                if (event.key === 'ArrowRight') next = (index + 1) % menuCategories.length;
                else if (event.key === 'ArrowLeft') next = (index - 1 + menuCategories.length) % menuCategories.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = menuCategories.length - 1;
                else return;
                event.preventDefault();
                selectTab(next);
              }}
              className={`inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border px-5 py-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage motion-reduce:transition-none ${active === index ? 'border-forest bg-forest text-cream' : 'border-forest/15 text-forest/75 hover:border-sage hover:bg-sage/10'}`}
            >
              {item.name}
              <span className='text-[10px] font-normal opacity-65'>
                {item.items.length.toString().padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>

        <div
          key={category.id}
          role='tabpanel'
          id={`painel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          tabIndex={0}
          className='mt-8 grid items-start gap-8 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage hero:grid-cols-[0.75fr_1.25fr] wide:gap-14'
        >
          <figure className='relative overflow-hidden rounded-t-full rounded-b-lg bg-forest hero:sticky hero:top-8'>
            <Image
              src={category.image}
              alt={category.alt}
              width={900}
              height={1100}
              sizes='(max-width: 760px) 90vw, 430px'
              className='h-64 w-full object-cover hero:h-110'
            />
            <div
              className='absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent'
              aria-hidden='true'
            />
            <figcaption className='absolute inset-x-0 bottom-0 p-7 text-cream'>
              <span className='text-[9px] tracking-widest text-cream/70'>À SUA ESCOLHA</span>
              <h3 className='mt-2 font-serif text-3xl'>{category.name}</h3>
              <p className='mt-3 max-w-65 text-sm leading-6 text-cream/85'>{category.subtitle}</p>
              <span className='mt-5 block text-[9px] text-cream/65'>Foto ilustrativa da categoria</span>
            </figcaption>
          </figure>

          <div>
            <div className='flex items-center justify-between border-b border-forest/20 pb-4 text-[10px] tracking-widest text-forest/55'>
              <span>FEITO PARA SUA PAUSA</span>
              <span>VALOR</span>
            </div>
            <ul className='divide-y divide-forest/10'>
              {category.items.map(item => (
                <li key={item.name} className='flex items-start justify-between gap-4 py-5'>
                  <div>
                    <h4 className='font-serif text-lg leading-6 text-forest'>{item.name}</h4>
                    {item.description && (
                      <p className='mt-1.5 max-w-96 text-xs leading-5 text-forest/65'>{item.description}</p>
                    )}
                  </div>
                  <span className='shrink-0 pt-0.5 text-right text-sm font-medium whitespace-nowrap text-forest tabular-nums'>
                    {item.price === null ? (
                      <span className='text-xs font-normal'>Consultar</span>
                    ) : (
                      currency.format(item.price)
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-10 flex flex-col justify-between gap-4 border-t border-forest/15 pt-6 sm:flex-row sm:items-center'>
          <p className='max-w-145 text-xs leading-6 text-forest/60'>
            Preços e disponibilidade podem mudar. Consulte a equipe para confirmar as opções do dia.
          </p>
          <a
            href='https://wa.me/5547933843873?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20as%20op%C3%A7%C3%B5es%20do%20card%C3%A1pio.'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-11 items-center gap-5 self-start rounded-sm text-xs font-semibold text-forest underline decoration-sage/50 underline-offset-8 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage'
          >
            Falar com o Velvet <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
