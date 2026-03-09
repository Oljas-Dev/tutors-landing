import Button from "../ui/Button";
import Section from "./Section";
import HeroSectionImage from "../../public/teacher-student.png";

export default function HeroSection() {
  return (
    <div className="sections-mt">
      <Section
        h1=" English Confidently"
        specialWord="Speak"
        img={HeroSectionImage}
        imgDescription="teacher and student"
      >
        <div className="bg-special m-center">
          <h2>in 12 weeks</h2>
        </div>
        <h2 className="">even if you're shy</h2>
        <p>
          Personalized 1:1 online lessons designed to help you pass IELTS and
          speak naturally in real conversations.
        </p>
        <Button>Book Your Free Trial Lesson</Button>
      </Section>
    </div>
  );
}
