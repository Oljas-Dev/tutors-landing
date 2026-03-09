export default function Stripes({classes}: {classes?: string;}) {
  const stripes = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div className={`stripes flex flex-col ${classes}`}>
      {stripes.map((i, stripe) => (
        <div key={stripe} className={`stripe stripe__color${i}`}></div>
      ))}
    </div>
  );
}
