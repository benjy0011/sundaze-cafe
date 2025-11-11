import React from 'react';

type Intensity = 'low' | 'medium' | 'high';

interface GlowingTextProps {
  text: string;
  color?: string;
  intensity?: Intensity;
  animated?: boolean;
}

const GlowingText: React.FC<GlowingTextProps> = ({ 
  text, 
  color = '#00ffff', 
  intensity = 'medium',
  animated = true 
}) => {
  const intensityMap: Record<Intensity, string> = {
    low: '0 0 5px, 0 0 10px',
    medium: '0 0 10px, 0 0 20px, 0 0 30px',
    high: '0 0 10px, 0 0 20px, 0 0 30px, 0 0 40px, 0 0 70px'
  };

  const glowStyle: React.CSSProperties = {
    color: color,
    textShadow: `${intensityMap[intensity]} ${color}`,
    animation: animated ? 'pulse 2s ease-in-out infinite' : 'none'
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            text-shadow: ${intensityMap[intensity]} ${color};
            opacity: 1;
          }
          50% {
            text-shadow: 0 0 5px ${color}, 0 0 10px ${color};
            opacity: 1;
          }
        }
      `}</style>
      <span className="glowing-text" style={glowStyle}>{text}</span>
    </>
  );
};

export default GlowingText;