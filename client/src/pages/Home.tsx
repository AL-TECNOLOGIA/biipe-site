import { useState, useRef } from "react";
import { ArrowRight, BarChart3, Boxes, Check, ChevronDown, CircleDollarSign, FileText, Menu, PackageCheck, Play, Sparkles, Store, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const logo = "/Biipe_logo.svg";
const heroArt = "/biipe-people-hero.png";
const productArt = "/biipe-people-operations.png";
const ecosystemArt = "/biipe-people-service.png";

const modules = [
  { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917076.png", title: "Notas fiscais", text: "Emita NF-e, NFC-e e NFS-e com muito menos esforço." },
  { icon: "https://cdn-icons-png.flaticon.com/128/7928/7928197.png", title: "Financeiro", text: "Tenha clareza do que entra, sai e pode crescer." },
  { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917169.png", title: "Vendas", text: "Acompanhe cada venda e transforme dados em ação." },
  { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917484.png", title: "Estoque", text: "Saiba o que está disponível antes que falte." },
  { icon: "https://cdn-icons-png.flaticon.com/128/3916/3916831.png", title: "PDV", text: "Venda no balcão com agilidade e simplicidade." },
  { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917034.png", title: "Relatórios", text: "Decida com visões que fazem sentido para você." },
];

const faqs = [
  ["O que é a Biipe?", "A Biipe é uma plataforma de gestão para pequenos negócios que reúne vendas, financeiro, estoque e emissão fiscal em um só lugar."],
  ["Preciso instalar algum programa?", "Não. A Biipe funciona online e pode ser acessada pelo computador, tablet ou celular, onde quer que você esteja."],
  ["A Biipe atende qual tipo de negócio?", "Ela foi feita para lojas, prestadores de serviço, pequenos comércios e operações que precisam de controle sem complicação."],
  ["Posso experimentar antes de contratar?", "Sim. Você pode conhecer a plataforma e entender como ela se encaixa na rotina do seu negócio antes de escolher um plano."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <div className={`flex items-center gap-2.5 ${compact ? "scale-90 origin-left" : ""}`}><img src={logo} alt="Biipe" className="h-10 w-10 rounded-full" /><span className="brand-wordmark text-[25px] font-extrabold tracking-[-0.08em] text-[#111315]">Biipe</span></div>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHeroText = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const yHeroImg = useTransform(heroScroll, [0, 1], ["0%", "15%"]);

  const ecosystemRef = useRef(null);
  const { scrollYProgress: ecoScroll } = useScroll({ target: ecosystemRef, offset: ["start end", "end start"] });
  const yEcoImg = useTransform(ecoScroll, [0, 1], ["10%", "-10%"]);
  const scaleEcoBg = useTransform(ecoScroll, [0, 0.5], [0.95, 1]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#111315]">
      <div className="top-strip"><div className="container flex h-9 items-center justify-between text-[11px] font-semibold tracking-[0.02em] text-white/80"><span>Gestão clara para quem faz o negócio acontecer.</span><a href="#contato" className="hidden transition-colors hover:text-[#f9b2ad] sm:block">Fale com a equipe Biipe <ArrowRight className="ml-1 inline h-3 w-3" /></a></div></div>
      <header className="sticky top-0 z-40 border-b border-black/6 bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="container flex h-18.5 items-center justify-between gap-8">
          <a href="#inicio" aria-label="Biipe início"><Logo /></a>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#596066] lg:flex">
            <a className="nav-link" href="#funcionalidades">Funcionalidades</a><a className="nav-link" href="#para-quem">Para quem</a><a className="nav-link" href="#ecossistema">Ecossistema</a><a className="nav-link" href="#planos">Planos</a><a className="nav-link" href="#duvidas">Dúvidas</a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex"><a href="/login" className="text-[13px] font-bold text-[#596066] transition-colors hover:text-[#111315]">Entrar</a><a href="/cadastro" className="button button-dark">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div>
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-full border border-black/10 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <div className="border-t border-black/10 bg-[#fbfaf7] px-5 py-6 lg:hidden"><div className="flex flex-col gap-5 text-sm font-semibold"><a href="#funcionalidades" onClick={closeMenu}>Funcionalidades</a><a href="#para-quem" onClick={closeMenu}>Para quem</a><a href="#ecossistema" onClick={closeMenu}>Ecossistema</a><a href="#planos" onClick={closeMenu}>Planos</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a><a href="/cadastro" onClick={closeMenu} className="button button-dark mt-2 justify-center">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div></div>}
      </header>

      <main id="inicio">
        <section ref={heroRef} className="hero-section overflow-hidden"><div className="container grid min-h-170 items-center gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <motion.div style={{ y: yHeroText }} className="relative z-10 max-w-147.5" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeUp} className="hero-title">Seu negócio em um só <em>pulso.</em></motion.h1>
            <motion.p variants={fadeUp} className="hero-copy">A Biipe reúne as informações que você precisa para vender melhor, organizar a rotina e crescer com mais tranquilidade.</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3"><a href="/cadastro" className="button button-coral">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a><a href="#como-funciona" className="button button-ghost"><span className="play-ring"><Play className="h-3 w-3 fill-current" /></span> Como funciona</a></motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-semibold text-[#6f757a]"><span><Check className="mr-1 inline h-4 w-4 text-[#f04b4b]" />Sem cartão de crédito</span><span><Check className="mr-1 inline h-4 w-4 text-[#f04b4b]" />Configuração simples</span></motion.div>
          </motion.div>
          <motion.div style={{ y: yHeroImg }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="hero-visual">
            <div className="product-proof"><span className="proof-top">leitura do dia <b>ao vivo</b></span><span className="proof-bars"><i /><i /><i /><i /><i /><i /><i /><i /></span></div>
            <img src={heroArt} alt="Empreendedora acompanha a operação da Biipe em uma loja" className="relative z-10 w-full" />
            <div className="floating-stat stat-one"><span className="tiny-label">Vendas hoje</span><strong>+28,4%</strong><span className="stat-line" /></div><div className="floating-stat stat-two"><span>Leitura em tempo real</span></div>
          </motion.div>
        </div></section>

        <section className="module-rail" id="funcionalidades" style={{ backgroundColor: "#ffffff" }}><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container"><motion.div variants={fadeUp} className="section-kicker">Tudo conectado</motion.div><motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-6"><h2 className="rail-title">As peças que fazem o seu negócio <span>andar.</span></h2><a href="#contato" className="text-sm font-bold text-[#f04b4b]">Ver todas as funcionalidades <ArrowRight className="ml-1 inline h-4 w-4" /></a></motion.div><motion.div variants={staggerContainer} className="module-grid mt-10">{modules.map(({ icon, title, text }) => <motion.a variants={fadeUp} href="#contato" className="module-pill" key={title}><span className="module-icon bg-[#f3f1ec]"><img src={icon} alt="" loading="lazy" decoding="async" /></span><span><strong>{title}</strong><small>{text}</small></span><ArrowRight className="ml-auto h-4 w-4 opacity-35 transition-all group-hover:translate-x-1" /></motion.a>)}</motion.div></motion.div></section>

        <section className="trust-section"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><motion.div variants={fadeUp}><div className="section-kicker text-[#f04b4b]">Menos ruído. Mais direção.</div><h2 className="trust-title">A clareza que faltava<br /><span>para decidir melhor.</span></h2></motion.div><motion.div variants={fadeUp} className="trust-note"><Sparkles className="h-5 w-5 text-[#f04b4b]" /><p>Informação organizada para você voltar a fazer o que realmente importa: tocar o seu negócio.</p></motion.div></motion.div></section>

        <section className="split-section" id="como-funciona"><div className="container grid items-center gap-16 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32"><motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-100px" }} className="relative order-2 lg:order-1"><div className="image-frame bg-[#f3f1ec]"><img src={productArt} alt="Dois empreendedores acompanham o estoque e a operação em um tablet" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div><div className="stamp">feito para o dia a dia</div></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="order-1 max-w-xl lg:order-2"><motion.div variants={fadeUp} className="section-kicker">Uma visão, várias respostas</motion.div><motion.h2 variants={fadeUp} className="section-title">Pare de juntar pedaços. <span>Veja o todo.</span></motion.h2><motion.p variants={fadeUp} className="section-copy">O Biipe transforma a rotina do seu negócio em uma visão simples: o que vendeu, o que precisa de atenção e qual é o próximo passo.</motion.p><motion.div variants={staggerContainer} className="feature-list"><div><span className="feature-number">01</span><p><strong>Abra o painel.</strong> Uma leitura rápida para começar o dia sabendo onde você está.</p></div><div><span className="feature-number">02</span><p><strong>Entenda o movimento.</strong> Indicadores que conversam entre si, sem planilhas espalhadas.</p></div><div><span className="feature-number">03</span><p><strong>Aja com confiança.</strong> Menos dúvida nas decisões, mais tempo para atender e vender.</p></div></motion.div></motion.div></div></section>

        <motion.section ref={ecosystemRef} style={{ scale: scaleEcoBg }} className="ecosystem-section origin-bottom" id="ecossistema"><div className="container grid items-center gap-12 py-24 lg:grid-cols-[1fr_1fr] lg:py-28"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}><motion.div variants={fadeUp} className="section-kicker text-[#f04b4b]">Ecossistema Biipe</motion.div><motion.h2 variants={fadeUp} className="section-title text-white">Do primeiro cliente ao próximo <span className="text-[#f9a5a0]">passo.</span></motion.h2><motion.p variants={fadeUp} className="section-copy text-white/65">Uma plataforma que cresce junto com a sua operação. Conecte as partes e deixe o negócio respirar melhor.</motion.p><motion.div variants={fadeUp} className="mt-8 grid max-w-md grid-cols-2 gap-3 text-sm font-semibold text-white/80"><div className="dark-chip"><BarChart3 /> Vendas</div><div className="dark-chip"><CircleDollarSign /> Financeiro</div><div className="dark-chip"><Boxes /> Estoque</div><div className="dark-chip"><PackageCheck /> Relatórios</div></motion.div></motion.div><div className="w-full rounded-[48px] shadow-2xl shadow-black/20 overflow-hidden bg-[#232729]" style={{ aspectRatio: "4/3" }}><motion.img style={{ y: yEcoImg }} src={ecosystemArt} alt="Profissional de serviços atende uma cliente usando a Biipe" loading="lazy" decoding="async" className="w-full h-full object-cover scale-110" /></div></div></motion.section>

        <section className="audience-section" id="para-quem"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container py-24 lg:py-32"><div className="max-w-2xl"><motion.div variants={fadeUp} className="section-kicker">Feita para negócios reais</motion.div><motion.h2 variants={fadeUp} className="section-title">A Biipe simplifica a rotina de quem <span>faz acontecer.</span></motion.h2></div><motion.div variants={staggerContainer} className="audience-grid mt-14"><motion.div variants={fadeUp} className="audience-card card-coral"><span className="card-index">01 / lojas</span><h3>Venda com mais leveza.</h3><p>Do balcão ao estoque, tudo no lugar certo para sua loja não parar.</p><ArrowRight /></motion.div><motion.div variants={fadeUp} className="audience-card card-pastel"><span className="card-index">02 / serviços</span><h3>Organize o que você entrega.</h3><p>Tenha clareza dos clientes, recebimentos e próximos compromissos.</p><ArrowRight /></motion.div><motion.div variants={fadeUp} className="audience-card card-black"><span className="card-index">03 / operações</span><h3>Faça o negócio caber na sua mão.</h3><p>Informação direta para acompanhar a operação de onde estiver.</p><ArrowRight /></motion.div></motion.div></motion.div></section>

        <section className="plans-section" id="planos"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container py-24 lg:py-28"><motion.div variants={fadeUp} className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="section-kicker">Planos que acompanham</div><h2 className="section-title">Comece no seu ritmo.</h2></div><p className="max-w-sm text-[15px] leading-6 text-[#697176]">Escolha uma forma mais simples de cuidar do seu negócio. Você pode ajustar quando precisar.</p></motion.div><motion.div variants={staggerContainer} className="plans-grid mt-14"><motion.div variants={fadeUp} className="plan-card"><span className="plan-tag">Para começar</span><h3>Pulso</h3><p>O básico bem feito para organizar o dia a dia.</p><a href="#contato" className="button button-outline-dark">Conhecer plano <ArrowRight className="h-4 w-4" /></a><div className="plan-line" /><ul><li><Check /> Vendas e clientes</li><li><Check /> Controle financeiro</li><li><Check /> Acesso online</li></ul></motion.div><motion.div variants={fadeUp} className="plan-card plan-featured"><span className="plan-tag">Mais escolhido</span><h3>Frequência</h3><p>Mais visão para quem está pronto para crescer.</p><a href="#contato" className="button button-coral">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a><div className="plan-line" /><ul><li><Check /> Tudo do Pulso</li><li><Check /> Estoque e emissão fiscal</li><li><Check /> Relatórios inteligentes</li></ul></motion.div><motion.div variants={fadeUp} className="plan-card"><span className="plan-tag">Para avançar</span><h3>Sintonia</h3><p>A operação conectada para o próximo capítulo.</p><a href="#contato" className="button button-outline-dark">Falar com a equipe <ArrowRight className="h-4 w-4" /></a><div className="plan-line" /><ul><li><Check /> Tudo do Frequência</li><li><Check /> Integrações e permissões</li><li><Check /> Suporte próximo</li></ul></motion.div></motion.div></motion.div></section>

        <section className="faq-section" id="duvidas"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container grid gap-14 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:py-28"><motion.div variants={fadeUp}><div><div className="section-kicker">Ainda ficou alguma dúvida?</div><h2 className="section-title">Vamos deixar <span>mais claro.</span></h2><p className="section-copy">Se não encontrar o que procura, a nossa equipe está pronta para ouvir.</p><a href="#contato" className="button button-dark mt-7">Falar com a Biipe <ArrowRight className="h-4 w-4" /></a></div></motion.div><motion.div variants={staggerContainer} className="faq-list">{faqs.map(([question, answer], index) => <motion.div variants={fadeUp} className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown className="h-5 w-5" /></button>{openFaq === index && <p>{answer}</p>}</motion.div>)}</motion.div></motion.div></section>

        <section className="final-cta" id="contato"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="container relative overflow-hidden py-24 lg:py-32"><div className="cta-orb orb-a" /><div className="cta-orb orb-b" /><motion.div variants={fadeUp} className="relative z-10 max-w-2xl"><div className="section-kicker text-[#f9a5a0]">Seu próximo passo começa aqui</div><h2 className="cta-title">Dê um <span>biipe</span> na complexidade.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-white/65">Experimente uma gestão que acompanha o seu negócio sem ficar no caminho.</p><div className="mt-9 flex flex-wrap gap-3"><a href="/cadastro" className="button button-light">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a><a href="https://wa.me/554792916147?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" className="button button-dark-outline">Fale com a gente</a></div></motion.div></motion.div></section>
      </main>

      <footer className="footer"><div className="container grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-20"><div><Logo compact /><p className="mt-5 max-w-xs text-sm leading-6 text-[#767d81]">Gestão simples para negócios que querem enxergar mais longe.</p></div><div><span className="footer-label">Produto</span><a href="#funcionalidades">Funcionalidades</a><a href="#planos">Planos</a><a href="#ecossistema">Integrações</a></div><div><span className="footer-label">Biipe</span><a href="#para-quem">Para quem é</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Central de dúvidas</a></div><div><span className="footer-label">Contato</span><a href="mailto:oi@biipe.com.br">oi@biipe.com.br</a><a href="#contato">Fale com a equipe</a><a href="/login">Entrar na Biipe</a></div></div><div className="container flex flex-col justify-between gap-4 border-t border-black/8 py-6 text-[11px] font-semibold text-[#8b9194] sm:flex-row"><span>© 2026 Biipe. Feita para o movimento real.</span><span><a href="https://www.flaticon.com/br/" target="_blank" rel="noreferrer">Ícones de interface por Flaticon</a>&nbsp;&nbsp; · &nbsp;&nbsp;Privacidade&nbsp;&nbsp; · &nbsp;&nbsp;Termos de uso</span></div></footer>
    </div>
  );
}
