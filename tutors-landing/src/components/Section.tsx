import Stripes from "../ui/Stripes";

interface SectionProps {
  h1: string;
  img: string;
  imgDescription: string;
  classes?: string;
  children: React.ReactNode;
}

export default function Section({
  h1,
  img,
  imgDescription,
  classes,
  children,
}: SectionProps) {
  return (
    <section className="sections flex flex-col">
      <h1>{h1}</h1>
      <div className="image">
        <img src={img} alt={imgDescription} className={`${classes} w-full`} />
      </div>
      {children}
      <Stripes />
    </section>
  );
}
