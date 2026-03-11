import Button from "../ui/Button";
import FAQList from "../ui/FAQList";
import Stripes from "../ui/Stripes";

export default function FAQ() {
  return (
    <section className="faq-section sections sections-mt flex ">
      <div className="benefits-info flex flex-col bs-paragraphs">
        <h2>What You Get in Your Free Trial Lesson</h2>
        <p> ❇️ 30-minute live session</p>
        <p> ❇️ Speaking evaluation</p>
        <p>❇️ Personalized improvement plan</p>
        <p> ❇️ Clear next steps</p>
      </div>
      <FAQList />
      <Button>Book Your Free Trial Lesson</Button>
      <Stripes />
    </section>
  );
}
