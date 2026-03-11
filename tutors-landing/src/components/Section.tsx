import Stripes from "../ui/Stripes";

interface SectionProps {
  h1: string;
  specialWord?: string;
  img: string;
  imgDescription: string;
  classes?: string;
  children: React.ReactNode;
}

export default function Section({
  h1,
  specialWord,
  img,
  imgDescription,
  classes,
  children,
}: SectionProps) {
  return (
    <section className="sections flex flex-col">
      <h2 className="section flex">
        {specialWord && (
          <div className="rotate bg-special text-lg">{specialWord}</div>
        )}
        {h1}
      </h2>
      <div className={`${classes} image`}>
        <img src={img} alt={imgDescription} className="w-full" />
      </div>
      {children}
      <Stripes />
    </section>
  );
}
