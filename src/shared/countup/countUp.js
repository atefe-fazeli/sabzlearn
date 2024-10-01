import React, { useState } from "react";
import { useEffect } from "react";

export default function CountUp({ endPoint }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1);
    if (count == endPoint) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);
  return <span class="landing-status__count">{count}</span>;
}
