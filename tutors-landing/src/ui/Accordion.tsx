export default function Accordion({ ...props }) {
  const { question, answer, index, onAccordionClick, currentQuestion } = props;

  const isActive = index === currentQuestion;
  return (
    <li onClick={() => onAccordionClick(index)}>
      <div>{question}</div>
      {isActive && <p className="accordion-content-in">{answer}</p>}
    </li>
  );
}
