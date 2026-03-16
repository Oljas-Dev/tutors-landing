import type { textObjProps } from "../types/interfaces";

export default function OfferText({ icon, text }: textObjProps) {
  return (
    <div className="offer-card-paragraph flex">
      <img src={icon} alt="icon" width={24} />
      <p>{text}</p>
    </div>
  );
}
