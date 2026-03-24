import { useState } from "react";

export default function SendBookingConfirmation() {
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ data?: any; error?: string } | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to,
          subject: `Welcome, ${name}!`,
          // We'll use a special flag to indicate React Email template
          useReactEmail: true,
          name,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setResult({ error: data.error });
      } else {
        setResult({ data });
      }
    } catch (err) {
      setResult({ error: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  return <div></div>;
}
