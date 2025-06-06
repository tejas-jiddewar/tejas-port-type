import { useEffect, useState } from "react";

export function useCounterAnimation(
  target: number,
  duration: number = 2000,
  step: number = 1
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * (1 / step)) * step);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, step, hasStarted]);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return step < 1 ? Number(count.toFixed(1)) : Math.floor(count);
}
