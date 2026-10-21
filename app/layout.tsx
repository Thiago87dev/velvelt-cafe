import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Velvet Café | Uma pausa com sabor em Joinville',
  description:
    'Café fresquinho, receitas caseiras e um cantinho acolhedor em Joinville. Conheça o Velvet Café, na Rua Henrique Dias, 140, Anita Garibaldi.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className='m-0 bg-cream font-sans leading-normal text-forest'>{children}</body>
    </html>
  );
}
