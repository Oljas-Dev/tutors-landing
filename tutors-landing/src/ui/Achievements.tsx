import { Award, Clock, Person } from "react-bootstrap-icons";
import Achievement from "./Achievement";

export default function Achievements() {
  return (
    <div className="achievements flex">
      <Achievement icon={<Clock size={24} />} text="5+ years teaching" />
      <Achievement
        icon={<Award size={24} />}
        text="Certified English teacher"
      />
      <Achievement
        icon={<Person size={24} />}
        text="IELTS & Business English"
      />
    </div>
  );
}
