import { useState } from "react";
import "./SakuraBackground.css";

const PETAL_COUNT = 16;

function makePetals() {
  return Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 10 + Math.random() * 10,
    duration: 12 + Math.random() * 10,
    delay: -Math.random() * 20,
    drift: 40 + Math.random() * 80,
  }));
}

export default function SakuraBackground() {
  const [petals] = useState(makePetals);

  return (
    <div className="sakura" aria-hidden="true">
      <div className="moon" />
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}