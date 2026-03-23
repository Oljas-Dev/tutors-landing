export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <a href="#tutorCalendar" className="CTA-btn">
      {children}
    </a>
  );
}
