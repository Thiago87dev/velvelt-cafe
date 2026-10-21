import Brand from './Brand';

const linkClass =
  'rounded-sm text-sm leading-7 text-cream/70 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream motion-reduce:transition-none';

export default function Footer() {
  return (
    <footer
      id='visite'
      aria-label='Contato e localização'
      className='scroll-mt-10 hero:scroll-mt-6 bg-forest px-6.25 pt-16 pb-7 text-cream hero:px-10 hero:pt-20'
    >
      <div className='mx-auto max-w-300'>
        <div className='grid gap-12 pb-14 sm:grid-cols-2 wide:grid-cols-[1.4fr_1fr_1fr] wide:gap-20'>
          <div>
            <a
              href='#inicio'
              className='inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream'
              aria-label='Velvet Café — voltar ao início'
            >
              <Brand />
            </a>
            <p className='mt-6 max-w-65 text-sm leading-7 text-cream/65'>
              Café, receitas caseiras e um convite para aproveitar a vida com mais calma.
            </p>
            <p className='mt-5 font-serif text-xl italic text-cream/80'>A gente se encontra no Velvet.</p>
          </div>
          <div>
            <h2 className='mb-5 text-[10px] font-semibold tracking-widest text-cream/60'>VENHA NOS VISITAR</h2>
            <address className='text-sm leading-7 text-cream/80 not-italic'>
              Rua Henrique Dias, 140
              <br />
              Anita Garibaldi · Joinville, SC
              <br />
              CEP 89203-420
            </address>
            <a
              href='https://www.google.com/maps/dir/?api=1&destination=Velvet+Caf%C3%A9+Rua+Henrique+Dias+140+Joinville+SC'
              target='_blank'
              rel='noopener noreferrer'
              className={`${linkClass} mt-5 inline-flex items-center gap-6 border-b border-cream/30 pb-1`}
            >
              Traçar minha rota <span aria-hidden='true'>↗</span>
            </a>
          </div>
          <div>
            <h2 className='mb-5 text-[10px] font-semibold tracking-widest text-cream/60'>VAMOS CONVERSAR</h2>
            <ul className='space-y-3'>
              <li>
                <a href='https://wa.me/5547933843873' target='_blank' rel='noopener noreferrer' className={linkClass}>
                  WhatsApp · (47) 93384-3873 <span aria-hidden='true'>↗</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/amovelvetcafe/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={linkClass}
                >
                  Instagram · @amovelvetcafe <span aria-hidden='true'>↗</span>
                </a>
              </li>
            </ul>
            <p className='mt-6 max-w-65 text-xs leading-6 text-cream/60'>
              Consulte nossos horários pelo WhatsApp antes de vir. Seu pet também é bem-vindo!
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 border-t border-cream/15 pt-6 text-[10px] leading-5 text-cream/50 sm:flex-row sm:items-center sm:justify-between'>
          <p>© Velvet Café. Todos os direitos reservados.</p>
          <a
            href='#inicio'
            className='inline-flex items-center gap-3 self-start rounded-sm py-1 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream'
          >
            Voltar ao início <span aria-hidden='true'>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
