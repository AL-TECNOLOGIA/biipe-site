const fs = require('fs');
let h = fs.readFileSync('client/src/pages/Home.tsx', 'utf8');

h = h.replace('const ecosystemRef = useRef(null);', `const splitRef = useRef(null);
  const { scrollYProgress: splitScroll } = useScroll({ target: splitRef, offset: ["start end", "end start"] });
  const ySplitImg = useTransform(splitScroll, [0, 1], ["15%", "-15%"]);

  const ecosystemRef = useRef(null);`);

h = h.replace('<section className="split-section" id="como-funciona">', '<section ref={splitRef} className="split-section" id="como-funciona">');

h = h.replace('<div className="image-frame bg-[#f3f1ec]"><img src={productArt}', '<div className="image-frame bg-[#f3f1ec] overflow-hidden"><motion.img style={{ y: ySplitImg }} src={productArt}');

h = h.replace('className="w-full h-full object-cover" /></div><div className="stamp">feito', 'className="w-full h-full object-cover scale-110" /></div><div className="stamp">feito');

fs.writeFileSync('client/src/pages/Home.tsx', h);
