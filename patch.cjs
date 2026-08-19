const fs = require('fs');

// Home.tsx
let h = fs.readFileSync('client/src/pages/Home.tsx', 'utf8');
h = h.replace(/Come(ç|)ar agora/g, 'Solicitar orçamento');
h = h.replace(/Solicite seu acesso/g, 'Solicitar orçamento');
h = h.replace(/max-w-sm text-sm leading-6/g, 'max-w-sm text-[15px] leading-6');
fs.writeFileSync('client/src/pages/Home.tsx', h);

// Signup.tsx
let s = fs.readFileSync('client/src/pages/Signup.tsx', 'utf8');
s = s.replace(/<span className="signup-kicker">Primeiro passo<\/span><h1>Comece a ver seu neg.*?<\/h1><p>Crie sua conta.*?<\/p>/, '<span className="signup-kicker">Orçamento</span><h1>Solicite um orçamento sob medida.</h1><p>Preencha seus dados para conversarmos sobre como a Biipe se encaixa na rotina da sua operação.</p>');
s = s.replace(/<span className="signup-kicker">Conta Biipe<\/span><h2>Crie seu acesso<\/h2><p>Preencha seus dados para come.*?<\/p>/, '<span className="signup-kicker">Contato</span><h2>Fale com a gente</h2><p>Preencha seus dados para solicitarmos o orçamento.</p>');
s = s.replace(/Criar minha conta/g, 'Solicitar orçamento');
s = s.replace(/<label>Crie uma senha[\s\S]*?<\/label>/, '');
s = s.replace(/<p className="login-hint">.*?<\/p>/, '');
s = s.replace(/Cadastro recebido\./, 'Solicitação recebida.');
s = s.replace(/Em breve voc.*?acessar sua experi.*?Biipe\./, 'Em breve nossa equipe entrará em contato com o seu orçamento.');
fs.writeFileSync('client/src/pages/Signup.tsx', s);

// index.css
let c = fs.readFileSync('client/src/index.css', 'utf8');
c += '\n.trust-note p { font-size: 17px; }';
c += '\n.module-pill small { font-size: 0.8rem; }';
c += '\n.audience-card p { font-size: 1rem; }';
c += '\n.card-pastel { background-color: #d1f4e0 !important; color: #111315 !important; }';
c += '\n.card-black { background-color: #111315 !important; color: #ffffff !important; }';
c += '\n.faq-item p { font-size: 1rem; }';
c += '\n.section-kicker { font-size: 1rem !important; }\n';
fs.writeFileSync('client/src/index.css', c);
