/**
 * @file FAQPage.js
 * @description Page component for the Frequently Asked Questions section of the IPLuso StudentHub Integrated Project
 *
 * @Page
 * @returns {JSX.Element} The FAQ page component, which includes a header, a title, a brief description, and a footer.
 */

// Import Packages
import React from "react";
import Header from "../components/Header/Header";
import Question from "../features/FAQ/Question";
import Footer from "../components/Footer/Footer";

// Import Styles
import "../styles/FAQPage.css";

const QuestionsAnswers = [
  {
    question: "O que é o StudentHub IPLuso?",
    answer:
      "O StudentHub é uma plataforma digital desenvolvida para centralizar informações e serviços relevantes para os alunos e administração do Instituto Politécnico da Lusofonia.",
  },
  {
    question: "Quem pode aceder ao sistema?",
    answer:
      "A plataforma está disponível para dois tipos de utilizadores: Alunos e Administradores, cada um com permissões distintas.",
  },
  {
    question: "Que tipo de informações posso encontrar na plataforma?",
    answer:
      "Os alunos podem aceder a informações sobre espaços académicos, eventos, estágios, horários, docentes e contactos dos serviços institucionais.",
  },
  {
    question: "Como posso demonstrar interesse num evento?",
    answer:
      "Ao visualizar um evento, os alunos autenticados têm a opção de clicar em 'Demonstrar Interesse', o que ativa o sistema de notificações.",
  },
  {
    question: "O sistema envia notificações automáticas?",
    answer:
      "Sim. O sistema notifica automaticamente os alunos sobre eventos nos quais demonstraram interesse, especialmente quando se aproximam da data do evento.",
  },
  {
    question: "Como os administradores gerem os conteúdos?",
    answer:
      "Os administradores usam o Painel Administrativo para criar, editar ou remover eventos, estágios e notícias disponíveis na plataforma.",
  },
  {
    question: "O sistema é compatível com telemóveis?",
    answer:
      "Sim, a plataforma foi desenvolvida com um design responsivo para funcionar corretamente em computadores, tablets e smartphones.",
  },
  {
    question: "É necessário instalar alguma aplicação?",
    answer:
      "Não. O StudentHub é acessível através de um navegador web e não requer instalação adicional.",
  },
  {
    question: "Os dados dos utilizadores estão seguros?",
    answer:
      "Sim. O sistema segue boas práticas de segurança e está em conformidade com a legislação de proteção de dados vigente.",
  },
  {
    question: "Posso aceder à plataforma fora do horário letivo?",
    answer:
      "A plataforma está disponível 99% do tempo durante o calendário letivo, exceto em períodos de manutenção planeada.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <Header />
      <div className="FAQ__title">
        <h1>FAQ</h1>
        <p>Aqui encontrarás algumas questões comuns à tua vida académica</p>
      </div>
      <Question questions={QuestionsAnswers} />
      <Footer />
    </div>
  );
}
