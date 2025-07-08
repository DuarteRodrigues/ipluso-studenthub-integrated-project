/**
 * @file NewsTestData.tsx
 * @description Test data for news.
 * 
 * @array news
 * @returns {Array} An array of news objects, each containing a thumbnail, title, description, and date.
 */

// Import Packages
// import { v4 as uuidv4 } from 'uuid'; <- if necessary, uncomment this line to use UUIDs for unique IDs

// Import Assets
const DEFAULT_THUMBNAIL = "https://cdn.cosmos.so/e0dc7091-816b-4815-9149-5b10efb4248b?format=jpeg";

const news = [
    {   
        id: 1, // Use uuidv4() for unique IDs in production
        thumbnail: DEFAULT_THUMBNAIL,
        title: "Novo Curso de Engenharia",
        description: "O Instituto lança um novo curso de Engenharia Informática para o próximo ano letivo.",
        date: "2024-07-01",
        content: "O Instituto Politécnico Lusófono de Lisboa tem o prazer de anunciar o lançamento do novo curso de Engenharia Informática, que começará no próximo ano letivo. Este curso visa preparar os alunos para os desafios tecnológicos do futuro, com uma forte ênfase em programação, redes e segurança informática.",
        author: "João Silva",
    },
    {
        id:2,
        thumbnail: DEFAULT_THUMBNAIL,
        title: "Semana Académica",
        description: "A Semana Académica está de volta com várias atividades culturais e desportivas.",
        date: "2024-06-25",
        content: "A Semana Académica deste ano contará com uma série de eventos, incluindo concertos, workshops e competições desportivas. É uma oportunidade para os alunos se divertirem e se envolverem com a comunidade académica.",
        author: "Maria Costa",
    },
    {
        id:3,
        thumbnail: DEFAULT_THUMBNAIL,
        title: "Parceria Internacional",
        description: "Nova parceria com universidade estrangeira para intercâmbio de estudantes.",
        date: "2024-06-20",
        content: "O Instituto Politécnico da Lusofonia de Lisboa estabeleceu uma nova parceria com uma universidade na Europa para promover o intercâmbio de estudantes. Esta iniciativa visa enriquecer a experiência académica dos alunos, permitindo-lhes estudar no estrangeiro e aprender sobre novas culturas.",
        author: "Ana Pereira",
    }
];

export default news;