import type { PartyItem } from "../types";

export const groupedItems: { title: string; items: PartyItem[] }[] = [
  {
    title: "Estrutura & Painéis",
    items: [
      { id: 1, name: "Painel Redondo", description: "Painel redondo para decoração.", price: 0, image: "images/painelredondo1.jpg" },
      { id: 2, name: "Painel Romano", description: "Painel romano para decoração.", price: 0, image: "images/painelromano.jpeg" },
      { id: 3, name: "Mesas para Painel", description: "Mesas de apoio para painel.", price: 0, image: "images/mesa.jpg" },
      { id: 4, name: "Mesas para Painel 2", description: "Mesas de apoio para painel.", price: 0, image: "images/mesa2.jpg" },
      { id: 5, name: "Cilindros", description: "Cilindros decorativos.", price: 0, image: "images/cilindros.jpg" },
      { id: 7, name: "Cômoda Fake", description: "Cômoda fake para decoração.", price: 0, image: "images/comoda.jpg" },
    ],
  },
  {
    title: "Arte com Balões",
    items: [
      { id: 11, name: "Arco de balão SIMPLES", description: "Arco simples de balões.", price: 0, image: "images/simples.png" },
      { id: 12, name: "Arco de balão ORGÂNICO", description: "Arco orgânico de balões.", price: 0, image: "images/organico.png" },
    ],
  },
  {
    title: "Itens de Mesa & Detalhes",
    items: [
      { id: 13, name: "Bandejas", description: "Bandejas decorativas para mesa.", price: 0, image: "images/bandejas.jpg" },
      { id: 14, name: "Bolo Fake", description: "Bolo decorativo (fake).", price: 0, image: "images/bolofake.jpg" },
      { id: 8, name: "Escadinha de Lembranças", description: "Escadinha para lembrancinhas.", price: 0, image: "images/escadinha.jpg" },
    ],
  },
  {
    title: "Personalizados & Extras",
    items: [
      { id: 10, name: "Número em LED", description: "Número luminoso em LED.", price: 0, image: "images/numero-de-led.jpg" },
      { id: 15, name: "Convite Digital", description: "Convite digital personalizado.", price: 0, image: "images/convite.jpg" },
      { id: 16, name: "Artes Personalizadas", description: "Artes digitais personalizadas para a festa.", price: 0, image: "images/personalizados.jpeg" },
    ],
  },
];