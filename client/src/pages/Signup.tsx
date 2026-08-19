import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const logo = "/Biipe_logo.svg";

// Biipe design reminder: cadastro editorial, claro e direto; graphite structure with Pulso Coral reserved for action and status.
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="signup-page">
      <div className="signup-shell">
        <section className="signup-intro">
          <Link href="/" className="signup-back"><ArrowLeft className="h-4 w-4" /> Voltar para a página inicial</Link>
          <div className="signup-brand"><img src={logo} alt="Biipe" /><strong>Biipe</strong></div>
          <div className="signup-copy"><span className="signup-kicker">Primeiro passo</span><h1>Comece a ver seu negócio com mais clareza.</h1><p>Crie sua conta e experimente uma gestão que acompanha o ritmo real da sua operação.</p><div className="signup-benefits"><span><Check /> Cadastro rápido</span><span><Check /> Acesso online</span><span><Check /> Sem cartão de crédito</span></div></div>
          <div className="signup-note"><ShieldCheck className="h-5 w-5" /><span>Seus dados ficam protegidos e são usados apenas para criar sua experiência Biipe.</span></div>
        </section>
        <section className="signup-form-wrap"><div className="signup-form-card"><div className="signup-form-heading"><span className="signup-kicker">Conta Biipe</span><h2>Crie seu acesso</h2><p>Preencha seus dados para começar.</p></div>{submitted ? <div className="signup-success"><div className="success-icon"><Check /></div><h2>Cadastro recebido.</h2><p>Obrigado por dar o primeiro passo. Em breve você poderá acessar sua experiência Biipe.</p><Link href="/" className="button button-dark">Voltar ao início <ArrowRight className="h-4 w-4" /></Link></div> : <form onSubmit={handleSubmit} className="signup-form"><label>Seu nome<input name="name" type="text" placeholder="Como podemos chamar você?" required /></label><label>E-mail profissional<input name="email" type="email" placeholder="voce@empresa.com" required /></label><div className="form-row"><label>Telefone<input name="phone" type="tel" placeholder="(00) 00000-0000" required /></label><label>Seu negócio<input name="business" type="text" placeholder="Nome da empresa" required /></label></div><label>Crie uma senha<div className="password-field"><input name="password" type={showPassword ? "text" : "password"} placeholder="Mínimo de 8 caracteres" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>{showPassword ? <EyeOff /> : <Eye />}</button></div></label><label className="terms-check"><input type="checkbox" required /><span>Li e concordo com os termos de uso e a política de privacidade.</span></label><button type="submit" className="button button-coral signup-submit">Criar minha conta <ArrowRight className="h-4 w-4" /></button><p className="login-hint">Já possui uma conta? <a href="#login">Entrar na Biipe</a></p></form>}</div></section>
      </div>
    </main>
  );
}
