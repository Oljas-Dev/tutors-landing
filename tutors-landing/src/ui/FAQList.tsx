import { useState } from "react";
import Accordion from "./Accordion";

const faqList = [
  {
    question: "How much do lessons cost?",
    answer: "Simple answer on the question above.",
  },
  {
    question: "Do you teach beginners?",
    answer: "Simple answer on the question above.",
  },
  {
    question: "What if I’m very shy?",
    answer: "Simple answer on the question above.",
  },
  {
    question: "Do you provide materials?",
    answer: "Simple answer on the question above.",
  },
];

export default function FAQList() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  function toggleAccordion(index: number) {
    setCurrentQuestion(index === currentQuestion ? -1 : index);
  }

  return (
    <div className="faq-list">
      <h2>FAQ</h2>
      <ul className="sections-mt">
        {faqList.map((item, i) => (
          <Accordion
            question={item.question}
            answer={item.answer}
            index={i}
            onAccordionClick={toggleAccordion}
            currentQuestion={currentQuestion}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
