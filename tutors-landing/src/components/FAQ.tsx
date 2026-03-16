import { useEffect, useState } from "react";
import { useLanding } from "../context/LandingContext";
import Button from "../ui/Button";
import FAQList from "../ui/FAQList";
import OfferCard from "../ui/OfferCard";
import Slider from "../ui/Slider";
import Stripes from "../ui/Stripes";

export default function FAQ() {
  const [windowWidth, setWindowWidth] = useState({
    width: window.screen.width,
  });
  const { offerOptions, currentOfferSlide, setCurrentOfferSlide } =
    useLanding();

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth({
        width: window.screen.width,
      });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <section className="faq-section sections sections-mt flex">
      <div className="benefits-info flex flex-col bs-paragraphs m-center">
        <h2>What do I offer</h2>
        {windowWidth.width >= 715 ? (
          <div className="flex">
            {offerOptions.map((items, i) => (
              <OfferCard
                heading={items.heading}
                duration={items.duration}
                textArr={items.textArr}
                classes=""
                key={i}
              />
            ))}
          </div>
        ) : (
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
        )}
      </div>
      <FAQList />
      <Button>Book Your Free Trial Lesson</Button>
      <Stripes />
    </section>
  );
}
