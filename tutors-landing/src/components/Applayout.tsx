import type React from "react";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return <main className="main">{children}</main>;
}
