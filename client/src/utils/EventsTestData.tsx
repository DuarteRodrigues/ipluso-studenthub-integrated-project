/**
 * @file EventsTestData.tsx
 * @description Test data for events.
 * 
 * @array events
 * @returns {Array} An array of event objects, each containing a thumbnail, title,
 */

// Import Assets
const DEFAULT_THUMBNAIL = "https://cdn.cosmos.so/e0dc7091-816b-4815-9149-5b10efb4248b?format=jpeg";


const events = [
  {
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Workshop de Carreiras",
    description: "Participe no workshop para melhorar o seu currículo e técnicas de entrevista.",
    date: "2024-07-05"
  },
  {
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Feira de Emprego",
    description: "Empresas de todo o país estarão presentes para recrutar novos talentos.",
    date: "2024-07-10"
  },
  {
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Palestra sobre IA",
    description: "Especialistas discutem o futuro da Inteligência Artificial na educação.",
    date: "2024-07-12"
  },
  {
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Teste de Eventos",
    description: "Este é um evento de teste para verificar a funcionalidade.",
    date: "2024-07-12"
  }
];

export default events;