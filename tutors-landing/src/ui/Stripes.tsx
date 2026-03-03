export default function Stripes() {
  const stripes = Array.from({ length: 3 }, (_, i) => i + 1);
  console.log(stripes);
  return (
    <div className="stripes flex flex-col">
      {stripes.map((i, stripe) => (
        <div key={stripe} className={`stripe stripe__color${i}`}></div>
      ))}
    </div>
  );
}
