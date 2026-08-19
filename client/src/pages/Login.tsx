import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const logo = "/Biipe_logo.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Lógica fictícia de login para o momento
  }

  return (
    <main className="signup-page">
      <div className="signup-shell">
        <section className="signup-intro">
          <Link href="/" className="signup-back"><ArrowLeft className="h-4 w-4" /> Voltar para a página inicial</Link>
          <div className="signup-brand"><img src={logo} alt="Biipe" /><strong>Biipe</strong></div>
          <div className="signup-copy">
            <span className="signup-kicker">Bem-vindo de volta</span>
            <h1>Sua gestão clara em um só lugar.</h1>
            <p>Acesse sua conta para continuar organizando seu negócio com a Biipe.</p>
          </div>
          <div className="signup-note" style={{ marginTop: "auto" }}>
            <ShieldCheck className="h-5 w-5" />
            <span>Seu ambiente é seguro e protegido.</span>
          </div>
        </section>
        <section className="signup-form-wrap">
          <div className="signup-form-card">
            <div className="signup-form-heading">
              <span className="signup-kicker">Acesso</span>
              <h2>Entrar na sua conta</h2>
              <p>Insira seu e-mail e senha para continuar.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="signup-form">
              <label>
                E-mail
                <input name="email" type="email" placeholder="voce@empresa.com" required />
              </label>
              <label>
                Senha
                <div className="password-field">
                  <input name="password" type={showPassword ? "text" : "password"} placeholder="Sua senha" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </label>
              
              <button type="submit" className="button button-coral signup-submit">
                Entrar <ArrowRight className="h-4 w-4" />
              </button>
              
              <p className="login-hint">
                Ainda não tem conta? <Link href="/cadastro">Solicite seu acesso</Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
