import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerText =
      "window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};";

    const script2 = document.createElement("script");
    script2.src = "https://koalendar.com/assets/widget.js";
    script2.async = true;

    const script3 = document.createElement("script");
    script3.innerText =
      'Koalendar("inline", {"url":"https://koalendar.com/e/meet-with-oljas-medetbaev","selector":"#inline-widget-meet-with-oljas-medetbaev"});';

    document.body.append(script, script2, script3);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <div
      id="inline-widget-meet-with-oljas-medetbaev"
      style={{
        minWidth: "280px",
        height: "700px",
        paddingTop: "16px",
      }}
    ></div>
  );
}
