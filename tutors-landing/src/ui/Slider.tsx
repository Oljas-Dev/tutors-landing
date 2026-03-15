import { type Dispatch, type ReactNode, type SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function Slider({
  arr,
  currentSlide,
  setSlide,
  children,
}: {
  arr: object[];
  currentSlide: number;
  setSlide: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}) {
  const showArrowRight = currentSlide + 1 >= arr.length;
  const showArrowLeft = currentSlide <= 0;

  function sliderRight() {
    if (showArrowRight) return;
    setSlide((prev: number) => (prev += 1));
  }
  function sliderLeft() {
    if (showArrowLeft) return;
    setSlide((prev: number) => (prev -= 1));
  }
  return (
    <div className="reviews flex" id="reviews">
      <ChevronLeft
        size={20}
        onClick={() => sliderLeft()}
        className={`${showArrowLeft && "opacity-05"}`}
      />
      {children}
      <ChevronRight
        size={20}
        onClick={() => sliderRight()}
        className={`${showArrowRight && "opacity-05"}`}
      />
    </div>
  );
}
