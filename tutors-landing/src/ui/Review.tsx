export default function Review({
  img,
  text,
  classes,
}: {
  img: string;
  text: string;
  classes?: string;
}) {
  return (
    <div className={`review flex ${classes}`}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="review-image"
      ></div>
      <p>{text}</p>
    </div>
  );
}
