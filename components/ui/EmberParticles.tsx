const particles = [
  { left: "6%", size: 4, duration: 6, delay: 0 },
  { left: "16%", size: 3, duration: 8, delay: 1.4 },
  { left: "29%", size: 5, duration: 7, delay: 2.6 },
  { left: "41%", size: 3, duration: 9, delay: 0.6 },
  { left: "55%", size: 4, duration: 6.5, delay: 3.2 },
  { left: "67%", size: 3, duration: 8.5, delay: 1.8 },
  { left: "78%", size: 5, duration: 7.5, delay: 4.1 },
  { left: "89%", size: 3, duration: 9.5, delay: 2.2 },
];

export default function EmberParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, index) => (
        <span
          key={index}
          className="animate-ember absolute bottom-0 rounded-full bg-ember-light shadow-[0_0_8px_2px_rgba(124,195,245,0.6)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
