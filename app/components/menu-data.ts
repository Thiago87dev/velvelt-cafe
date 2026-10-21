export type MenuItem = { name: string; price: number | null; description?: string };
export type MenuCategory = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  alt: string;
  items: MenuItem[];
};

// Produtos e preços transcritos das referências fornecidas pelo estabelecimento.
export const menuCategories: MenuCategory[] = [
  {
    id: 'cafes',
    name: 'Cafés',
    subtitle: 'Uma boa pausa começa pelo aroma.',
    image: '/coffee-hero.jpg',
    alt: 'Preparo de café coado em recipiente de vidro',
    items: [
      { name: 'Espresso pequeno', price: 7 },
      { name: 'Espresso duplo', price: 10 },
      { name: 'Espresso latte', price: 13 },
      { name: 'Café americano', price: 10 },
      { name: 'Café coado puro', price: 12 },
      { name: 'Café coado com leite', price: 13 },
      { name: 'Cappuccino', price: 16 },
      { name: 'Cappuccino chantilly', price: 19 },
      { name: 'Chocolate quente', price: 18 },
      { name: 'Jarrinha de leite', price: 5 },
    ],
  },
  {
    id: 'salgados',
    name: 'Salgados',
    subtitle: 'Para acompanhar a conversa e o café.',
    image: '/menu-salgados.jpg',
    alt: 'Foto ilustrativa de pães folhados dourados',
    items: [
      { name: 'Pão de queijo mineirinho', price: 4 },
      { name: 'Pão na chapa com manteiga ou requeijão', price: 11, description: 'Manteiga ou requeijão.' },
      { name: 'Bauru', price: 14 },
      { name: 'Pão de batata com linguiça Blumenau', price: 14 },
      { name: 'Pão de batata com frango e requeijão', price: 14 },
      { name: 'Misto quente', price: 17, description: 'Pão de fermentação natural, queijo e presunto.' },
      { name: 'Quiche de alho-poró com bacon', price: 18 },
      { name: 'Quiche de brócolis com queijo', price: 18 },
      { name: 'Empadão de frango com palmito', price: 18 },
      { name: 'Empadão de frango com requeijão, milho e ervilha', price: 18 },
      { name: 'Crepioca de frango com requeijão', price: 19, description: 'Somente de terça a sexta-feira.' },
      {
        name: 'Ovos mexidos cremosos',
        price: 22,
        description: '4 ovos, acompanhados de pão de fermentação natural. Somente de terça a sexta-feira.',
      },
    ],
  },
  {
    id: 'chas',
    name: 'Chás',
    subtitle: 'Um momento de calma, xícara por xícara.',
    image: '/menu-chas.jpg',
    alt: 'Foto ilustrativa de uma xícara quente ao lado de biscoitos',
    items: [{ name: 'Chá Twinings', price: 10 }],
  },
  {
    id: 'bebidas',
    name: 'Bebidas e drinks',
    subtitle: 'Um brinde aos pequenos momentos.',
    image: '/menu-bebidas.jpg',
    alt: 'Foto ilustrativa de suco de laranja com frutas frescas',
    items: [
      { name: 'Água mineral', price: 6 },
      { name: 'Água tônica', price: 8 },
      { name: 'Refrigerante', price: 8 },
      { name: 'Suco natural', price: 14 },
      { name: 'Suco integral', price: 14 },
      { name: 'Soda italiana', price: 18 },
      { name: 'Gin com tônica ou Red Bull', price: 28 },
      { name: 'Cerveja long neck', price: 14 },
      { name: 'Vinho garrafa', price: null, description: 'Consultar disponibilidade.' },
    ],
  },
  {
    id: 'doces',
    name: 'Doces',
    subtitle: 'Sempre cabe um pouquinho de doçura.',
    image: '/menu-doces.jpg',
    alt: 'Foto ilustrativa de um bolo com cobertura de chocolate',
    items: [
      { name: 'Bolo tradicional (fatia)', price: 12, description: 'Laranja ou milho.' },
      { name: 'Torta mineira (fatia)', price: 22 },
      { name: 'Red velvet (fatia)', price: 22 },
      { name: 'Torta cheesecake (fatia)', price: 21 },
      { name: 'Torta de uva com chocolate (fatia)', price: 21 },
      {
        name: 'Waffle (2 un.)',
        price: 15,
        description: 'Acompanha doce de leite, geleia de frutas vermelhas artesanal ou creme de avelã.',
      },
      { name: 'Torta de limão (fatia)', price: 21 },
      { name: 'Brownie', price: 16 },
      { name: 'Brownie com sorvete', price: 22 },
      { name: 'Bolinho funcional', price: 18, description: 'Sem glúten e sem lactose.' },
    ],
  },
];
