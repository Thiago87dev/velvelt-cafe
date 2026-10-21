export default function WhatsAppButton() {
  return (
    <a
      href='https://wa.me/5547933843873?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Velvet%20Caf%C3%A9.'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Conversar com o Velvet Café pelo WhatsApp (nova aba)'
      title='Fale com o Velvet pelo WhatsApp'
      className='fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full border border-white/30 bg-[#25d366] text-[#073d20] shadow-lg transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-forest motion-reduce:transform-none motion-reduce:transition-none sm:right-7 sm:bottom-7 sm:size-15'
    >
      <svg className='size-8' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.95 11.95 0 0 0 5.81 1.48h.01C18.65 23.84 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.06 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7c0 5.48-4.46 9.9-9.98 9.9Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z' />
      </svg>
    </a>
  );
}
