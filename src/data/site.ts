// Everything here is taken from Excelsior Systems' public Carousell and
// Instagram pages as they stood on 1 October 2026. Prices and specs come from
// their listings; review text is quoted verbatim. Client to approve before launch.

export const shop = {
  name: 'Excelsior Systems',
  area: 'Ang Mo Kio, Singapore',
  address: ['3 Ang Mo Kio Street 62, #03-07', 'Singapore 569139'],
  phone: '+65 8555 0225',
  whatsapp: '6585550225',
  since: 2019,
  rating: '5.0',
  reviews: '1,682',
  carousell: 'https://www.carousell.sg/u/excelsior.systems/',
  instagram: 'https://www.instagram.com/excelsior.systems/',
  line: 'Here at Excelsior Systems, you can only do better.',
};

export const promises = [
  '5.0 from 1,682 Carousell reviews',
  'Same-day builds',
  'Local warranty',
  'Brand-new parts from local distributors',
  'Atome instalments',
  'Building since 2019',
];

export function whatsappLink(message: string) {
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const askMessage = "Hi Excelsior, I'd like help choosing a PC. My budget is S$";

export type Category = 'Gaming' | 'Workstation' | 'Home office';

export interface Build {
  id: string;
  cpu: string;
  gpu: string;
  price: number;
  was?: number;
  category: Category;
  image: string;
  specs: string[];
}

export const builds: Build[] = [
  {
    id: '9850x3d-rtx5080',
    cpu: 'Ryzen 7 9850X3D',
    gpu: 'RTX 5080',
    price: 5988,
    category: 'Gaming',
    image: 'b11',
    specs: ['ASUS TUF RTX 5080 16GB OC', '32GB G.Skill Ripjaws M5 Neo RGB DDR5 6000', 'Samsung 9100 Pro 2TB NVMe'],
  },
  {
    id: '9800x3d-rtx5080',
    cpu: 'Ryzen 7 9800X3D',
    gpu: 'RTX 5080',
    price: 4999,
    category: 'Gaming',
    image: 'b02',
    specs: ['ASUS TUF Gaming RTX 5080 OC', '32GB G.Skill Trident Z5 Royal Neo DDR5 6000', 'Samsung 990 Pro 1TB NVMe'],
  },
  {
    id: '7700-rtx5070ti',
    cpu: 'Ryzen 7 7700',
    gpu: 'RTX 5070 Ti',
    price: 4488,
    category: 'Workstation',
    image: 'b06',
    specs: ['MSI RTX 5070 Ti Shadow 3X OC', '32GB ADATA XPG Lancer Blade RGB DDR5 6000', 'TRYX Panorama SE 360 ARGB cooler'],
  },
  {
    id: '7700x-rx9070xt',
    cpu: 'Ryzen 7 7700X',
    gpu: 'RX 9070 XT',
    price: 3288,
    category: 'Gaming',
    image: 'b03',
    specs: ['RX 9070 XT 16GB', '32GB DDR5 6000', 'ADATA Legend 960 1TB NVMe'],
  },
  {
    id: '7800x3d-rx9070xt',
    cpu: 'Ryzen 7 7800X3D',
    gpu: 'RX 9070 XT',
    price: 2888,
    category: 'Gaming',
    image: 'b08',
    specs: ['XFX Swift RX 9070 XT, white', 'ASUS ROG Strix B850-G Gaming Wi-Fi', 'Crucial P310 1TB NVMe'],
  },
  {
    id: '7700-rx9060xt',
    cpu: 'Ryzen 7 7700',
    gpu: 'RX 9060 XT',
    price: 2488,
    category: 'Gaming',
    image: 'b07',
    specs: ['RX 9060 XT', 'DDR5 memory', 'Promo listing with free gift'],
  },
  {
    id: '7700-rtx5060',
    cpu: 'Ryzen 7 7700',
    gpu: 'RTX 5060',
    price: 2388,
    category: 'Gaming',
    image: 'b04',
    specs: ['ASUS Dual RTX 5060 OC', 'KLEVV FIT V 32GB DDR5 6000, white', 'ADATA Legend 960 1TB NVMe'],
  },
  {
    id: '5600x-rtx5060',
    cpu: 'Ryzen 5 5600X',
    gpu: 'RTX 5060',
    price: 1698,
    category: 'Gaming',
    image: 'b05',
    specs: ['RTX 5060 8GB OC', '32GB DDR4 3600', 'Lexar NM790 1TB NVMe'],
  },
  {
    id: '5600x-rtx3050',
    cpu: 'Ryzen 5 5600X',
    gpu: 'RTX 3050',
    price: 1088,
    was: 1188,
    category: 'Gaming',
    image: 'b14',
    specs: ['RTX 3050', 'A first gaming PC for Valorant, CS2 and Dota 2'],
  },
  {
    id: '5500gt-office-set',
    cpu: 'Ryzen 5 5500GT',
    gpu: 'Office set',
    price: 928,
    category: 'Home office',
    image: 'b13',
    specs: ['MSI monitor included', 'Logitech MK295 keyboard and mouse', 'Integrated graphics'],
  },
  {
    id: '5500gt',
    cpu: 'Ryzen 5 5500GT',
    gpu: 'Integrated graphics',
    price: 698,
    category: 'Home office',
    image: 'b16',
    specs: ['Integrated graphics', 'Room to add a graphics card later'],
  },
];

export function buildName(b: Build) {
  return `${b.cpu} · ${b.gpu}`;
}

export function price(n: number) {
  return `S$${n.toLocaleString('en-SG')}`;
}

export function askAbout(b: Build) {
  return whatsappLink(`Hi Excelsior, I'm interested in the ${b.cpu} / ${b.gpu} build listed at ${price(b.price)}. Is it available?`);
}

export interface Review {
  user: string;
  when: string;
  text: string;
}

// Verbatim from carousell.sg/u/excelsior.systems (reviews tab), spelling as posted.
export const reviewList: Review[] = [
  {
    user: 'edsyy',
    when: 'September 2026',
    text: 'The boss doesn’t upsell and even advised me that some of the things I wanted were unnecessary, which I really appreciated.',
  },
  {
    user: 'edsyy',
    when: 'September 2026',
    text: 'The PC was assembled, stress tested and delivered within just 5 hours!',
  },
  {
    user: 'jere.ljw',
    when: '2025',
    text: 'This is my 3rd time getting my rig from the team. To be honest, each of my rig lasts 5 years or even longer!',
  },
  {
    user: 'p.dom',
    when: 'June 2026',
    text: 'Finally found a great place to buy a custom build pc. Today ordered, today pick up!',
  },
  {
    user: 'habibali',
    when: '2025',
    text: 'Understood what I needed to get my new PC after almost 10 years. A proper computer building expert and experience.',
  },
  {
    user: 'kezzokezz',
    when: 'January 2026',
    text: 'Was very helpful and answered my whole list of questions and different builds. Same day delivery :) thank you',
  },
  {
    user: 'justcoco',
    when: '2025',
    text: 'Very informed and kind services provided, with clear pricing and parts.',
  },
];
