import Review from "./Review";
import ImgOne from "../../public/rvw-img-1.png";
import ImgTwo from "../../public/rvw-img-2.png";
import ImgThree from "../../public/rvw-img-3.png";
import Slider from "./Slider";
import { useLanding } from "../context/LandingContext";

export default function Reviews() {
  const { currentSlide, setCurrentSlide } = useLanding();
  const reviewsArray = [
    {
      img: ImgOne,
      text: "“I improved from IELTS 6.0 to 7.5 in 3 months.” – Maria, Spain",
    },
    {
      img: ImgTwo,
      text: "“Now I speak confidently at work.” – Ahmed, UAE",
    },
    {
      img: ImgThree,
      text: "“I started to talk after one week!” – John, Israel",
    },
  ];
  return (
    <Slider
      arr={reviewsArray}
      setSlide={setCurrentSlide}
      currentSlide={currentSlide}
    >
      {reviewsArray.map((review, i) => (
        <Review
          img={review.img}
          text={review.text}
          key={i}
          classes={currentSlide === i ? "" : "hide"}
        />
      ))}
    </Slider>
  );
}
