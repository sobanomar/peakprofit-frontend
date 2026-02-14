// src/components/AmbientGlowBackground.jsx
export default function AmbientGlowBackground({ pageHeight = 5000 }) {
  // Generate glows every ~30-50vh with alternating positions and colors
  const generateGlows = () => {
    const glows = [];
    const colors = [
      "rgba(51, 228, 246, 0.6)", // Cyan
      "rgba(168, 85, 247, 0.6)", // Purple
    ];

    const positions = [
      { left: "10%" },
      { right: "15%" },
      { left: "20%" },
      { right: "10%" },
      { left: "15%" },
      { right: "20%" },
    ];

    for (let i = 0; i < pageHeight / 30; i++) {
      glows.push({
        top: `${10 + i * 35}vh`,
        ...positions[i % positions.length],
        color: colors[i % colors.length],
      });
    }

    return glows;
  };

  const glows = generateGlows();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {glows.map((glow, index) => (
        <div
          key={index}
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            top: glow.top,
            left: glow.left,
            right: glow.right,
            background: `radial-gradient(
              circle,
              ${glow.color} 0%,
              ${glow.color.replace("0.6", "0.4")} 30%,
              ${glow.color.replace("0.6", "0.2")} 55%,
              ${glow.color.replace("0.6", "0.08")} 75%,
              transparent 100%
            )`,
            filter: "blur(160px)",
          }}
        />
      ))}
    </div>
  );
}
