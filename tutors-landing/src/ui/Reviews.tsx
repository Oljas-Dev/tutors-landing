import Review from "./Review";
import ImgOne from "../../public/rvw-img-1.png";
import ImgTwo from "../../public/rvw-img-2.png";
import ImgThree from "../../public/rvw-img-3.png";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useState } from "react";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  const showArrowRight = currentSlide + 1 >= reviewsArray.length;
  const showArrowLeft = currentSlide <= 0;

  function sliderRight() {
    if (showArrowRight) return;
    setCurrentSlide((prev) => (prev += 1));
  }
  function sliderLeft() {
    if (showArrowLeft) return;
    setCurrentSlide((prev) => (prev -= 1));
  }
  return (
    <div className="reviews flex">
      <ChevronLeft
        size={20}
        onClick={() => sliderLeft()}
        className={`${showArrowLeft && "opacity-05"}`}
      />
      {reviewsArray.map((review, i) => (
        <Review
          img={review.img}
          text={review.text}
          key={i}
          classes={currentSlide === i ? "" : "hide"}
        />
      ))}
      <ChevronRight
        size={20}
        onClick={() => sliderRight()}
        className={`${showArrowRight && "opacity-05"}`}
      />
    </div>
  );
}
