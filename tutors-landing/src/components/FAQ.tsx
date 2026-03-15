import { useLanding } from "../context/LandingContext";
import Button from "../ui/Button";
import FAQList from "../ui/FAQList";
import OfferCard from "../ui/OfferCard";
import Slider from "../ui/Slider";
import Stripes from "../ui/Stripes";

export default function FAQ() {
  const { offerOptions, currentOfferSlide, setCurrentOfferSlide } =
    useLanding();
  return (
    <section className="faq-section sections sections-mt flex ">
      <div className="benefits-info flex flex-col bs-paragraphs">
        <h2>What do I offer</h2>
        <Slider
          arr={offerOptions}
          currentSlide={currentOfferSlide}
          setSlide={setCurrentOfferSlide}
        >
          {offerOptions.map((items, i) => (
            <OfferCard
              heading={items.heading}
              duration={items.duration}
              textArr={items.textArr}
              classes={currentOfferSlide === i ? "" : "hide"}
              key={i}
            />
          ))}
        </Slider>
      </div>
      <FAQList />
      <Button>Book Your Free Trial Lesson</Button>
      <Stripes />
    </section>
  );
}
