import type { ReactNode } from "react";

export default function Achievement({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="achievement">
      {icon}
      <p className="mt-1">{text}</p>
    </div>
  );
}
