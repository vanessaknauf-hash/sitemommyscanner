// Logo do Mommy Scanner — código de barras com linha do scanner animada
function MommyScannerLogo({ size = 96, glow = false }) {
  const style = {
    width: size,
    height: size,
    borderRadius: '23%',
    background: '#1F1714',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    boxShadow: glow
      ? '0 0 0 1px rgba(212,168,160,0.15), 0 20px 60px rgba(212,168,160,0.18), inset 0 1px 0 rgba(255,255,255,0.04)'
      : 'inset 0 1px 0 rgba(255,255,255,0.04)',
  };
  // Bars: irregular widths like a real barcode
  const bars = [
    { x: 22, w: 4 },
    { x: 28, w: 2 },
    { x: 32, w: 5 },
    { x: 39, w: 3 },
    { x: 44, w: 2 },
    { x: 48, w: 4 },
    { x: 54, w: 3 },
    { x: 59, w: 5 },
    { x: 66, w: 2 },
    { x: 70, w: 4 },
    { x: 76, w: 2 },
  ];
  const barTop = 26;
  const barBottom = 78;
  const barHeight = barBottom - barTop;

  return (
    <div style={style}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        {/* top horizontal line */}
        <line x1="22" y1="22" x2="78" y2="22" stroke="#D4A8A0" strokeWidth="1.2" strokeLinecap="round" />
        {/* bars */}
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={barTop}
            width={b.w}
            height={barHeight}
            fill="#D4A8A0"
            rx="0.5"
          />
        ))}
        {/* scanner line — moves up & down */}
        <g style={{
          animation: 'scannerSweep 2.6s ease-in-out infinite',
          transformOrigin: 'center',
        }}>
          <line
            x1="20" y1="50" x2="80" y2="50"
            stroke="#FF6B6B"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.95"
          />
          <line
            x1="20" y1="50" x2="80" y2="50"
            stroke="#FF6B6B"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.25"
          />
        </g>
      </svg>
      <style>{`
        @keyframes scannerSweep {
          0%   { transform: translateY(-22px); opacity: 0.4; }
          25%  { opacity: 1; }
          50%  { transform: translateY(22px); opacity: 1; }
          75%  { opacity: 1; }
          100% { transform: translateY(-22px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

window.MommyScannerLogo = MommyScannerLogo;
