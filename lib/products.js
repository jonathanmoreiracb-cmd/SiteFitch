import fs from "fs";
import path from "path";

const COLOR_DEFAULT = "Cor a combinar";

const categoryImages = {
  "iPhones Lacrados": [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1400&auto=format&fit=crop"
  ],
  "iPhones Seminovos": [
    "https://images.unsplash.com/photo-1512499617640-c2f999098c01?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=1400&auto=format&fit=crop"
  ],
  Apple: [
    "https://images.unsplash.com/photo-1585386959984-a41552231691?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523408244872-154c8c6a8c2a?q=80&w=1400&auto=format&fit=crop"
  ],
  Android: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1400&auto=format&fit=crop"
  ],
  "Video Games": [
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop"
  ],
  Acessorios: [
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
  ],
  "Outros Eletronicos": [
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=1400&auto=format&fit=crop"
  ]
};

const PRODUCT_IMAGES_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "produtos"
);

function readImagesFromFolder(folderName) {
  try {
    const folderPath = path.join(PRODUCT_IMAGES_DIR, folderName);
    const files = fs.readdirSync(folderPath, { withFileTypes: true });
    const imageFiles = files
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => /\.(png|jpe?g|webp)$/i.test(name));

    if (imageFiles.length === 0) {
      return null;
    }

    return imageFiles.map(
      (name) => `/images/produtos/${folderName}/${name}`
    );
  } catch (error) {
    return null;
  }
}

const iphone13Images = [
  "/images/produtos/Iphone 13 branco/iphone 13.jpg",
  "/images/produtos/Iphone 13 branco/Screenshot_20260109_132446_Pontofrio.jpg",
  "/images/produtos/Iphone 13 branco/Screenshot_20260109_132821_Pontofrio.jpg",
  "/images/produtos/Iphone 13 branco/Screenshot_20260109_132837_Pontofrio.jpg",
  "/images/produtos/Iphone 13 Preto/Screenshot_20260109_132412_Pontofrio.jpg",
  "/images/produtos/Iphone 13 Preto/Screenshot_20260109_132422_Pontofrio.jpg",
  "/images/produtos/Iphone 13 Preto/Screenshot_20260109_132457_Pontofrio.jpg"
];
const iphone14Images = [
  "/images/produtos/Iphone 14 branco/iphone 14.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133632_Pontofrio.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133642_Pontofrio.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133655_Pontofrio.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133717_Pontofrio.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133732_Pontofrio.jpg",
  "/images/produtos/Iphone 14 branco/Screenshot_20260109_133742_Pontofrio.jpg"
];
const iphone15Images = [
  "/images/produtos/Iphone 15 azul/iphone 15.jpg",
  "/images/produtos/Iphone 15 azul/Screenshot_20260109_133022_Pontofrio.jpg",
  "/images/produtos/Iphone 15 azul/Screenshot_20260109_133034_Pontofrio.jpg",
  "/images/produtos/Iphone 15 azul/Screenshot_20260109_133048_Pontofrio.jpg",
  "/images/produtos/Iphone 15 rosa/Screenshot_20260109_133213_Pontofrio.jpg",
  "/images/produtos/Iphone 15 rosa/Screenshot_20260109_133224_Pontofrio.jpg",
  "/images/produtos/Iphone 15 rosa/Screenshot_20260109_133240_Pontofrio.jpg",
  "/images/produtos/Iphone 15 rosa/Screenshot_20260109_133252_Pontofrio.jpg"
];
const iphone16Images = [
  "/images/produtos/Iphone 16 branco/Screenshot_20260109_133453_Pontofrio.jpg",
  "/images/produtos/Iphone 16 branco/Screenshot_20260109_133504_Pontofrio.jpg",
  "/images/produtos/Iphone 16 branco/Screenshot_20260109_133515_Pontofrio.jpg",
  "/images/produtos/Iphone 16 branco/Screenshot_20260109_133523_Pontofrio.jpg"
];
const iphone16PlusImages = [
  "/images/produtos/Iphone 16 plus preto/Screenshot_20260109_133932_Pontofrio.jpg",
  "/images/produtos/Iphone 16 plus preto/Screenshot_20260109_133944_Pontofrio.jpg",
  "/images/produtos/Iphone 16 plus preto/Screenshot_20260109_133957_Pontofrio.jpg",
  "/images/produtos/Iphone 16 plus preto/Screenshot_20260109_134008_Pontofrio.jpg"
];
const iphone16ProImages = [
  "/images/produtos/Iphone 16 pro natural/Screenshot_20260109_134156_Pontofrio.jpg",
  "/images/produtos/Iphone 16 pro natural/Screenshot_20260109_134200_Pontofrio.jpg"
];
const iphone17Images = [
  "/images/produtos/Iphone 17 branco/Screenshot_20260109_134632_Pontofrio.jpg",
  "/images/produtos/Iphone 17 branco/Screenshot_20260109_134642_Pontofrio.jpg",
  "/images/produtos/Iphone 17 branco/Screenshot_20260109_134652_Pontofrio.jpg",
  "/images/produtos/Iphone 17 branco/Screenshot_20260109_134701_Pontofrio.jpg",
  "/images/produtos/Iphone 17 preto/Screenshot_20260109_134805_Pontofrio.jpg",
  "/images/produtos/Iphone 17 preto/Screenshot_20260109_134818_Pontofrio.jpg",
  "/images/produtos/Iphone 17 preto/Screenshot_20260109_134833_Pontofrio.jpg",
  "/images/produtos/Iphone 17 preto/Screenshot_20260109_134844_Pontofrio.jpg"
];
const iphone17ProLaranjaImages = [
  "/images/produtos/Iphone 17 pro laranja/Screenshot_20260109_135200_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro laranja/Screenshot_20260109_135211_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro laranja/Screenshot_20260109_135222_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro laranja/Screenshot_20260109_135233_Pontofrio.jpg"
];
const iphone17ProSilverImages = [
  "/images/produtos/Iphone 17 pro silver/Screenshot_20260109_135334_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro silver/Screenshot_20260109_135345_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro silver/Screenshot_20260109_135355_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro silver/Screenshot_20260109_135406_Pontofrio.jpg"
];
const iphone17ProMaxAzulImages = [
  "/images/produtos/Iphone 17 pro max azul/Screenshot_20260109_135015_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max azul/Screenshot_20260109_135025_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max azul/Screenshot_20260109_135039_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max azul/Screenshot_20260109_135056_Pontofrio.jpg"
];
const iphone17ProMaxLaranjaImages = [
  "/images/produtos/Iphone 17 pro max laranja/Screenshot_20260109_135200_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max laranja/Screenshot_20260109_135211_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max laranja/Screenshot_20260109_135222_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max laranja/Screenshot_20260109_135233_Pontofrio.jpg"
];
const iphone17ProMaxSilverImages = [
  "/images/produtos/Iphone 17 pro max silver/Screenshot_20260109_135334_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max silver/Screenshot_20260109_135345_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max silver/Screenshot_20260109_135355_Pontofrio.jpg",
  "/images/produtos/Iphone 17 pro max silver/Screenshot_20260109_135406_Pontofrio.jpg"
];
const iphoneAirImages = [
  "/images/produtos/Iphone air/Screenshot_20260109_134410_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134425_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134435_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134443_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134454_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134504_Pontofrio.jpg",
  "/images/produtos/Iphone air/Screenshot_20260109_134517_Pontofrio.jpg"
];
const iphone11SeminovoImages = readImagesFromFolder("Apple iPhone 11 - Seminovo Premium");
const iphone11ProSeminovoImages = [
  "/images/produtos/Apple iPhone 11 Pro - Seminovo Premium/1.webp",
  "/images/produtos/Apple iPhone 11 Pro - Seminovo Premium/2.webp",
  "/images/produtos/Apple iPhone 11 Pro - Seminovo Premium/3.webp"
];
const iphone11ProMaxSeminovoImages = [
  "/images/produtos/Apple iPhone 11 Pro Max - Seminovo Premium/1.webp",
  "/images/produtos/Apple iPhone 11 Pro Max - Seminovo Premium/2.webp",
  "/images/produtos/Apple iPhone 11 Pro Max - Seminovo Premium/3.webp"
];
const iphone12BaseSeminovoImages = [
  "/images/produtos/Apple iPhone 12  - Seminovo Premium/1.webp",
  "/images/produtos/Apple iPhone 12  - Seminovo Premium/2.webp",
  "/images/produtos/Apple iPhone 12  - Seminovo Premium/3.webp"
];
const iphone12ProSeminovoImages = readImagesFromFolder("Apple iPhone 12 Pro - Seminovo Premium");
const iphone12ProMaxSeminovoImages = readImagesFromFolder("Apple iPhone 12 Pro Max - Seminovo Premium");
const iphone13ProSeminovoImages = readImagesFromFolder("Apple iPhone 13 Pro - Seminovo Premium");
const iphone13ProMaxSeminovoImages = readImagesFromFolder("Apple iPhone 13 Pro Max - Seminovo Premium");
const iphone14ProSeminovoImages = readImagesFromFolder("Apple iPhone 14 Pro - Seminovo Premium");
const iphone14ProMaxSeminovoImages = readImagesFromFolder("Apple iPhone 14 Pro Max - Seminovo Premium");
const iphone15ProSeminovoImages = readImagesFromFolder("Apple iPhone 15 Pro - Seminovo Premium");
const iphone15ProMaxSeminovoImages = readImagesFromFolder("Apple iPhone 15 Pro Max - Seminovo Premium");
const iphone16ProMaxSeminovoImages = readImagesFromFolder("Apple iPhone 16 Pro Max - Seminovo Premium");
const appleTVImages = readImagesFromFolder("Apple TV 4K - Novo Lacrado");
const appleWatchSE2Images40 = readImagesFromFolder("Apple Watch SE (2a Geracao) GPS 40mm - Novo Lacrado");
const appleWatchSE2Images44 = readImagesFromFolder("Apple Watch SE (2a Geracao) GPS 44mm - Novo Lacrado");
const appleWatchSE3Images40 = readImagesFromFolder("Apple Watch SE (3a Geracao) GPS 40mm - Novo Lacrado");
const appleWatchSE3Images44 = readImagesFromFolder("Apple Watch SE (3a Geracao) GPS 44mm - Novo Lacrado");
const appleWatchSeries11Images42 = readImagesFromFolder("Apple Watch Series 11 GPS 42mm - Novo Lacrado");
const appleWatchSeries11Images46 = readImagesFromFolder("Apple Watch Series 11 GPS 46mm - Novo Lacrado");
const applePencil2Images = readImagesFromFolder("Caneta Apple Pencil (2a Geracao) - Original");
const airPodsMaxImages = readImagesFromFolder("Headphone Apple AirPods Max - Novo Lacrado");
const ipadA16Images = readImagesFromFolder("iPad 11 (Chip A16) 128GB Wi-Fi - Novo Lacrado");
const macBookM2Images = readImagesFromFolder("MacBook M2 Apple 16GB RAM  256GB SSD");
const airTagImages = readImagesFromFolder("Apple AirTag - Kit com 4 Unidades (Pack C4)");
const ps5Images = readImagesFromFolder("Console PlayStation 5 (PS5) 825GB + Jogo de Brinde");
const xboxSeriesSImages = readImagesFromFolder("Console Xbox Series S 512GB SSD - Digital Edition");
const nintendoSwitchImages = readImagesFromFolder("Console Nintendo Switch Standard Neon - 32GB");
const dualsenseImages = readImagesFromFolder("Controle Sem Fio Sony DualSense - PlayStation 5");
const djiMini4kImages = readImagesFromFolder("Drone DJI Mini 4K - Combo 1 Controle e 1 Bateria");
const starlinkImages = readImagesFromFolder("Kit Antena Starlink Internet Via Satelite - Original");
const realme12ProPlusImages = readImagesFromFolder("Smartphone Realme 12 Pro Plus 5G 512GB  8GB RAM");
const realmeNote60Images = readImagesFromFolder("Smartphone Realme Note 60 128GB  4GB RAM");
const realmeT14Images = readImagesFromFolder("Smartphone Realme T14 256GB  8GB RAM");
const umidigiNote90AImages = readImagesFromFolder("Smartphone Umidigi Note 90A 64GB  4GB RAM");
const umidigiNote90CImages = readImagesFromFolder("Smartphone Umidigi Note 90C 64GB  4GB RAM");
const pocoC71Images = readImagesFromFolder("Smartphone Xiaomi Poco C71 128GB  4GB RAM - Lacrado");
const pocoC8SImages = readImagesFromFolder("Smartphone Xiaomi Poco C85 256GB  12GB RAM (NFC) - Lacrado");
const pocoC75SeminovoImages = readImagesFromFolder(
  "Smartphone Xiaomi Poco C75 256GB  8GB RAM - Seminovo"
);
const pocoF7Images = readImagesFromFolder("Smartphone Xiaomi Poco F7 512GB  12GB RAM - Lacrado");
const pocoX7Images = readImagesFromFolder("Smartphone Xiaomi Poco X7 512GB  12GB RAM - Lacrado");
const pocoX7ProImages = readImagesFromFolder("Smartphone Xiaomi Poco X7 Pro 512GB  12GB RAM - Lacrado");
const redmi15CImages = readImagesFromFolder("Smartphone Xiaomi Redmi 15C 256GB  8GB RAM");
const redmiA5Images = readImagesFromFolder("Smartphone Xiaomi Redmi A5 128GB  4GB RAM");
const redmi14CImages = readImagesFromFolder(
  "Smartphone Xiaomi Redmi 14C 256GB - Seminovo"
);
const redmiNote13ProImages = readImagesFromFolder(
  "Smartphone Xiaomi Redmi Note 13 Pro 256GB  8GB RAM - Seminovo"
);
const redmiNote14Images = readImagesFromFolder("Smartphone Xiaomi Redmi Note 14 256GB  8GB RAM - Lacrado");
const redmiNote14PlusImages = readImagesFromFolder("Smartphone Xiaomi Redmi Note 14 Plus 5G 256GB  8GB RAM - Lacrado");
const tabletPositivoImages = readImagesFromFolder("Tablet Positivo 7 Polegadas - Ideal para Estudos");
const tabletGalaxyTabA9Images = readImagesFromFolder("Tablet Samsung Galaxy Tab A9 64GB (4G + Wi-Fi) - Lacrado");

const productImagesByName = {
  "Apple iPhone 13 128GB - Novo Lacrado": iphone13Images,
  "Apple iPhone 13 128GB - Seminovo Premium": iphone13Images,
  "Apple iPhone 14 128GB - Novo Lacrado": iphone14Images,
  "Apple iPhone 14 128GB - Seminovo Premium": iphone14Images,
  "Apple iPhone 15 128GB - Novo Lacrado": iphone15Images,
  "Apple iPhone 15 128GB - Seminovo Premium": iphone15Images,
  "Apple iPhone 16 128GB - Novo Lacrado": iphone16Images,
  "Apple iPhone 16 Plus 128GB - Novo Lacrado": iphone16PlusImages,
  "Apple iPhone 16 Pro 128GB - Novo Lacrado": iphone16ProImages,
  "Apple iPhone 16 Pro 128GB - Seminovo Premium": iphone16ProImages,
  "Apple iPhone 16 Pro 256GB - Seminovo Premium": iphone16ProImages,
  "Apple iPhone 17 256GB - Novo Lacrado": iphone17Images,
  "Apple iPhone 17 Pro 256GB (Cor: Laranja) - Novo Lacrado":
    iphone17ProLaranjaImages,
  "Apple iPhone 17 Pro 256GB (Cor: Silver) - Novo Lacrado":
    iphone17ProSilverImages,
  "Apple iPhone 17 Pro Max 256GB (Cor: Azul) - Novo Lacrado":
    iphone17ProMaxAzulImages,
  "Apple iPhone 17 Pro Max 256GB (Cor: Laranja) - Novo Lacrado":
    iphone17ProMaxLaranjaImages,
  "Apple iPhone 17 Pro Max 256GB (Cor: Silver) - Novo Lacrado":
    iphone17ProMaxSilverImages,
  "Apple iPhone Air 256GB - Novo Lacrado": iphoneAirImages,
  "Apple iPhone 11 64GB - Seminovo Premium": iphone11SeminovoImages,
  "Apple iPhone 11 128GB - Seminovo Premium": iphone11SeminovoImages,
  "Apple iPhone 11 Pro 64GB - Seminovo Premium": iphone11ProSeminovoImages,
  "Apple iPhone 11 Pro Max 64GB - Seminovo Premium":
    iphone11ProMaxSeminovoImages,
  "Apple iPhone 12 64GB - Seminovo Premium": iphone12BaseSeminovoImages,
  "Apple iPhone 12 128GB - Seminovo Premium": iphone12BaseSeminovoImages,
  "Apple iPhone 12 Pro 128GB - Seminovo Premium": iphone12ProSeminovoImages,
  "Apple iPhone 12 Pro Max 128GB - Seminovo Premium":
    iphone12ProMaxSeminovoImages,
  "Apple iPhone 13 Pro 128GB - Seminovo Premium": iphone13ProSeminovoImages,
  "Apple iPhone 13 Pro Max 128GB - Seminovo Premium":
    iphone13ProMaxSeminovoImages,
  "Apple iPhone 14 Pro 128GB - Seminovo Premium": iphone14ProSeminovoImages,
  "Apple iPhone 14 Pro Max 128GB - Seminovo Premium":
    iphone14ProMaxSeminovoImages,
  "Apple iPhone 15 Pro 128GB - Seminovo Premium": iphone15ProSeminovoImages,
  "Apple iPhone 15 Pro 256GB - Seminovo Premium": iphone15ProSeminovoImages,
  "Apple iPhone 15 Pro Max 256GB - Seminovo Premium":
    iphone15ProMaxSeminovoImages,
  "Apple iPhone 16 Pro Max 256GB - Seminovo Premium":
    iphone16ProMaxSeminovoImages,
  "Headphone Apple AirPods Max - Novo Lacrado": airPodsMaxImages,
  "Apple Watch SE (2a Geracao) GPS 40mm - Novo Lacrado":
    appleWatchSE2Images40,
  "Apple Watch SE (2a Geracao) GPS 44mm - Novo Lacrado":
    appleWatchSE2Images44,
  "Apple Watch SE (3a Geracao) GPS 40mm - Novo Lacrado":
    appleWatchSE3Images40,
  "Apple Watch SE (3a Geracao) GPS 44mm - Novo Lacrado":
    appleWatchSE3Images44,
  "Apple Watch Series 11 GPS 42mm - Novo Lacrado":
    appleWatchSeries11Images42,
  "Apple Watch Series 11 GPS 46mm - Novo Lacrado":
    appleWatchSeries11Images46,
  "MacBook M2 Apple 16GB RAM / 256GB SSD": macBookM2Images,
  "iPad 11\" (Chip A16) 128GB Wi-Fi - Novo Lacrado": ipadA16Images,
  "Caneta Apple Pencil (2a Geracao) - Original": applePencil2Images,
  "Apple AirTag - Kit com 4 Unidades (Pack C/4)": airTagImages,
  "Apple TV 4K - Novo Lacrado": appleTVImages,
  "Console PlayStation 5 (PS5) 825GB + Jogo de Brinde": ps5Images,
  "Console Xbox Series S 512GB SSD - Digital Edition": xboxSeriesSImages,
  "Console Nintendo Switch Standard Neon - 32GB": nintendoSwitchImages,
  "Controle Sem Fio Sony DualSense - PlayStation 5": dualsenseImages,
  "Drone DJI Mini 4K - Combo 1 Controle e 1 Bateria": djiMini4kImages,
  "Kit Antena Starlink Internet Via Satelite - Original": starlinkImages,
  "Smartphone Realme 12 Pro Plus 5G 512GB / 8GB RAM":
    realme12ProPlusImages,
  "Smartphone Realme Note 60 128GB / 4GB RAM": realmeNote60Images,
  "Smartphone Realme T14 256GB / 8GB RAM": realmeT14Images,
  "Smartphone Umidigi Note 90A 64GB / 4GB RAM": umidigiNote90AImages,
  "Smartphone Umidigi Note 90C 64GB / 4GB RAM": umidigiNote90CImages,
  "Smartphone Xiaomi Redmi A5 128GB / 4GB RAM": redmiA5Images,
  "Smartphone Xiaomi Redmi 14C 256GB - Seminovo": redmi14CImages,
  "Smartphone Xiaomi Redmi Note 13 Pro 256GB / 8GB RAM - Seminovo":
    redmiNote13ProImages,
  "Smartphone Xiaomi Redmi 15C 256GB / 8GB RAM": redmi15CImages,
  "Smartphone Xiaomi Redmi Note 14 256GB / 8GB RAM - Lacrado":
    redmiNote14Images,
  "Smartphone Xiaomi Redmi Note 14 Plus 5G 256GB / 8GB RAM - Lacrado":
    redmiNote14PlusImages,
  "Smartphone Xiaomi Poco C71 128GB / 4GB RAM - Lacrado": pocoC71Images,
  "Smartphone Xiaomi Poco C8S 256GB / 12GB RAM (NFC) - Lacrado":
    pocoC8SImages,
  "Smartphone Xiaomi Poco C75 256GB / 8GB RAM - Seminovo":
    pocoC75SeminovoImages,
  "Smartphone Xiaomi Poco X7 512GB / 12GB RAM - Lacrado": pocoX7Images,
  "Smartphone Xiaomi Poco X7 Pro 512GB / 12GB RAM - Lacrado":
    pocoX7ProImages,
  "Smartphone Xiaomi Poco F7 512GB / 12GB RAM - Lacrado": pocoF7Images,
  "Tablet Positivo 7 Polegadas - Ideal para Estudos": tabletPositivoImages,
  "Tablet Samsung Galaxy Tab A9 64GB (4G + Wi-Fi) - Lacrado":
    tabletGalaxyTabA9Images
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const sortImagesByName = (images) => {
  if (!Array.isArray(images)) {
    return images;
  }
  return [...images].sort((a, b) =>
    a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" })
  );
};

const productDetailsByName = {
  "Apple iPhone 11 64GB - Seminovo Premium": {
    description: [
      "O iPhone perfeito para quem quer desempenho Apple com custo-beneficio premium.",
      "Ideal para redes sociais, fotos do dia a dia e fluidez em apps, com a experiencia iOS que entrega estabilidade, seguranca e praticidade em cada toque.",
      "",
      "Principais Destaques",
      "",
      "Chip A13 Bionic (rapido e confiavel no uso diario)",
      "",
      "Tela 6,1\" com cores vivas e excelente brilho",
      "",
      "Camera dupla 12MP com Modo Retrato e gravacao 4K",
      "",
      "Face ID para desbloqueio rapido e seguro",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia para sua compra ficar tranquila."
    ].join("\n"),
    highlights: [
      "Chip A13 Bionic (rapido e confiavel no uso diario)",
      "Tela 6,1\" com cores vivas e excelente brilho",
      "Camera dupla 12MP com Modo Retrato e gravacao 4K",
      "Face ID para desbloqueio rapido e seguro"
    ]
  },
  "Apple iPhone 11 128GB - Seminovo Premium": {
    description: [
      "Mais espaco, mais liberdade: o iPhone 11 128GB e o equilibrio perfeito.",
      "Excelente para quem fotografa bastante, salva videos, usa WhatsApp/Instagram intensamente e quer tudo rodando liso, com armazenamento que acompanha seu ritmo.",
      "",
      "Principais Destaques",
      "",
      "128GB para guardar fotos, videos e apps sem sufoco",
      "",
      "Chip A13 Bionic com otima performance",
      "",
      "Camera dupla 12MP com fotos nitidas e naturais",
      "",
      "Face ID com seguranca e praticidade no dia a dia",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "128GB para guardar fotos, videos e apps sem sufoco",
      "Chip A13 Bionic com otima performance",
      "Camera dupla 12MP com fotos nitidas e naturais",
      "Face ID com seguranca e praticidade no dia a dia"
    ]
  },
  "Apple iPhone 11 Pro 64GB - Seminovo Premium": {
    description: [
      "Um iPhone Pro de verdade: acabamento premium e camera de respeito.",
      "Perfeito para quem busca um celular sofisticado, compacto e poderoso, com fotos em nivel superior e experiencia premium em todos os detalhes.",
      "",
      "Principais Destaques",
      "",
      "Tela Super Retina XDR com contraste impressionante",
      "",
      "Sistema de camera tripla 12MP (mais versatilidade)",
      "",
      "Chip A13 Bionic com alto desempenho",
      "",
      "Construcao premium com sensacao de aparelho top de linha",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Tela Super Retina XDR com contraste impressionante",
      "Sistema de camera tripla 12MP (mais versatilidade)",
      "Chip A13 Bionic com alto desempenho",
      "Construcao premium com sensacao de aparelho top de linha"
    ]
  },
  "Apple iPhone 11 Pro Max 64GB - Seminovo Premium": {
    description: [
      "Tela gigante, experiencia Pro e presenca de flagship ate hoje.",
      "Ideal para quem ama assistir videos, jogar e trabalhar pelo celular, com conforto visual e o padrao Pro de qualidade Apple.",
      "",
      "Principais Destaques",
      "",
      "Tela grande Super Retina XDR (imersiva e elegante)",
      "",
      "Camera tripla 12MP para fotos e videos mais completos",
      "",
      "Chip A13 Bionic com otima fluidez",
      "",
      "Excelente autonomia para rotina intensa",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Tela grande Super Retina XDR (imersiva e elegante)",
      "Camera tripla 12MP para fotos e videos mais completos",
      "Chip A13 Bionic com otima fluidez",
      "Excelente autonomia para rotina intensa"
    ]
  },
  "Apple iPhone 12 64GB - Seminovo Premium": {
    description: [
      "Design moderno, 5G e qualidade Apple que impressiona no primeiro toque.",
      "Um modelo ideal para quem quer um iPhone mais atual, com visual premium e desempenho solido para uso diario e redes sociais.",
      "",
      "Principais Destaques",
      "",
      "Tela OLED Super Retina XDR com alta definicao",
      "",
      "Compativel com 5G para internet mais rapida",
      "",
      "Chip A14 Bionic com performance excelente",
      "",
      "Ceramic Shield para mais resistencia no uso diario",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Tela OLED Super Retina XDR com alta definicao",
      "Compativel com 5G para internet mais rapida",
      "Chip A14 Bionic com performance excelente",
      "Ceramic Shield para mais resistencia no uso diario"
    ]
  },
  "Apple iPhone 12 Pro 128GB - Seminovo Premium": {
    description: [
      "O Pro perfeito para quem quer elegancia, potencia e fotografia superior.",
      "Feito para quem gosta de registrar tudo com qualidade, mantendo um visual premium e desempenho forte em qualquer app.",
      "",
      "Principais Destaques",
      "",
      "128GB para fotos, videos e apps sem limites",
      "",
      "Sistema de cameras Pro com alto nivel de detalhes",
      "",
      "Chip A14 Bionic (rapido e eficiente)",
      "",
      "Construcao premium com acabamento sofisticado",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "128GB para fotos, videos e apps sem limites",
      "Sistema de cameras Pro com alto nivel de detalhes",
      "Chip A14 Bionic (rapido e eficiente)",
      "Construcao premium com acabamento sofisticado"
    ]
  },
  "Apple iPhone 12 Pro Max 128GB - Seminovo Premium": {
    description: [
      "O iPhone Pro Max para quem exige o maximo em tela e experiencia.",
      "Perfeito para quem quer um celular grande, premium e poderoso para trabalho, videos, redes sociais e fotos em altissimo nivel.",
      "",
      "Principais Destaques",
      "",
      "Tela grande OLED Super Retina XDR",
      "",
      "128GB de armazenamento para rotina intensa",
      "",
      "Sistema de cameras Pro para fotos e videos impressionantes",
      "",
      "Chip A14 Bionic com otimo desempenho geral",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Tela grande OLED Super Retina XDR",
      "128GB de armazenamento para rotina intensa",
      "Sistema de cameras Pro para fotos e videos impressionantes",
      "Chip A14 Bionic com otimo desempenho geral"
    ]
  },
  "Apple iPhone 13 128GB - Novo Lacrado": {
    description: [
      "O queridinho que entrega equilibrio perfeito: desempenho, camera e fluidez.",
      "Uma escolha premium para quem quer um iPhone rapido, confiavel e moderno - ideal para fotos, videos, redes sociais e uso diario sem travar.",
      "",
      "Principais Destaques",
      "",
      "128GB de armazenamento",
      "",
      "Chip potente com excelente eficiencia",
      "",
      "Camera dupla avancada com otimo resultado em baixa luz",
      "",
      "Tela Super Retina XDR com qualidade incrivel",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "128GB de armazenamento",
      "Chip potente com excelente eficiencia",
      "Camera dupla avancada com otimo resultado em baixa luz",
      "Tela Super Retina XDR com qualidade incrivel"
    ]
  },
  "Apple iPhone 14 128GB - Novo Lacrado": {
    description: [
      "Um iPhone moderno, seguro e pronto para tudo - do trabalho ao lifestyle.",
      "Perfeito para quem quer um aparelho atual, com cameras consistentes, otima performance e experiencia Apple impecavel por anos.",
      "",
      "Principais Destaques",
      "",
      "128GB de armazenamento",
      "",
      "Otimo desempenho para multitarefas e redes sociais",
      "",
      "Cameras avancadas com excelente nitidez",
      "",
      "Face ID + iOS com seguranca e estabilidade",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "128GB de armazenamento",
      "Otimo desempenho para multitarefas e redes sociais",
      "Cameras avancadas com excelente nitidez",
      "Face ID + iOS com seguranca e estabilidade"
    ]
  },
  "Apple iPhone 15 128GB - Novo Lacrado": {
    description: [
      "O iPhone que elevou o padrao: mais camera, mais desempenho, mais presenca.",
      "Ideal para quem quer uma experiencia premium atual, com fotos mais profissionais e um aparelho que se destaca em qualquer cenario.",
      "",
      "Principais Destaques",
      "",
      "128GB de armazenamento",
      "",
      "Camera de alta resolucao com fotos mais ricas em detalhes",
      "",
      "Performance de nova geracao para tudo rodar liso",
      "",
      "Design premium com acabamento sofisticado",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "128GB de armazenamento",
      "Camera de alta resolucao com fotos mais ricas em detalhes",
      "Performance de nova geracao para tudo rodar liso",
      "Design premium com acabamento sofisticado"
    ]
  },
  "Apple iPhone 16 128GB - Novo Lacrado": {
    description: [
      "Novo, elegante e poderoso: o iPhone 16 e tecnologia com status.",
      "Perfeito para quem quer velocidade, camera incrivel e um iPhone pronto para acompanhar uma rotina intensa - com fluidez e presenca premium.",
      "",
      "Principais Destaques",
      "",
      "Tela Super Retina XDR de 6,1\"",
      "",
      "128GB de armazenamento",
      "",
      "Design moderno com experiencia iOS impecavel",
      "",
      "Cameras avancadas para fotos e videos nitidos",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela Super Retina XDR de 6,1\"",
      "128GB de armazenamento",
      "Design moderno com experiencia iOS impecavel",
      "Cameras avancadas para fotos e videos nitidos"
    ]
  },
  "Apple iPhone 16 Plus 128GB - Novo Lacrado": {
    description: [
      "Mais tela. Mais imersao. Mais impacto - o Plus e para quem gosta de presenca.",
      "Ideal para quem assiste muito conteudo, joga, trabalha no celular e quer mais conforto visual, sem abrir mao do luxo Apple.",
      "",
      "Principais Destaques",
      "",
      "Tela Super Retina XDR de 6,7\"",
      "",
      "128GB de armazenamento",
      "",
      "Excelente experiencia para videos, jogos e produtividade",
      "",
      "Design grande e elegante com acabamento premium",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela Super Retina XDR de 6,7\"",
      "128GB de armazenamento",
      "Excelente experiencia para videos, jogos e produtividade",
      "Design grande e elegante com acabamento premium"
    ]
  },
  "Apple iPhone 16 Pro 128GB - Novo Lacrado": {
    description: [
      "O Pro para quem nao aceita \"bom\" - so aceita o melhor.",
      "Performance absurda, visual premium e tecnologia de ponta: um iPhone feito para quem quer excelencia em cada detalhe.",
      "",
      "Principais Destaques",
      "",
      "Chip A18 Pro com foco em desempenho",
      "",
      "Tela Super Retina XDR de 6,3\"",
      "",
      "Resistencia IP68 (agua e poeira)",
      "",
      "Apple Intelligence integrado ao sistema",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Chip A18 Pro com foco em desempenho",
      "Tela Super Retina XDR de 6,3\"",
      "Resistencia IP68 (agua e poeira)",
      "Apple Intelligence integrado ao sistema"
    ]
  },
  "Apple iPhone Air 256GB - Novo Lacrado": {
    description: [
      "O iPhone mais fino ja feito: luxo minimalista com potencia absurda.",
      "Feito para quem quer exclusividade, leveza na mao e performance de linha Pro, com um design que chama atencao sem esforco.",
      "",
      "Principais Destaques",
      "",
      "Design ultrafino com estrutura em titanio",
      "",
      "Chip A19 Pro (poder de Pro por dentro)",
      "",
      "Tela 6,5\" para maxima imersao",
      "",
      "Camera Fusion 48MP + camera frontal Center Stage",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Design ultrafino com estrutura em titanio",
      "Chip A19 Pro (poder de Pro por dentro)",
      "Tela 6,5\" para maxima imersao",
      "Camera Fusion 48MP + camera frontal Center Stage"
    ]
  },
  "Apple iPhone 17 256GB - Novo Lacrado": {
    description: [
      "O novo padrao de iPhone: mais fluidez, mais camera, mais futuro.",
      "Perfeito para quem quer um aparelho atual, premium e pronto para os proximos anos, com tela extremamente suave e desempenho de nova geracao.",
      "",
      "Principais Destaques",
      "",
      "Tela 6,3\" com ProMotion ate 120Hz",
      "",
      "Chip A19 para performance avancada",
      "",
      "Sistema de camera 48MP Dual Fusion",
      "",
      "Armazenamento 256GB",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela 6,3\" com ProMotion ate 120Hz",
      "Chip A19 para performance avancada",
      "Sistema de camera 48MP Dual Fusion",
      "Armazenamento 256GB"
    ]
  },
  "Apple iPhone 17 Pro 256GB (Cor: Laranja) - Novo Lacrado": {
    description: [
      "O iPhone Pro que entrega status, potencia e camera no nivel mais alto.",
      "A escolha de quem exige o maximo - com acabamento exclusivo, desempenho extremo e cameras feitas para resultado profissional.",
      "",
      "Principais Destaques",
      "",
      "Chip A19 Pro (performance Pro real)",
      "",
      "Tela Super Retina XDR de 6,3\"",
      "",
      "Sistema de camera Pro Fusion 48MP",
      "",
      "Cor Laranja-Cosmico (premium e exclusiva)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Chip A19 Pro (performance Pro real)",
      "Tela Super Retina XDR de 6,3\"",
      "Sistema de camera Pro Fusion 48MP",
      "Cor Laranja-Cosmico (premium e exclusiva)"
    ]
  },
  "Apple iPhone 17 Pro Max 256GB (Cor: Laranja) - Novo Lacrado": {
    description: [
      "O topo do topo: tela gigante, maxima potencia e presenca absoluta.",
      "Para quem quer o melhor iPhone possivel - com experiencia cinematografica, performance absurda e o modelo mais desejado da linha.",
      "",
      "Principais Destaques",
      "",
      "Chip A19 Pro com alto desempenho",
      "",
      "Tela Super Retina XDR de 6,9\"",
      "",
      "Sistema de camera Pro Fusion 48MP com zoom avancado",
      "",
      "Armazenamento 256GB com espaco de sobra",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Chip A19 Pro com alto desempenho",
      "Tela Super Retina XDR de 6,9\"",
      "Sistema de camera Pro Fusion 48MP com zoom avancado",
      "Armazenamento 256GB com espaco de sobra"
    ]
  },
  "Headphone Apple AirPods Max - Novo Lacrado": {
    description: [
      "Som premium de verdade - com presenca, conforto e potencia em cada detalhe.",
      "O AirPods Max e ideal para quem quer uma experiencia completa: musicas com qualidade de estudio, chamadas cristalinas e um acabamento sofisticado que combina com seu estilo.",
      "",
      "Principais Destaques",
      "",
      "Audio de alta fidelidade com graves profundos e definicao premium",
      "",
      "Cancelamento Ativo de Ruido para foco total",
      "",
      "Modo Ambiente para ouvir o mundo sem tirar o headphone",
      "",
      "Conforto superior com encaixe premium para longos periodos",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Audio de alta fidelidade com graves profundos e definicao premium",
      "Cancelamento Ativo de Ruido para foco total",
      "Modo Ambiente para ouvir o mundo sem tirar o headphone",
      "Conforto superior com encaixe premium para longos periodos"
    ]
  },
  "Apple Watch SE (2a Geracao) GPS 40mm - Novo Lacrado": {
    description: [
      "Seu dia no controle - com estilo, saude e praticidade no pulso.",
      "Perfeito para quem quer monitorar treinos, receber notificacoes e ter mais produtividade, com um relogio elegante e rapido para acompanhar sua rotina.",
      "",
      "Principais Destaques",
      "",
      "GPS integrado para treinos ao ar livre",
      "",
      "Monitoramento de batimentos cardiacos e atividades",
      "",
      "Notificacoes, chamadas e apps direto no pulso",
      "",
      "Leve, confortavel e ideal para uso diario (40mm)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "GPS integrado para treinos ao ar livre",
      "Monitoramento de batimentos cardiacos e atividades",
      "Notificacoes, chamadas e apps direto no pulso",
      "Leve, confortavel e ideal para uso diario (40mm)"
    ]
  },
  "Apple Watch SE (2a Geracao) GPS 44mm - Novo Lacrado": {
    description: [
      "Mais tela, mais impacto - um smartwatch premium que encaixa perfeitamente na sua rotina.",
      "Ideal para quem gosta de visor maior e quer acompanhar exercicios, mensagens e produtividade com mais conforto e visual marcante.",
      "",
      "Principais Destaques",
      "",
      "GPS integrado com alta precisao",
      "",
      "Tela maior (44mm) para melhor visualizacao",
      "",
      "Recursos de saude e atividades para o dia a dia",
      "",
      "Notificacoes e controle de apps com praticidade total",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "GPS integrado com alta precisao",
      "Tela maior (44mm) para melhor visualizacao",
      "Recursos de saude e atividades para o dia a dia",
      "Notificacoes e controle de apps com praticidade total"
    ]
  },
  "Apple Watch SE (3a Geracao) GPS 40mm - Novo Lacrado": {
    description: [
      "Tecnologia inteligente com estetica minimalista - perfeito para quem vive em movimento.",
      "Um relogio completo para quem busca performance, praticidade e recursos essenciais de saude e treino com o padrao Apple.",
      "",
      "Principais Destaques",
      "",
      "GPS integrado para caminhadas e corridas",
      "",
      "Monitoramento inteligente de atividade e bem-estar",
      "",
      "Notificacoes e integracao total com iPhone",
      "",
      "Design leve e elegante (40mm)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "GPS integrado para caminhadas e corridas",
      "Monitoramento inteligente de atividade e bem-estar",
      "Notificacoes e integracao total com iPhone",
      "Design leve e elegante (40mm)"
    ]
  },
  "Apple Watch SE (3a Geracao) GPS 44mm - Novo Lacrado": {
    description: [
      "Para quem quer mais presenca no pulso - com performance e estilo Apple.",
      "Com tela maior e visual premium, ele e ideal para rotina intensa: treinos, trabalho, notificacoes e praticidade em tempo real.",
      "",
      "Principais Destaques",
      "",
      "Tela ampla (44mm) com otima visualizacao",
      "",
      "GPS integrado para esportes e mobilidade",
      "",
      "Monitoramento de saude e atividades diarias",
      "",
      "Conectividade perfeita com o ecossistema Apple",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela ampla (44mm) com otima visualizacao",
      "GPS integrado para esportes e mobilidade",
      "Monitoramento de saude e atividades diarias",
      "Conectividade perfeita com o ecossistema Apple"
    ]
  },
  "Apple Watch Series 11 GPS 42mm - Novo Lacrado": {
    description: [
      "Elegancia e performance no pulso - um smartwatch para quem exige mais.",
      "Ideal para acompanhar sua rotina com sofisticacao: saude, treinos, produtividade e notificacoes, tudo com a fluidez e o padrao premium Apple.",
      "",
      "Principais Destaques",
      "",
      "GPS integrado com rastreamento preciso",
      "",
      "Monitoramento avancado de atividades do dia a dia",
      "",
      "Notificacoes e apps com resposta rapida",
      "",
      "Design refinado com otimo conforto (42mm)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "GPS integrado com rastreamento preciso",
      "Monitoramento avancado de atividades do dia a dia",
      "Notificacoes e apps com resposta rapida",
      "Design refinado com otimo conforto (42mm)"
    ]
  },
  "Apple Watch Series 11 GPS 46mm - Novo Lacrado": {
    description: [
      "A experiencia Apple Watch em tamanho premium - mais tela, mais presenca, mais impacto.",
      "Perfeito para quem quer uma tela maior para ver notificacoes, treinos e informacoes com mais conforto e visual imponente.",
      "",
      "Principais Destaques",
      "",
      "Tela maior (46mm) com visual marcante",
      "",
      "GPS integrado para treino e mobilidade",
      "",
      "Recursos completos para produtividade e saude",
      "",
      "Integracao total com iPhone e ecossistema Apple",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela maior (46mm) com visual marcante",
      "GPS integrado para treino e mobilidade",
      "Recursos completos para produtividade e saude",
      "Integracao total com iPhone e ecossistema Apple"
    ]
  },
  "MacBook M2 Apple 16GB RAM / 256GB SSD": {
    description: [
      "Potencia, elegancia e performance - um Mac feito para quem trabalha em alto nivel.",
      "Ideal para produtividade, edicao leve a intermediaria, estudos e negocios, com velocidade impressionante e uma experiencia premium em cada detalhe.",
      "",
      "Principais Destaques",
      "",
      "Chip Apple M2: rapido e eficiente",
      "",
      "16GB RAM para multitarefas sem travar",
      "",
      "SSD 256GB com inicializacao e abertura de apps instantanea",
      "",
      "Tela premium e bateria excelente para rotina intensa",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Chip Apple M2: rapido e eficiente",
      "16GB RAM para multitarefas sem travar",
      "SSD 256GB com inicializacao e abertura de apps instantanea",
      "Tela premium e bateria excelente para rotina intensa"
    ]
  },
  "iPad 11\" (Chip A16) 128GB Wi-Fi - Novo Lacrado": {
    description: [
      "Versatil, elegante e poderoso - o iPad perfeito para estudo, trabalho e lazer.",
      "Ideal para quem quer leveza e desempenho para videos, leitura, produtividade e ate criacao de conteudo com a fluidez do sistema Apple.",
      "",
      "Principais Destaques",
      "",
      "Tela 11\" com visual amplo e confortavel",
      "",
      "Chip A16 com otimo desempenho e fluidez",
      "",
      "128GB para apps, arquivos e midias",
      "",
      "Wi-Fi rapido para trabalho e entretenimento",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Tela 11\" com visual amplo e confortavel",
      "Chip A16 com otimo desempenho e fluidez",
      "128GB para apps, arquivos e midias",
      "Wi-Fi rapido para trabalho e entretenimento"
    ]
  },
  "Caneta Apple Pencil (2a Geracao) - Original": {
    description: [
      "O toque profissional que transforma seu iPad em uma ferramenta de criacao.",
      "Perfeita para anotacoes, desenhos, design e produtividade, com precisao e resposta natural - como se fosse papel, so que premium.",
      "",
      "Principais Destaques",
      "",
      "Escrita e desenho com alta precisao e zero atrasos",
      "",
      "Sensibilidade a pressao e inclinacao para tracos naturais",
      "",
      "Carregamento pratico e conexao instantanea",
      "",
      "Ideal para estudar, trabalhar e criar com mais nivel",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Escrita e desenho com alta precisao e zero atrasos",
      "Sensibilidade a pressao e inclinacao para tracos naturais",
      "Carregamento pratico e conexao instantanea",
      "Ideal para estudar, trabalhar e criar com mais nivel"
    ]
  },
  "Apple AirTag - Kit com 4 Unidades (Pack C/4)": {
    description: [
      "Nunca mais perca o que e importante - rastreamento inteligente com padrao Apple.",
      "Perfeito para chaves, mochilas, malas e itens valiosos. Voce localiza com facilidade e ganha mais tranquilidade no dia a dia e em viagens.",
      "",
      "Principais Destaques",
      "",
      "Kit com 4 unidades para maxima protecao",
      "",
      "Localizacao inteligente pelo ecossistema Apple",
      "",
      "Ideal para viagens, carro, mochila e objetos do dia a dia",
      "",
      "Configuracao simples e uso extremamente pratico",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Kit com 4 unidades para maxima protecao",
      "Localizacao inteligente pelo ecossistema Apple",
      "Ideal para viagens, carro, mochila e objetos do dia a dia",
      "Configuracao simples e uso extremamente pratico"
    ]
  },
  "Apple TV 4K - Novo Lacrado": {
    description: [
      "Transforme sua TV em um cinema premium - com qualidade 4K e fluidez Apple.",
      "Ideal para streaming com imagem nitida, cores incriveis e navegacao rapida, deixando sua sala com experiencia digna de cinema.",
      "",
      "Principais Destaques",
      "",
      "Resolucao 4K com alta qualidade de imagem",
      "",
      "Sistema rapido, fluido e facil de usar",
      "",
      "Compativel com os principais apps de streaming",
      "",
      "Integracao completa com o ecossistema Apple",
      "",
      "\u2705 Garantia Fitch Tecnologia: 1 ano de garantia (Apple Lacrado)."
    ].join("\n"),
    highlights: [
      "Resolucao 4K com alta qualidade de imagem",
      "Sistema rapido, fluido e facil de usar",
      "Compativel com os principais apps de streaming",
      "Integracao completa com o ecossistema Apple"
    ]
  },
  "Smartphone Xiaomi Redmi A5 128GB / 4GB RAM": {
    description: [
      "O essencial premium: rapido, bonito e pronto pra te acompanhar o dia inteiro.",
      "Ideal pra quem quer um smartphone confiavel para WhatsApp, Instagram, videos e tarefas do dia a dia, com fluidez e armazenamento de sobra.",
      "",
      "Principais Destaques",
      "",
      "128GB de armazenamento para apps e fotos",
      "",
      "4GB de RAM para uso diario com boa fluidez",
      "",
      "Tela ampla para redes sociais e videos",
      "",
      "Otima autonomia para rotina intensa",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "128GB de armazenamento para apps e fotos",
      "4GB de RAM para uso diario com boa fluidez",
      "Tela ampla para redes sociais e videos",
      "Otima autonomia para rotina intensa"
    ]
  },
  "Smartphone Xiaomi Redmi 15C 256GB / 8GB RAM": {
    description: [
      "Mais espaco, mais velocidade - o tipo de celular que voce usa sem limites.",
      "Perfeito para quem salva muita coisa, usa varios apps ao mesmo tempo e quer desempenho acima da media com armazenamento premium.",
      "",
      "Principais Destaques",
      "",
      "256GB de armazenamento para maxima liberdade",
      "",
      "8GB de RAM para multitarefas com folga",
      "",
      "Excelente para redes sociais, estudos e trabalho",
      "",
      "Experiencia Xiaomi fluida e moderna",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "256GB de armazenamento para maxima liberdade",
      "8GB de RAM para multitarefas com folga",
      "Excelente para redes sociais, estudos e trabalho",
      "Experiencia Xiaomi fluida e moderna"
    ]
  },
  "Smartphone Xiaomi Redmi Note 14 256GB / 8GB RAM - Lacrado": {
    description: [
      "Elegancia e potencia na medida certa - lacrado, pronto pra impressionar.",
      "Um smartphone completo para quem quer performance, espaco e um visual premium, perfeito para rotina intensa e conteudo no dia a dia.",
      "",
      "Principais Destaques",
      "",
      "Produto Lacrado (novo, impecavel)",
      "",
      "256GB de armazenamento para tudo que voce precisa",
      "",
      "8GB de RAM para desempenho rapido",
      "",
      "Ideal para fotos, videos e multitarefas",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Produto Lacrado (novo, impecavel)",
      "256GB de armazenamento para tudo que voce precisa",
      "8GB de RAM para desempenho rapido",
      "Ideal para fotos, videos e multitarefas"
    ]
  },
  "Smartphone Xiaomi Redmi Note 14 Plus 5G 256GB / 8GB RAM - Lacrado": {
    description: [
      "Velocidade 5G e presenca premium - um aparelho pronto pro futuro.",
      "Ideal para quem quer internet ultra rapida, desempenho solido e um smartphone lacrado que entrega status e eficiencia no dia a dia.",
      "",
      "Principais Destaques",
      "",
      "5G para conexao mais rapida e estavel",
      "",
      "Produto Lacrado (novo)",
      "",
      "256GB de armazenamento para uso sem preocupacao",
      "",
      "8GB de RAM para fluidez em apps e jogos",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "5G para conexao mais rapida e estavel",
      "Produto Lacrado (novo)",
      "256GB de armazenamento para uso sem preocupacao",
      "8GB de RAM para fluidez em apps e jogos"
    ]
  },
  "Smartphone Xiaomi Poco C71 128GB / 4GB RAM - Lacrado": {
    description: [
      "Um Poco lacrado com entrega inteligente: economico, eficiente e confiavel.",
      "Perfeito para quem quer um celular novo e pronto para rotina de redes sociais, chamadas e tarefas essenciais com otima experiencia.",
      "",
      "Principais Destaques",
      "",
      "Produto Lacrado (novo)",
      "",
      "128GB de armazenamento para o dia a dia",
      "",
      "4GB de RAM para navegacao fluida",
      "",
      "Excelente custo-beneficio com padrao Xiaomi",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Produto Lacrado (novo)",
      "128GB de armazenamento para o dia a dia",
      "4GB de RAM para navegacao fluida",
      "Excelente custo-beneficio com padrao Xiaomi"
    ]
  },
  "Smartphone Xiaomi Poco C8S 256GB / 12GB RAM (NFC) - Lacrado": {
    description: [
      "Potencia de verdade com 12GB RAM - e ainda com NFC pra facilitar sua vida.",
      "Ideal para quem quer desempenho forte, muito espaco e praticidade para pagamentos por aproximacao e rotina acelerada.",
      "",
      "Principais Destaques",
      "",
      "12GB de RAM para desempenho acima do padrao",
      "",
      "256GB de armazenamento (muito mais liberdade)",
      "",
      "NFC para pagamentos por aproximacao",
      "",
      "Produto Lacrado (novo, impecavel)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "12GB de RAM para desempenho acima do padrao",
      "256GB de armazenamento (muito mais liberdade)",
      "NFC para pagamentos por aproximacao",
      "Produto Lacrado (novo, impecavel)"
    ]
  },
  "Smartphone Xiaomi Poco X7 512GB / 12GB RAM - Lacrado": {
    description: [
      "Ultra memoria, ultra espaco - um smartphone feito para quem exige mais.",
      "Perfeito para quem joga, grava videos, baixa muita coisa e quer um aparelho que aguenta a rotina pesada sem perder performance.",
      "",
      "Principais Destaques",
      "",
      "512GB de armazenamento (nivel premium)",
      "",
      "12GB de RAM para alta performance",
      "",
      "Produto Lacrado (novo)",
      "",
      "Ideal para jogos, multitarefas e uso intenso",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "512GB de armazenamento (nivel premium)",
      "12GB de RAM para alta performance",
      "Produto Lacrado (novo)",
      "Ideal para jogos, multitarefas e uso intenso"
    ]
  },
  "Smartphone Xiaomi Poco X7 Pro 512GB / 12GB RAM - Lacrado": {
    description: [
      "Performance Pro para quem quer velocidade absurda e presenca de topo.",
      "Ideal para quem busca potencia de verdade, com espaco gigantesco e fluidez para jogos, edicao e multitarefas pesadas.",
      "",
      "Principais Destaques",
      "",
      "Versao Pro com proposta de alto desempenho",
      "",
      "512GB de armazenamento para nao faltar espaco",
      "",
      "12GB de RAM para maxima fluidez",
      "",
      "Produto Lacrado (novo)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Versao Pro com proposta de alto desempenho",
      "512GB de armazenamento para nao faltar espaco",
      "12GB de RAM para maxima fluidez",
      "Produto Lacrado (novo)"
    ]
  },
  "Smartphone Xiaomi Poco F7 512GB / 12GB RAM - Lacrado": {
    description: [
      "Linha F e performance pura - um aparelho para quem quer \"o mais rapido\".",
      "Perfeito para quem ama velocidade, jogos, apps pesados e quer um smartphone lacrado com pegada premium e desempenho agressivo.",
      "",
      "Principais Destaques",
      "",
      "512GB de armazenamento (uso sem limites)",
      "",
      "12GB de RAM para desempenho extremo",
      "",
      "Produto Lacrado (novo)",
      "",
      "Ideal para gamer, trabalho e multitarefas pesadas",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "512GB de armazenamento (uso sem limites)",
      "12GB de RAM para desempenho extremo",
      "Produto Lacrado (novo)",
      "Ideal para gamer, trabalho e multitarefas pesadas"
    ]
  },
  "Smartphone Realme Note 60 128GB / 4GB RAM": {
    description: [
      "Realme na medida certa: leve, moderno e pronto pra rotina.",
      "Otimo para quem quer um celular confiavel para redes sociais, chamadas e apps do dia a dia com boa fluidez e otimo custo-beneficio.",
      "",
      "Principais Destaques",
      "",
      "128GB de armazenamento para fotos e apps",
      "",
      "4GB de RAM para uso diario equilibrado",
      "",
      "Interface moderna e pratica",
      "",
      "Ideal para WhatsApp, Instagram e videos",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "128GB de armazenamento para fotos e apps",
      "4GB de RAM para uso diario equilibrado",
      "Interface moderna e pratica",
      "Ideal para WhatsApp, Instagram e videos"
    ]
  },
  "Smartphone Realme T14 256GB / 8GB RAM": {
    description: [
      "Mais memoria, mais performance - o tipo de celular que acompanha seu ritmo.",
      "Perfeito para quem quer velocidade no dia a dia, multitarefas e muito espaco para guardar tudo sem preocupacao.",
      "",
      "Principais Destaques",
      "",
      "256GB de armazenamento para maxima liberdade",
      "",
      "8GB de RAM para otimo desempenho",
      "",
      "Excelente para trabalho, estudos e lazer",
      "",
      "Fluidez para apps e multitarefas",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "256GB de armazenamento para maxima liberdade",
      "8GB de RAM para otimo desempenho",
      "Excelente para trabalho, estudos e lazer",
      "Fluidez para apps e multitarefas"
    ]
  },
  "Smartphone Realme 12 Pro Plus 5G 512GB / 8GB RAM": {
    description: [
      "Um celular premium de verdade: 5G + 512GB pra quem quer o melhor.",
      "Ideal para quem quer um smartphone completo e sofisticado, com muito espaco, velocidade e conectividade de ultima geracao.",
      "",
      "Principais Destaques",
      "",
      "5G para navegacao mais rapida",
      "",
      "512GB de armazenamento (nivel top)",
      "",
      "8GB de RAM com performance solida",
      "",
      "Excelente para fotos, videos e uso intenso",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "5G para navegacao mais rapida",
      "512GB de armazenamento (nivel top)",
      "8GB de RAM com performance solida",
      "Excelente para fotos, videos e uso intenso"
    ]
  },
  "Smartphone Umidigi Note 90A 64GB / 4GB RAM": {
    description: [
      "Simplicidade inteligente: o essencial bem feito, com otimo custo-beneficio.",
      "Perfeito para quem quer um aparelho para tarefas basicas com boa fluidez: mensagens, redes sociais e uso diario sem complicacao.",
      "",
      "Principais Destaques",
      "",
      "64GB de armazenamento para o essencial",
      "",
      "4GB de RAM para navegacao equilibrada",
      "",
      "Ideal para WhatsApp e redes sociais",
      "",
      "Excelente opcao para uso leve e diario",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "64GB de armazenamento para o essencial",
      "4GB de RAM para navegacao equilibrada",
      "Ideal para WhatsApp e redes sociais",
      "Excelente opcao para uso leve e diario"
    ]
  },
  "Smartphone Umidigi Note 90C 64GB / 4GB RAM": {
    description: [
      "Um smartphone pratico e funcional - perfeito para o dia a dia.",
      "Uma escolha certeira para quem quer um aparelho simples, confiavel e com bom desempenho em tarefas essenciais.",
      "",
      "Principais Destaques",
      "",
      "64GB de armazenamento para apps basicos",
      "",
      "4GB de RAM para uso diario",
      "",
      "Ideal para chamadas, mensagens e redes sociais",
      "",
      "Boa opcao para quem quer economia com qualidade",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "64GB de armazenamento para apps basicos",
      "4GB de RAM para uso diario",
      "Ideal para chamadas, mensagens e redes sociais",
      "Boa opcao para quem quer economia com qualidade"
    ]
  },
  "Smartphone Xiaomi Redmi 14C 256GB - Seminovo": {
    description: [
      "Muito espaco e presenca premium - seminovo selecionado para quem quer vantagem.",
      "Ideal para quem quer um aparelho com bastante armazenamento e otima experiencia no dia a dia, pagando menos e levando mais.",
      "",
      "Principais Destaques",
      "",
      "256GB de armazenamento para guardar tudo",
      "",
      "Aparelho Seminovo com padrao Premium Fitch",
      "",
      "Excelente para fotos, videos e apps",
      "",
      "Otimo custo-beneficio para rotina completa",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "256GB de armazenamento para guardar tudo",
      "Aparelho Seminovo com padrao Premium Fitch",
      "Excelente para fotos, videos e apps",
      "Otimo custo-beneficio para rotina completa"
    ]
  },
  "Smartphone Xiaomi Redmi Note 13 Pro 256GB / 8GB RAM - Seminovo": {
    description: [
      "Linha Note Pro e categoria acima - performance e presenca com preco inteligente.",
      "Perfeito para quem quer um smartphone forte, com multitarefas suaves e muito espaco, em versao seminova premium bem selecionada.",
      "",
      "Principais Destaques",
      "",
      "256GB de armazenamento para uso sem limites",
      "",
      "8GB de RAM para fluidez real",
      "",
      "Modelo Pro com proposta premium",
      "",
      "Seminovo Premium: excelente custo-beneficio",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "256GB de armazenamento para uso sem limites",
      "8GB de RAM para fluidez real",
      "Modelo Pro com proposta premium",
      "Seminovo Premium: excelente custo-beneficio"
    ]
  },
  "Smartphone Xiaomi Poco C75 256GB / 8GB RAM - Seminovo": {
    description: [
      "Memoria e performance com preco de oportunidade - seminovo premium Fitch.",
      "Ideal para quem quer multitarefas, bastante espaco e um aparelho forte para o dia a dia, pagando menos que um novo.",
      "",
      "Principais Destaques",
      "",
      "256GB de armazenamento para maxima liberdade",
      "",
      "8GB de RAM para excelente desempenho",
      "",
      "Seminovo Premium com selecao Fitch Tecnologia",
      "",
      "Otimo para redes sociais, trabalho e lazer",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "256GB de armazenamento para maxima liberdade",
      "8GB de RAM para excelente desempenho",
      "Seminovo Premium com selecao Fitch Tecnologia",
      "Otimo para redes sociais, trabalho e lazer"
    ]
  },
  "Console PlayStation 5 (PS5) 825GB + Jogo de Brinde": {
    description: [
      "O console mais desejado da geracao - potencia, presenca e diversao no nivel maximo.",
      "Ideal para quem quer jogar em alta performance, com carregamentos rapidos e graficos impressionantes, alem de levar um jogo de brinde para comecar com tudo.",
      "",
      "Principais Destaques",
      "",
      "Armazenamento 825GB para seus jogos e midias",
      "",
      "Performance de nova geracao com gameplay ultra fluido",
      "",
      "SSD veloz para carregamentos muito mais rapidos",
      "",
      "Acompanha 1 jogo de brinde (mais vantagem na compra)",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Armazenamento 825GB para seus jogos e midias",
      "Performance de nova geracao com gameplay ultra fluido",
      "SSD veloz para carregamentos muito mais rapidos",
      "Acompanha 1 jogo de brinde (mais vantagem na compra)"
    ]
  },
  "Console Xbox Series S 512GB SSD - Digital Edition": {
    description: [
      "Compacto por fora. Gigante por dentro - performance Xbox com estilo minimalista.",
      "Perfeito para quem quer jogar com rapidez, economia de espaco e acesso total ao mundo digital, com desempenho incrivel para a nova geracao.",
      "",
      "Principais Destaques",
      "",
      "512GB SSD com alta velocidade de carregamento",
      "",
      "Edicao Digital (biblioteca 100% online)",
      "",
      "Design compacto e moderno, facil de encaixar em qualquer ambiente",
      "",
      "Otima performance para jogos atuais com fluidez",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "512GB SSD com alta velocidade de carregamento",
      "Edicao Digital (biblioteca 100% online)",
      "Design compacto e moderno, facil de encaixar em qualquer ambiente",
      "Otima performance para jogos atuais com fluidez"
    ]
  },
  "Console Nintendo Switch Standard Neon - 32GB": {
    description: [
      "Diversao instantanea, em qualquer lugar - o console mais versatil do mundo.",
      "Ideal para quem gosta de jogar em casa, na rua, com amigos ou sozinho. O Switch entrega experiencia unica: portatil e console ao mesmo tempo.",
      "",
      "Principais Destaques",
      "",
      "Modo portatil e modo TV (2 em 1)",
      "",
      "32GB de armazenamento interno",
      "",
      "Joy-Cons Neon com estilo marcante",
      "",
      "Perfeito para jogos em familia e multiplayer",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Modo portatil e modo TV (2 em 1)",
      "32GB de armazenamento interno",
      "Joy-Cons Neon com estilo marcante",
      "Perfeito para jogos em familia e multiplayer"
    ]
  },
  "Controle Sem Fio Sony DualSense - PlayStation 5": {
    description: [
      "O controle que mudou a sensacao de jogar - tecnologia que voce literalmente sente.",
      "Ideal para elevar a experiencia no PS5 com conforto premium, resposta rapida e uma pegada sofisticada para jogar por horas.",
      "",
      "Principais Destaques",
      "",
      "Controle sem fio original para PlayStation 5",
      "",
      "Ergonomia premium para longas sessoes",
      "",
      "Resposta rapida e precisao em jogos competitivos",
      "",
      "Experiencia imersiva com sensacao mais realista no gameplay",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Controle sem fio original para PlayStation 5",
      "Ergonomia premium para longas sessoes",
      "Resposta rapida e precisao em jogos competitivos",
      "Experiencia imersiva com sensacao mais realista no gameplay"
    ]
  },
  "Tablet Samsung Galaxy Tab A9 64GB (4G + Wi-Fi) - Lacrado": {
    description: [
      "Um tablet moderno, lacrado e pronto para acompanhar sua rotina com estilo.",
      "Perfeito para estudar, trabalhar, assistir videos e usar apps com praticidade, com conectividade 4G + Wi-Fi para voce ficar online onde estiver.",
      "",
      "Principais Destaques",
      "",
      "Produto Lacrado (novo, impecavel)",
      "",
      "64GB de armazenamento para apps e arquivos",
      "",
      "Conectividade 4G + Wi-Fi (mais liberdade)",
      "",
      "Ideal para estudos, entretenimento e produtividade",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Produto Lacrado (novo, impecavel)",
      "64GB de armazenamento para apps e arquivos",
      "Conectividade 4G + Wi-Fi (mais liberdade)",
      "Ideal para estudos, entretenimento e produtividade"
    ]
  },
  "Tablet Positivo 7 Polegadas - Ideal para Estudos": {
    description: [
      "O tablet perfeito para estudar com praticidade - leve, simples e direto ao ponto.",
      "Ideal para criancas, estudos basicos, leitura, aulas online e uso diario, com formato compacto que cabe em qualquer mochila.",
      "",
      "Principais Destaques",
      "",
      "Tela 7 polegadas (compacta e confortavel)",
      "",
      "Excelente para leitura e estudos",
      "",
      "Facil de usar para tarefas do dia a dia",
      "",
      "Otimo custo-beneficio para rotina escolar",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Tela 7 polegadas (compacta e confortavel)",
      "Excelente para leitura e estudos",
      "Facil de usar para tarefas do dia a dia",
      "Otimo custo-beneficio para rotina escolar"
    ]
  },
  "Kit Antena Starlink Internet Via Satelite - Original": {
    description: [
      "Internet de verdade onde nada chega - conecte sua casa, sitio ou empresa com liberdade total.",
      "Ideal para quem precisa de conexao em areas remotas, viagens, campo, praia ou locais com sinal fraco. Starlink entrega internet via satelite com performance premium.",
      "",
      "Principais Destaques",
      "",
      "Produto Original Starlink",
      "",
      "Internet via satelite para locais sem cobertura tradicional",
      "",
      "Instalacao pratica e uso moderno",
      "",
      "Ideal para casa, empresa, fazenda, sitio e viagens",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Produto Original Starlink",
      "Internet via satelite para locais sem cobertura tradicional",
      "Instalacao pratica e uso moderno",
      "Ideal para casa, empresa, fazenda, sitio e viagens"
    ]
  },
  "Drone DJI Mini 4K - Combo 1 Controle e 1 Bateria": {
    description: [
      "Imagens aereas incriveis com qualidade 4K - um drone compacto com resultado profissional.",
      "Ideal para viagens, conteudo para Instagram, videos de paisagens e gravacoes cinematograficas, com um combo completo para voce comecar agora.",
      "",
      "Principais Destaques",
      "",
      "Gravacao em 4K para videos nitidos e premium",
      "",
      "Combo com 1 controle + 1 bateria",
      "",
      "Drone compacto, facil de transportar",
      "",
      "Perfeito para conteudo, lazer e imagens aereas de impacto",
      "",
      "\u2705 Garantia Fitch Tecnologia: 3 meses de garantia."
    ].join("\n"),
    highlights: [
      "Gravacao em 4K para videos nitidos e premium",
      "Combo com 1 controle + 1 bateria",
      "Drone compacto, facil de transportar",
      "Perfeito para conteudo, lazer e imagens aereas de impacto"
    ]
  }
};

const buildDescription = (product) => {
  const conditionText =
    product.condition === "Seminovo"
      ? "seminovo revisado e com procedencia"
      : "lacrado e com garantia";
  return `${product.name} ${conditionText}. Consulte estoque, cor e entrega/retirada pelo WhatsApp.`;
};

const iphoneLacrados = [
  {
    name: "Apple iPhone 13 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 3499,
    installment12xTotal: 3893.34,
    installment12xValue: 324.44,
    installment21xTotal: 4128.82,
    installment21xValue: 196.61
  },
  {
    name: "Apple iPhone 14 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 3779,
    installment12xTotal: 4204.89,
    installment12xValue: 350.41,
    installment21xTotal: 4459.22,
    installment21xValue: 212.34
  },
  {
    name: "Apple iPhone 15 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 4299,
    installment12xTotal: 4783.5,
    installment12xValue: 398.62,
    installment21xTotal: 5072.82,
    installment21xValue: 241.56
  },
  {
    name: "Apple iPhone 16 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 4949,
    installment12xTotal: 5506.75,
    installment12xValue: 458.9,
    installment21xTotal: 5839.82,
    installment21xValue: 278.09
  },
  {
    name: "Apple iPhone 16 Plus 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 5199,
    installment12xTotal: 5784.93,
    installment12xValue: 482.08,
    installment21xTotal: 6134.82,
    installment21xValue: 292.13
  },
  {
    name: "Apple iPhone 16 Pro 128GB - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 6199,
    installment12xTotal: 6897.63,
    installment12xValue: 574.8,
    installment21xTotal: 7314.82,
    installment21xValue: 348.32
  },
  {
    name: "Apple iPhone Air 256GB - Novo Lacrado",
    storage: "256GB",
    color: "Gold",
    priceCash: 5999,
    installment12xTotal: 6675.09,
    installment12xValue: 556.26,
    installment21xTotal: 7078.82,
    installment21xValue: 337.09
  },
  {
    name: "Apple iPhone 17 256GB - Novo Lacrado",
    storage: "256GB",
    color: COLOR_DEFAULT,
    priceCash: 6099,
    installment12xTotal: 6786.36,
    installment12xValue: 565.53,
    installment21xTotal: 7196.82,
    installment21xValue: 342.71
  },
  {
    name: "Apple iPhone 17 Pro 256GB (Cor: Laranja) - Novo Lacrado",
    storage: "256GB",
    color: "Laranja",
    priceCash: 8199,
    installment12xTotal: 9123.03,
    installment12xValue: 760.25,
    installment21xTotal: 9674.82,
    installment21xValue: 460.71
  },
  {
    name: "Apple iPhone 17 Pro 256GB (Cor: Silver) - Novo Lacrado",
    storage: "256GB",
    color: "Silver",
    priceCash: 8399,
    installment12xTotal: 9345.57,
    installment12xValue: 778.8,
    installment21xTotal: 9910.82,
    installment21xValue: 471.94
  },
  {
    name: "Apple iPhone 17 Pro Max 256GB (Cor: Laranja) - Novo Lacrado",
    storage: "256GB",
    color: "Laranja",
    priceCash: 9249,
    installment12xTotal: 10291.36,
    installment12xValue: 857.61,
    installment21xTotal: 10913.82,
    installment21xValue: 519.71
  },
  {
    name: "Apple iPhone 17 Pro Max 256GB (Cor: Azul) - Novo Lacrado",
    storage: "256GB",
    color: "Azul",
    priceCash: 9299,
    installment12xTotal: 10347,
    installment12xValue: 862.25,
    installment21xTotal: 10972.82,
    installment21xValue: 522.52
  },
  {
    name: "Apple iPhone 17 Pro Max 256GB (Cor: Silver) - Novo Lacrado",
    storage: "256GB",
    color: "Silver",
    priceCash: 9499,
    installment12xTotal: 10569.54,
    installment12xValue: 880.79,
    installment21xTotal: 11208.82,
    installment21xValue: 533.75
  }
];

const iphoneSeminovos = [
  {
    name: "Apple iPhone 11 64GB - Seminovo Premium",
    storage: "64GB",
    color: COLOR_DEFAULT,
    priceCash: 1349,
    installment12xTotal: 1501.03,
    installment12xValue: 125.09,
    installment21xTotal: 1591.82,
    installment21xValue: 75.8
  },
  {
    name: "Apple iPhone 11 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 1599,
    installment12xTotal: 1779.21,
    installment12xValue: 148.27,
    installment21xTotal: 1886.82,
    installment21xValue: 89.85
  },
  {
    name: "Apple iPhone 11 Pro 64GB - Seminovo Premium",
    storage: "64GB",
    color: COLOR_DEFAULT,
    priceCash: 1649,
    installment12xTotal: 1834.84,
    installment12xValue: 152.9,
    installment21xTotal: 1945.82,
    installment21xValue: 92.66
  },
  {
    name: "Apple iPhone 11 Pro Max 64GB - Seminovo Premium",
    storage: "64GB",
    color: COLOR_DEFAULT,
    priceCash: 1849,
    installment12xTotal: 2057.38,
    installment12xValue: 171.45,
    installment21xTotal: 2181.82,
    installment21xValue: 103.9
  },
  {
    name: "Apple iPhone 12 64GB - Seminovo Premium",
    storage: "64GB",
    color: COLOR_DEFAULT,
    priceCash: 1599,
    installment12xTotal: 1779.21,
    installment12xValue: 148.27,
    installment21xTotal: 1886.82,
    installment21xValue: 89.85
  },
  {
    name: "Apple iPhone 12 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 1749,
    installment12xTotal: 1946.11,
    installment12xValue: 162.18,
    installment21xTotal: 2063.82,
    installment21xValue: 98.28
  },
  {
    name: "Apple iPhone 12 Pro 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2069,
    installment12xTotal: 2302.18,
    installment12xValue: 191.85,
    installment21xTotal: 2441.42,
    installment21xValue: 116.26
  },
  {
    name: "Apple iPhone 12 Pro Max 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2719,
    installment12xTotal: 3025.43,
    installment12xValue: 252.12,
    installment21xTotal: 3208.42,
    installment21xValue: 152.78
  },
  {
    name: "Apple iPhone 13 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2299,
    installment12xTotal: 2558.1,
    installment12xValue: 213.17,
    installment21xTotal: 2712.82,
    installment21xValue: 129.18
  },
  {
    name: "Apple iPhone 13 Pro 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2699,
    installment12xTotal: 3003.18,
    installment12xValue: 250.26,
    installment21xTotal: 3184.82,
    installment21xValue: 151.66
  },
  {
    name: "Apple iPhone 13 Pro Max 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2989,
    installment12xTotal: 3325.86,
    installment12xValue: 277.16,
    installment21xTotal: 3527.02,
    installment21xValue: 167.95
  },
  {
    name: "Apple iPhone 14 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2449,
    installment12xTotal: 2725,
    installment12xValue: 227.08,
    installment21xTotal: 2889.82,
    installment21xValue: 137.61
  },
  {
    name: "Apple iPhone 14 Pro 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 3149,
    installment12xTotal: 3503.89,
    installment12xValue: 291.99,
    installment21xTotal: 3715.82,
    installment21xValue: 176.94
  },
  {
    name: "Apple iPhone 14 Pro Max 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 3649,
    installment12xTotal: 4060.24,
    installment12xValue: 338.35,
    installment21xTotal: 4305.82,
    installment21xValue: 205.04
  },
  {
    name: "Apple iPhone 15 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 3179,
    installment12xTotal: 3537.27,
    installment12xValue: 294.77,
    installment21xTotal: 3751.22,
    installment21xValue: 178.63
  },
  {
    name: "Apple iPhone 15 Pro 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 4149,
    installment12xTotal: 4616.59,
    installment12xValue: 384.72,
    installment21xTotal: 4895.82,
    installment21xValue: 233.13
  },
  {
    name: "Apple iPhone 15 Pro 256GB - Seminovo Premium",
    storage: "256GB",
    color: COLOR_DEFAULT,
    priceCash: 4399,
    installment12xTotal: 4894.77,
    installment12xValue: 407.9,
    installment21xTotal: 5190.82,
    installment21xValue: 247.18
  },
  {
    name: "Apple iPhone 15 Pro Max 256GB - Seminovo Premium",
    storage: "256GB",
    color: COLOR_DEFAULT,
    priceCash: 4599,
    installment12xTotal: 5117.31,
    installment12xValue: 426.44,
    installment21xTotal: 5426.82,
    installment21xValue: 258.42
  },
  {
    name: "Apple iPhone 16 Pro 128GB - Seminovo Premium",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 4999,
    installment12xTotal: 5562.39,
    installment12xValue: 463.53,
    installment21xTotal: 5898.82,
    installment21xValue: 280.9
  },
  {
    name: "Apple iPhone 16 Pro 256GB - Seminovo Premium",
    storage: "256GB",
    color: COLOR_DEFAULT,
    priceCash: 5199,
    installment12xTotal: 5784.93,
    installment12xValue: 482.08,
    installment21xTotal: 6134.82,
    installment21xValue: 292.13
  },
  {
    name: "Apple iPhone 16 Pro Max 256GB - Seminovo Premium",
    storage: "256GB",
    color: COLOR_DEFAULT,
    priceCash: 6599,
    installment12xTotal: 7342.71,
    installment12xValue: 611.89,
    installment21xTotal: 7786.82,
    installment21xValue: 370.8
  }
];

const appleProducts = [
  {
    name: "Headphone Apple AirPods Max - Novo Lacrado",
    storage: "-",
    color: COLOR_DEFAULT,
    priceCash: 4399,
    installment12xTotal: 4894.77,
    installment12xValue: 407.9,
    installment21xTotal: 5190.82,
    installment21xValue: 247.18
  },
  {
    name: "Apple Watch SE (2a Geracao) GPS 40mm - Novo Lacrado",
    storage: "40mm",
    color: COLOR_DEFAULT,
    priceCash: 1849,
    installment12xTotal: 2057.38,
    installment12xValue: 171.45,
    installment21xTotal: 2181.82,
    installment21xValue: 103.9
  },
  {
    name: "Apple Watch SE (2a Geracao) GPS 44mm - Novo Lacrado",
    storage: "44mm",
    color: COLOR_DEFAULT,
    priceCash: 1949,
    installment12xTotal: 2168.65,
    installment12xValue: 180.72,
    installment21xTotal: 2299.82,
    installment21xValue: 109.52
  },
  {
    name: "Apple Watch SE (3a Geracao) GPS 40mm - Novo Lacrado",
    storage: "40mm",
    color: COLOR_DEFAULT,
    priceCash: 2099,
    installment12xTotal: 2335.56,
    installment12xValue: 194.63,
    installment21xTotal: 2476.82,
    installment21xValue: 117.94
  },
  {
    name: "Apple Watch SE (3a Geracao) GPS 44mm - Novo Lacrado",
    storage: "44mm",
    color: COLOR_DEFAULT,
    priceCash: 2299,
    installment12xTotal: 2558.1,
    installment12xValue: 213.17,
    installment21xTotal: 2712.82,
    installment21xValue: 129.18
  },
  {
    name: "Apple Watch Series 11 GPS 42mm - Novo Lacrado",
    storage: "42mm",
    color: COLOR_DEFAULT,
    priceCash: 2949,
    installment12xTotal: 3281.35,
    installment12xValue: 273.45,
    installment21xTotal: 3479.82,
    installment21xValue: 165.71
  },
  {
    name: "Apple Watch Series 11 GPS 46mm - Novo Lacrado",
    storage: "46mm",
    color: COLOR_DEFAULT,
    priceCash: 3249,
    installment12xTotal: 3615.16,
    installment12xValue: 301.26,
    installment21xTotal: 3833.82,
    installment21xValue: 182.56
  },
  {
    name: "MacBook M2 Apple 16GB RAM / 256GB SSD",
    storage: "256GB/16RAM",
    color: COLOR_DEFAULT,
    priceCash: 5599,
    installment12xTotal: 6230.01,
    installment12xValue: 519.17,
    installment21xTotal: 6606.82,
    installment21xValue: 314.61
  },
  {
    name: "iPad 11\" (Chip A16) 128GB Wi-Fi - Novo Lacrado",
    storage: "128GB",
    color: COLOR_DEFAULT,
    priceCash: 2899,
    installment12xTotal: 3225.72,
    installment12xValue: 268.81,
    installment21xTotal: 3420.82,
    installment21xValue: 162.9
  },
  {
    name: "Caneta Apple Pencil (2a Geracao) - Original",
    storage: "-",
    color: COLOR_DEFAULT,
    priceCash: 989,
    installment12xTotal: 1100.46,
    installment12xValue: 91.71,
    installment21xTotal: 1167.02,
    installment21xValue: 55.57
  },
  {
    name: "Apple AirTag - Kit com 4 Unidades (Pack C/4)",
    storage: "-",
    color: COLOR_DEFAULT,
    priceCash: 819,
    installment12xTotal: 911.3,
    installment12xValue: 75.94,
    installment21xTotal: 966.42,
    installment21xValue: 46.02
  },
  {
    name: "Apple TV 4K - Novo Lacrado",
    storage: "4K",
    color: COLOR_DEFAULT,
    priceCash: 1299,
    installment12xTotal: 1445.4,
    installment12xValue: 120.45,
    installment21xTotal: 1532.82,
    installment21xValue: 72.99
  }
];

const androidProducts = [
  {
    name: "Smartphone Xiaomi Redmi A5 128GB / 4GB RAM",
    storage: "128GB/4GB",
    brand: "Redmi",
    condition: "Lacrado",
    priceCash: 839,
    installment12xTotal: 940.51,
    installment12xValue: 78.38,
    installment21xTotal: 990.02,
    installment21xValue: 47.14
  },
  {
    name: "Smartphone Xiaomi Redmi 15C 256GB / 8GB RAM",
    storage: "256GB/8GB",
    brand: "Redmi",
    condition: "Lacrado",
    priceCash: 1089,
    installment12xTotal: 1220.76,
    installment12xValue: 101.73,
    installment21xTotal: 1285.02,
    installment21xValue: 61.19
  },
  {
    name: "Smartphone Xiaomi Redmi Note 14 256GB / 8GB RAM - Lacrado",
    storage: "256GB/8RAM",
    brand: "Xiaomi",
    condition: "Lacrado",
    priceCash: 1389,
    installment12xTotal: 1557.06,
    installment12xValue: 129.76,
    installment21xTotal: 1639.02,
    installment21xValue: 78.05
  },
  {
    name: "Smartphone Xiaomi Redmi Note 14 Plus 5G 256GB / 8GB RAM - Lacrado",
    storage: "256GB/8RAM",
    brand: "Xiaomi",
    condition: "Lacrado",
    priceCash: 2439,
    installment12xTotal: 2734.11,
    installment12xValue: 227.84,
    installment21xTotal: 2878.02,
    installment21xValue: 137.05
  },
  {
    name: "Smartphone Xiaomi Poco C71 128GB / 4GB RAM - Lacrado",
    storage: "128GB/4RAM",
    brand: "Poco",
    condition: "Lacrado",
    priceCash: 889,
    installment12xTotal: 996.56,
    installment12xValue: 83.05,
    installment21xTotal: 1049.02,
    installment21xValue: 49.95
  },
  {
    name: "Smartphone Xiaomi Poco C8S 256GB / 12GB RAM (NFC) - Lacrado",
    storage: "256GB/12RAM",
    brand: "Poco",
    condition: "Lacrado",
    priceCash: 1099,
    installment12xTotal: 1231.97,
    installment12xValue: 102.66,
    installment21xTotal: 1296.82,
    installment21xValue: 61.75
  },
  {
    name: "Smartphone Xiaomi Poco X7 512GB / 12GB RAM - Lacrado",
    storage: "512GB/12RAM",
    brand: "Poco",
    condition: "Lacrado",
    priceCash: 1949,
    installment12xTotal: 2184.82,
    installment12xValue: 182.07,
    installment21xTotal: 2299.82,
    installment21xValue: 109.52
  },
  {
    name: "Smartphone Xiaomi Poco X7 Pro 512GB / 12GB RAM - Lacrado",
    storage: "512GB/12RAM",
    brand: "Poco",
    condition: "Lacrado",
    priceCash: 2539,
    installment12xTotal: 2846.21,
    installment12xValue: 237.18,
    installment21xTotal: 2996.02,
    installment21xValue: 142.67
  },
  {
    name: "Smartphone Xiaomi Poco F7 512GB / 12GB RAM - Lacrado",
    storage: "512GB/12RAM",
    brand: "Poco",
    condition: "Lacrado",
    priceCash: 3249,
    installment12xTotal: 3642.11,
    installment12xValue: 303.51,
    installment21xTotal: 3833.82,
    installment21xValue: 182.56
  },
  {
    name: "Smartphone Realme Note 60 128GB / 4GB RAM",
    storage: "128GB/4RAM",
    brand: "Realme",
    condition: "Lacrado",
    priceCash: 839,
    installment12xTotal: 940.51,
    installment12xValue: 78.38,
    installment21xTotal: 990.02,
    installment21xValue: 47.14
  },
  {
    name: "Smartphone Realme T14 256GB / 8GB RAM",
    storage: "256GB/8RAM",
    brand: "Realme",
    condition: "Lacrado",
    priceCash: 1769,
    installment12xTotal: 1983.04,
    installment12xValue: 165.25,
    installment21xTotal: 2087.42,
    installment21xValue: 99.4
  },
  {
    name: "Smartphone Realme 12 Pro Plus 5G 512GB / 8GB RAM",
    storage: "512GB/8GB",
    brand: "Realme",
    condition: "Lacrado",
    priceCash: 2409,
    installment12xTotal: 2700.48,
    installment12xValue: 225.04,
    installment21xTotal: 2842.62,
    installment21xValue: 135.36
  },
  {
    name: "Smartphone Umidigi Note 90A 64GB / 4GB RAM",
    storage: "64GB/4RAM",
    brand: "Umidigi",
    condition: "Lacrado",
    priceCash: 719,
    installment12xTotal: 806,
    installment12xValue: 67.17,
    installment21xTotal: 848.42,
    installment21xValue: 40.4
  },
  {
    name: "Smartphone Umidigi Note 90C 64GB / 4GB RAM",
    storage: "64GB/4RAM",
    brand: "Umidigi",
    condition: "Lacrado",
    priceCash: 889,
    installment12xTotal: 996.56,
    installment12xValue: 83.05,
    installment21xTotal: 1049.02,
    installment21xValue: 49.95
  },
  {
    name: "Smartphone Xiaomi Redmi 14C 256GB - Seminovo",
    storage: "256GB",
    brand: "Redmi",
    condition: "Seminovo",
    priceCash: 749,
    installment12xTotal: 839.63,
    installment12xValue: 69.97,
    installment21xTotal: 883.82,
    installment21xValue: 42.09
  },
  {
    name: "Smartphone Xiaomi Redmi Note 13 Pro 256GB / 8GB RAM - Seminovo",
    storage: "256GB/8RAM",
    brand: "Redmi",
    condition: "Seminovo",
    priceCash: 1399,
    installment12xTotal: 1568.27,
    installment12xValue: 130.69,
    installment21xTotal: 1650.82,
    installment21xValue: 78.61
  },
  {
    name: "Smartphone Xiaomi Poco C75 256GB / 8GB RAM - Seminovo",
    storage: "256GB/8RAM",
    brand: "Poco",
    condition: "Seminovo",
    priceCash: 999,
    installment12xTotal: 1119.87,
    installment12xValue: 93.32,
    installment21xTotal: 1178.82,
    installment21xValue: 56.13
  }
];

const electronicProducts = [
  {
    name: "Console PlayStation 5 (PS5) 825GB + Jogo de Brinde",
    category: "Video Games",
    brand: "Sony",
    condition: "Lacrado",
    storage: "825GB",
    color: "Branco",
    priceCash: 3529,
    installment12xTotal: 3955.99,
    installment12xValue: 329.67,
    installment21xTotal: 4164.22,
    installment21xValue: 198.3
  },
  {
    name: "Console Xbox Series S 512GB SSD - Digital Edition",
    category: "Video Games",
    brand: "Microsoft",
    condition: "Lacrado",
    storage: "512GB",
    color: "Branco",
    priceCash: 2999,
    installment12xTotal: 3361.86,
    installment12xValue: 280.16,
    installment21xTotal: 3538.82,
    installment21xValue: 168.52
  },
  {
    name: "Console Nintendo Switch Standard Neon - 32GB",
    category: "Video Games",
    brand: "Nintendo",
    condition: "Lacrado",
    storage: "-",
    color: COLOR_DEFAULT,
    priceCash: 1399,
    installment12xTotal: 1568.27,
    installment12xValue: 130.69,
    installment21xTotal: 1650.82,
    installment21xValue: 78.61
  },
  {
    name: "Controle Sem Fio Sony DualSense - PlayStation 5",
    category: "Acessorios",
    brand: "Sony",
    condition: "Lacrado",
    storage: "-",
    color: "Branco",
    priceCash: 559,
    installment12xTotal: 626.64,
    installment12xValue: 52.22,
    installment21xTotal: 659.62,
    installment21xValue: 31.41
  },
  {
    name: "Tablet Samsung Galaxy Tab A9 64GB (4G + Wi-Fi) - Lacrado",
    category: "Outros Eletronicos",
    brand: "Samsung",
    condition: "Lacrado",
    storage: "64GB",
    color: "Preto",
    priceCash: 1059,
    installment12xTotal: 1187.13,
    installment12xValue: 98.93,
    installment21xTotal: 1249.62,
    installment21xValue: 59.51
  },
  {
    name: "Tablet Positivo 7 Polegadas - Ideal para Estudos",
    category: "Outros Eletronicos",
    brand: "Positivo",
    condition: "Lacrado",
    storage: "7 pol",
    color: COLOR_DEFAULT,
    priceCash: 569,
    installment12xTotal: 637.85,
    installment12xValue: 53.15,
    installment21xTotal: 671.42,
    installment21xValue: 31.97
  },
  {
    name: "Kit Antena Starlink Internet Via Satelite - Original",
    category: "Outros Eletronicos",
    brand: "Starlink",
    condition: "Lacrado",
    storage: "-",
    color: COLOR_DEFAULT,
    priceCash: 2299,
    installment12xTotal: 2577.17,
    installment12xValue: 214.76,
    installment21xTotal: 2712.82,
    installment21xValue: 129.18
  },
  {
    name: "Drone DJI Mini 4K - Combo 1 Controle e 1 Bateria",
    category: "Outros Eletronicos",
    brand: "DJI",
    condition: "Lacrado",
    storage: "4K",
    color: COLOR_DEFAULT,
    priceCash: 3049,
    installment12xTotal: 3417.91,
    installment12xValue: 284.83,
    installment21xTotal: 3597.82,
    installment21xValue: 171.32
  }
];

const buildProducts = () => {
  const base = [
    ...iphoneLacrados.map((item) => ({
      ...item,
      category: "iPhones Lacrados",
      brand: "Apple",
      condition: "Lacrado"
    })),
    ...iphoneSeminovos.map((item) => ({
      ...item,
      category: "iPhones Seminovos",
      brand: "Apple",
      condition: "Seminovo"
    })),
    ...appleProducts.map((item) => ({
      ...item,
      category: "Apple",
      brand: "Apple",
      condition: "Lacrado"
    })),
    ...androidProducts.map((item) => ({
      ...item,
      category: "Android",
      color: item.color || COLOR_DEFAULT
    })),
    ...electronicProducts
  ];

  return base.map((product, index) => {
    const details = productDetailsByName[product.name];

    return {
      id: index + 1,
      ...product,
      description: details?.description,
      highlights: details?.highlights,
      images: sortImagesByName(
        productImagesByName[product.name] ||
          categoryImages[product.category] ||
          categoryImages["Outros Eletronicos"]
      ),
      slug: slugify(`${product.name}-${product.condition}`),
      fullDescription: details?.description || buildDescription(product)
    };
  });
};

export const products = buildProducts();

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}



