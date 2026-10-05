import { useEffect, useState } from "react";

const NUMBER_PREFIX = /^(\d[\d.,]*)/;

/**
 * Counts the leading number of `text` up from 0 once `start` turns true, keeping any
 * trailing words ("7 lần tổ chức"). Numbers use Vietnamese formatting: "." groups
 * thousands and "," marks decimals ("185.000", "71,4"), and the final frame always
 * shows the original text exactly.
 */
export function AnimatedCount({ text, start }: { text: string; start: boolean }) {
  const match = text.match(NUMBER_PREFIX);
  const [display, setDisplay] = useState(match ? "0" : text);

  useEffect(() => {
    if (!start || !match) return;
    const raw = match[1];
    const decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
    const target = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    const duration = 900;
    const startTime = performance.now();
    let raf: number;
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(
        progress < 1
          ? (target * progress).toLocaleString("vi-VN", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : raw,
      );
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  if (!match) return <>{text}</>;
  return (
    <>
      {display}
      {text.slice(match[1].length)}
    </>
  );
}
