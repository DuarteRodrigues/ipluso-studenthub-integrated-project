/**
 * @file Question.js
 * @description Component for displaying a single FAQ question and its answer in the IPLuso StudentHub Integrated Project.
 *
 * @component
 * @param {Object[]} questions - Array of question objects with 'question' and 'answer' properties.
 * @returns {JSX.Element} The Question component, which includes a question and its answer.
 */

// Import Packages
import React from "react";
import { useState } from "react";

// Import Assets
import arrowIcon from "../../assets/images/Arrow.ico";

// Import Styles
import "./Question.css";

// I wanted to create a component that displays a list of questions and answers in a collapsible format.
// The details component does not allow for smooth transitions, so I decided to use divs with a toggle state.

export default function Question({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {questions.map((qa, idx) => (
        <div className="Question" key={idx} tabIndex={0}>
          <div className="Question__header">
            <img
              src={arrowIcon}
              alt="Toggle answer"
              className={`Question__arrow${openIndex === idx ? "open" : ""}`}
              style={{
                width: "1.2rem",
                height: "1.2rem",
                margin: " 0.75rem 0.75rem",
                transition: "transform 0.3s ease",
                transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                verticalAlign: "middle",
              }}
            ></img>
            <button
              className="Question__button"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {qa.question}
            </button>
          </div>
          <div
            className={`Question__answer ${openIndex === idx ? "open" : ""}`}
          >
            {qa.answer}
          </div>
        </div>
      ))}
    </>
  );
}
