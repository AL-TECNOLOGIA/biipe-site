const fs = require('fs');

let h = fs.readFileSync('client/src/pages/Home.tsx', 'utf8');

const bgEffects = `
function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#f9a5a0]/15 to-transparent blur-[100px]" />
      <div className="absolute top-[30%] right-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-[#f04b4b]/10 to-transparent blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#d1f4e0]/20 to-transparent blur-[120px]" />
      
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#f04b4b]/20"
          style={{
            top: \`\${Math.random() * 100}%\`,
            left: \`\${Math.random() * 100}%\`,
            width: \`\${Math.random() * 4 + 2}px\`,
            height: \`\${Math.random() * 4 + 2}px\`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
`;

h = h.replace('export default function Home() {', bgEffects + '\nexport default function Home() {');
h = h.replace('<div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#111315]">', '<div className="min-h-screen relative overflow-hidden bg-[#fbfaf7] text-[#111315]"><BackgroundEffects />');

fs.writeFileSync('client/src/pages/Home.tsx', h);
