const destination = 'Velvet Café, Rua Henrique Dias, 140, Anita Garibaldi, Joinville, SC';
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
const linkClass =
  'inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-forest underline decoration-sage/50 underline-offset-4 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage';

export default function Contact() {
  return (
    <section
      id='contato'
      aria-labelledby='contato-title'
      className='scroll-mt-6 bg-cream px-6.25 py-20 hero:-scroll-mt-2 hero:px-10 hero:py-28'
    >
      <div className='mx-auto max-w-300'>
        <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
          <span className='h-px w-8 bg-sage' aria-hidden='true' /> CONTATO & ENDEREÇO
        </p>
        <div className='mt-6 flex flex-col justify-between gap-6 hero:flex-row hero:items-end'>
          <h2 id='contato-title' className='font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'>
            Sua próxima pausa
            <br />
            <em className='font-normal text-sage'>tem endereço.</em>
          </h2>
          <p className='max-w-80 text-sm leading-7 text-forest/65'>
            Venha tomar um café com a gente. Para dúvidas ou pedidos de entrega, é só chamar pelo WhatsApp.
          </p>
        </div>

        <div className='mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          <div className='grid gap-x-8 gap-y-7 sm:grid-cols-2'>
            <div className='border-t border-forest/15 pt-5'>
              <h3 className='font-serif text-xl text-forest'>WhatsApp</h3>
              <a
                href='https://wa.me/5547933843873'
                target='_blank'
                rel='noopener noreferrer'
                className={`${linkClass} mt-2`}
              >
                (47) 93384-3873 <span aria-hidden='true'>↗</span>
              </a>
              <p className='mt-1 text-xs leading-6 text-forest/65'>Fale com a equipe ou faça seu pedido.</p>
            </div>
            <div className='border-t border-forest/15 pt-5'>
              <h3 className='font-serif text-xl text-forest'>Instagram</h3>
              <a
                href='https://www.instagram.com/amovelvetcafe/'
                target='_blank'
                rel='noopener noreferrer'
                className={`${linkClass} mt-2`}
              >
                @amovelvetcafe <span aria-hidden='true'>↗</span>
              </a>
              <p className='mt-1 text-xs leading-6 text-forest/65'>Acompanhe nossos sabores e novidades.</p>
            </div>
            <div className='border-t border-forest/15 pt-5'>
              <h3 className='font-serif text-xl text-forest'>Onde estamos</h3>
              <address className='mt-3 text-sm leading-7 text-forest/75 not-italic'>
                Rua Henrique Dias, 140
                <br />
                Anita Garibaldi · Joinville, SC
                <br />
                CEP 89203-420
              </address>
            </div>
            <div className='border-t border-forest/15 pt-5'>
              <h3 className='font-serif text-xl text-forest'>Horário de funcionamento</h3>
              <dl className='mt-3 space-y-1 text-sm leading-7 text-forest/75'>
                <div>
                  <dt>Segunda a sábado</dt>
                  <dd className='font-medium text-forest'>13h às 19h</dd>
                </div>
                <div>
                  <dt>Domingo</dt>
                  <dd className='font-medium text-forest'>14h às 19h</dd>
                </div>
              </dl>
              <p className='mt-2 text-xs leading-6 text-forest/60'>
                Em feriados, confirme o funcionamento com a equipe.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-xl border border-forest/15 bg-[#eeeee4]'>
            <iframe
              title='Localização do Velvet Café na Rua Henrique Dias, 140, Joinville'
              src={`https://maps.google.com/maps?q=${encodeURIComponent(destination)}&z=17&output=embed`}
              width='600'
              height='320'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
              className='h-72 w-full border-0 sm:h-80'
            />
            <div className='flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='font-serif text-lg text-forest'>A gente se encontra aqui.</p>
                <p className='mt-1 text-xs leading-6 text-forest/65'>Abra o mapa para planejar sua visita.</p>
              </div>
              <a
                href={directionsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded border border-forest bg-forest px-5 py-3 text-xs font-semibold text-cream transition-colors hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage motion-reduce:transition-none'
              >
                Como chegar <span aria-hidden='true'>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
