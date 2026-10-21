import type { ReactNode } from 'react';

const whatsappUrl = 'https://wa.me/5547933843873';
const answerLink =
  'font-medium text-forest underline decoration-sage/50 underline-offset-4 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage';

const questions: { question: string; answer: ReactNode }[] = [
  {
    question: 'Tem Wi-Fi disponível?',
    answer:
      'Sim! Temos Wi-Fi para você se conectar enquanto aproveita seu café. Peça à equipe as informações de acesso.',
  },
  {
    question: 'Posso levar meu pet?',
    answer:
      'Pode sim! O Velvet é pet friendly. Seu companheiro de quatro patas é bem-vindo para aproveitar esse momento com você.',
  },
  {
    question: 'Vocês têm opções sem lactose?',
    answer: (
      <>
        Sim! Nosso cardápio inclui o bolinho funcional, indicado como sem glúten e sem lactose. Consulte a equipe sobre
        a disponibilidade do dia e os ingredientes antes de escolher. Você também pode conferir o{' '}
        <a href='#cardapio' className={answerLink}>
          cardápio
        </a>
        .
      </>
    ),
  },
  {
    question: 'É preciso reservar mesa?',
    answer:
      'Não trabalhamos com reservas de mesas. Venha nos visitar e consulte a disponibilidade de lugares ao chegar.',
  },
  {
    question: 'O Velvet faz entregas?',
    answer: (
      <>
        Sim! Os pedidos de entrega são feitos pelo WhatsApp. Fale com a equipe para escolher os produtos e consultar a
        área atendida, a taxa e o prazo de entrega.{' '}
        <a
          href={`${whatsappUrl}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20para%20entrega.`}
          target='_blank'
          rel='noopener noreferrer'
          className={answerLink}
        >
          Pedir pelo WhatsApp ↗
        </a>
      </>
    ),
  },
  {
    question: 'Há opções veganas?',
    answer:
      'Sim! Consulte a equipe para conhecer as opções veganas disponíveis no dia e encontrar uma que combine com a sua pausa.',
  },
  {
    question: 'Tem estacionamento?',
    answer: 'Sim! Para saber sobre o acesso e a disponibilidade de vagas, converse com a nossa equipe antes da visita.',
  },
  {
    question: 'Onde fica a cafeteria?',
    answer: (
      <>
        Estamos na Rua Henrique Dias, 140, no bairro Anita Garibaldi, em Joinville, SC.{' '}
        <a
          href='https://www.google.com/maps/dir/?api=1&destination=Velvet+Caf%C3%A9+Rua+Henrique+Dias+140+Joinville+SC'
          target='_blank'
          rel='noopener noreferrer'
          className={answerLink}
        >
          Ver como chegar ↗
        </a>
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='scroll-mt-6 hero:-scroll-mt-2 bg-[#eeeee4] px-6.25 py-20 hero:px-10 hero:py-28'
    >
      <div className='mx-auto grid max-w-300 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
        <div>
          <p className='flex items-center gap-3 text-[10px] font-semibold tracking-widest text-forest/70'>
            <span className='h-px w-8 bg-sage' aria-hidden='true' /> PERGUNTAS FREQUENTES
          </p>
          <h2
            id='faq-title'
            className='mt-6 font-serif text-4xl leading-tight tracking-tight text-forest wide:text-5xl'
          >
            Antes de chegar,
            <br />
            <em className='font-normal text-sage'>tire suas dúvidas.</em>
          </h2>
          <p className='mt-6 max-w-85 text-sm leading-7 text-forest/65'>
            Tudo para planejar sua visita com tranquilidade e aproveitar o melhor da sua pausa.
          </p>
          <div className='mt-8 border-l-2 border-sage/40 pl-5'>
            <p className='font-serif text-xl text-forest'>Ficou alguma pergunta?</p>
            <a
              href={`${whatsappUrl}?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Velvet%20Caf%C3%A9.`}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-flex min-h-11 items-center gap-5 rounded-sm text-xs font-semibold text-forest underline decoration-sage/50 underline-offset-8 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage'
            >
              Converse com a gente <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </div>

        <div className='divide-y divide-forest/15 border-y border-forest/15'>
          {questions.map(item => (
            <details key={item.question} name='velvet-faq' className='group'>
              <summary className='flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-6 text-forest transition-colors hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage motion-reduce:transition-none [&::-webkit-details-marker]:hidden'>
                <h3 className='font-serif text-xl leading-snug'>{item.question}</h3>
                <span
                  className='grid size-8 shrink-0 place-items-center rounded-full border border-forest/20 transition-colors group-open:border-forest group-open:bg-forest group-open:text-cream motion-reduce:transition-none'
                  aria-hidden='true'
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 16 16'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  >
                    <path d='M3 8h10' />
                    <path d='M8 3v10' className='group-open:hidden' />
                  </svg>
                </span>
              </summary>
              <div className='pr-4 pb-6 text-sm leading-7 text-forest/75 sm:pr-13'>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
