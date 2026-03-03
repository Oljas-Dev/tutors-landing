import Button from "../ui/Button";
import Section from "./Section";

export default function HeroSection() {
    return <Section
            h1="Speak English Confidently"
            img="../../public/teacher-student.png"
            imgDescription="teacher and student"
          >
            <div className="bg-special">
              <h2>in 12 weeks</h2>
            </div>
            <h2 className="mt-h2">even if you're shy</h2>
            <p>
              Personalized 1:1 online lessons designed to help you pass IELTS and
              speak naturally in real conversations.
            </p>
            <Button>Book Your Free Trial Lesson</Button>
          </Section>
}