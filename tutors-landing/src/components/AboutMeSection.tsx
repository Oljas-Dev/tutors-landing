import Achievements from "../ui/Achievements";
import Reviews from "../ui/Reviews";
import Stripes from "../ui/Stripes";

export default function AboutMeSection() {
  return (
    <section className="sections sections-mt about-me" id="aboutMe">
      <h2>Anne Deer</h2>
      <div className="avatar"></div>
      <Achievements />

      <h2>What my students say</h2>
      <Reviews />
      <Stripes />
    </section>
  );
}
