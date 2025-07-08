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
    id: 1,
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Workshop de Carreiras",
    description: "Participe no workshop para melhorar o seu currículo e técnicas de entrevista.",
    content: "O Instituto Politécnico Lusófono de Lisboa está a organizar um workshop de carreiras para ajudar os alunos a se prepararem para o mercado de trabalho. O workshop incluirá sessões sobre como escrever um currículo eficaz, técnicas de entrevista e dicas para se destacar em processos seletivos.",
    date: "2024-07-05"
  },
  {
    id: 2,
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Feira de Emprego",
    description: "Empresas de todo o país estarão presentes para recrutar novos talentos.",
    content: "A Feira de Emprego do Instituto Politécnico Lusófono de Lisboa está marcada para o dia 10 de julho. Este evento reunirá várias empresas que estarão à procura de novos talentos. É uma excelente oportunidade para os alunos se conectarem com potenciais empregadores e explorarem oportunidades de carreira.",
    date: "2024-07-10"
  },
  {
    id: 3,
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Palestra sobre IA",
    description: "Especialistas discutem o futuro da Inteligência Artificial na educação.",
    content: "No dia 15 de julho, o Instituto Politécnico Lusófono de Lisboa receberá uma palestra sobre o impacto da Inteligência Artificial na educação. Especialistas da área discutirão como a IA pode ser utilizada para melhorar a aprendizagem e quais são as implicações éticas e sociais dessa tecnologia.",
    date: "2024-07-12"
  },
  {
    id: 4,
    thumbnail: DEFAULT_THUMBNAIL,
    title: "Teste de Eventos",
    description: "Este é um evento de teste para verificar a funcionalidade.",
    content: "Este evento é apenas um teste para garantir que a funcionalidade de eventos está a funcionar corretamente. Não há ações específicas associadas a este evento.",
    date: "2024-07-12"
  }
];

export default events;