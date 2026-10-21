export default function Brand() {
  return (
    <span className='flex items-center gap-3'>
      <span
        className='grid size-11 shrink-0 place-items-center rounded-full border border-current/40'
        aria-hidden='true'
      >
        <svg
          width='25'
          height='25'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.3'
          strokeLinecap='round'
        >
          <path d='M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Zm13 1h2a3 3 0 0 1 0 6h-2M8 2v3m5-3v3M2 22h18' />
        </svg>
      </span>
      <span className='font-serif text-2xl leading-none'>
        Velvet <i>Café</i>
        <span className='mt-2 block font-sans text-[8px] tracking-widest'>CAFÉ & AFETO</span>
      </span>
    </span>
  );
}
