import { Clock } from "react-bootstrap-icons";
import OfferText from "./OfferText";
import type { offerOptionsProps } from "../types/interfaces";

export default function OfferCard({
  heading,
  duration,
  textArr,
  classes,
}: offerOptionsProps) {
  return (
    <div className={`offer-card flex flex-col ${classes}`}>
      <h3>{heading}</h3>
      <div className="offer-card-time">
        <Clock size={18} color={"#1c4c70"} />
        <p>{duration}</p>
      </div>
      <div className="offer-card-text-block flex flex-col">
        {textArr.map((item, i) => (
          <OfferText icon={item.icon} text={item.text} key={i} />
        ))}
      </div>
    </div>
  );
}
