import Section from "./Section";
import BenefitSectionImage from "../../public/thinking-girl.png";

export default function BenefitSection() {
  return (
    <div className="sections-mt">
      <Section
        h1="Why Most Students Struggle With English"
        img={BenefitSectionImage}
        imgDescription="Woman facing a problem"
      >
        <div className="bs-paragraphs flex flex-col">
          <p>❗ You understand grammar but can’t speak fluently</p>
          <p>❗ You freeze during conversations</p>
          <p>❗ IELTS speaking feels stressful</p>
          <p>❗ You study but don’t see real progress</p>
        </div>
        <div className="bs-paragraphs flex flex-col">
          <h2>My Simple 3-Step System</h2>
          <p>❇️ Identify your real weaknesses</p>
          <p>❇️ Focus only on what you need</p>
          <p>❇️ Weekly Speaking Practice</p>
        </div>
      </Section>
    </div>
  );
}
