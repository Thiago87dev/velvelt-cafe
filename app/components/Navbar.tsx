'use client';

import { useState } from 'react';
import Brand from './Brand';

const links = [
  { href: '#sobre', label: 'Sobre o Velvet' },
  { href: '#destaques', label: 'Destaques' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];
const focus = 'rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-cream/15 bg-forest text-cream shadow-sm'>
      <a
        href='#conteudo'
        className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-30 focus:rounded focus:bg-cream focus:p-3 focus:text-forest'
      >
        Pular para o conteúdo
      </a>
      <nav
        aria-label='Navegação principal'
        className='relative mx-auto flex min-h-22 max-w-480 items-center justify-between gap-4 px-6.25 py-4 xl:px-8 2xl:px-12'
        onKeyDown={event => {
          if (event.key === 'Escape') {
            setOpen(false);
            event.currentTarget.querySelector<HTMLButtonElement>('button')?.focus();
          }
        }}
      >
        <a href='#inicio' className={focus} aria-label='Velvet Café — início' onClick={() => setOpen(false)}>
          <Brand />
        </a>
        <button
          type='button'
          aria-expanded={open}
          aria-controls='menu-principal'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
          className={`${focus} grid size-11 cursor-pointer place-items-center border border-cream/30 transition-colors hover:bg-cream/10 motion-reduce:transition-none xl:hidden`}
        >
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            aria-hidden='true'
          >
            <path d={open ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <div
          id='menu-principal'
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-5.5rem)] flex-col gap-1 overflow-y-auto border-t border-cream/15 bg-forest px-6.25 py-4 shadow-lg xl:static xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:items-center xl:gap-5 xl:overflow-visible xl:border-0 xl:p-0 xl:shadow-none 2xl:gap-7`}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${focus} py-3 text-xs font-medium text-cream/80 transition-colors hover:text-cream motion-reduce:transition-none`}
            >
              {link.label}
            </a>
          ))}
          <a
            href='https://www.google.com/maps/dir/?api=1&destination=Velvet+Caf%C3%A9+Rua+Henrique+Dias+140+Joinville+SC'
            target='_blank'
            rel='noopener noreferrer'
            className={`${focus} mt-2 inline-flex min-h-11 items-center justify-center gap-5 rounded border border-cream bg-cream px-5 text-xs font-semibold text-forest transition-colors hover:border-white hover:bg-white motion-reduce:transition-none xl:mt-0`}
          >
            Como chegar <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
