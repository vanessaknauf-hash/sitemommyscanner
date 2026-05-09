// Seções 1: Topbar, Hero, Pensamentos da gestante, Como funciona

function StepIcon({ name }) {
  const common = { width: 24, height: 24, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'camera') return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M3 7h3l2-2h8l2 2h3v12H3z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
  if (name === 'lab') return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3"/>
      <path d="M8 3h8"/>
      <path d="M7 14h10"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M5 13l4 4L19 7"/>
    </svg>
  );
}

function TopBar() {
  return (
    <div style={{
      background: 'var(--ms-bg-dark)',
      borderBottom: '1px solid var(--ms-border-dark)',
      padding: '14px 0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div className="ms-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <MommyScannerLogo size={32} />
          <div style={{ color: 'var(--ms-text-light)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 18 }}>
            Mommy Scanner
          </div>
          <div style={{ color: 'var(--ms-rose)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginLeft: 6, paddingLeft: 12, borderLeft: '1px solid rgba(245,239,234,0.15)' }}>
            por Dra. Vanessa Knauf
          </div>
        </div>
        <a href="#oferta" style={{
          padding: '8px 18px',
          border: '1px solid var(--ms-rose)',
          color: 'var(--ms-rose)',
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Quero acesso
        </a>
      </div>
    </div>
  );
}

function Hero({ checkoutUrl, ctaText }) {
  return (
    <section style={{
      background: 'var(--ms-bg-dark)',
      color: 'var(--ms-text-light)',
      paddingTop: 60,
      paddingBottom: 80,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 800,
        background: 'radial-gradient(circle, rgba(212,168,160,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}/>
      <div className="ms-container" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <MommyScannerLogo size={72} glow />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          <span className="ms-badge">
            Criado por dermatologista
          </span>
          <span className="ms-badge">Para gestantes e mães que amamentam</span>
        </div>
        <h1 className="ms-serif" style={{
          fontSize: 'clamp(40px, 6vw, 68px)',
          lineHeight: 1.05,
          margin: '0 0 20px',
          maxWidth: 900,
          marginInline: 'auto',
          fontWeight: 600,
          color: 'var(--ms-text-light)',
        }}>
          Escaneie qualquer produto e descubra
          <span style={{ color: 'var(--ms-rose)' }}> em segundos</span> se é seguro pra gestação.
        </h1>
        <p style={{
          fontSize: 18,
          color: 'var(--ms-text-light-muted)',
          maxWidth: 620,
          margin: '0 auto 40px',
          lineHeight: 1.55,
        }}>
          Skincare, maquiagem, medicamentos, alimentos, suplementos.
          Aponte a câmera no código de barras e tenha a análise na hora na palma da mão.
        </p>

        {/* phone — vídeo loop simulando o uso real */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          marginBottom: 48,
        }}>
          <PhoneVideo scale={0.82} />
        </div>

        <a href={checkoutUrl || '#'} className="ms-cta">
          {ctaText || 'Quero meu acesso agora'}
          <span className="ms-cta-arrow">→</span>
        </a>
        <div style={{ marginTop: 20, fontSize: 22, color: '#E8C36A', letterSpacing: 4, textAlign: 'center' }}>
          ★★★★★
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { num: '+1.500', label: 'gestantes atendidas' },
    { num: '15.000+', label: 'produtos analisados' },
    { num: 'Curadoria', label: 'médica especializada' },
    { num: '7 dias', label: 'garantia incondicional' },
  ];
  return (
    <div style={{
      background: 'var(--ms-bg-dark-2)',
      borderTop: '1px solid var(--ms-border-dark)',
      borderBottom: '1px solid var(--ms-border-dark)',
      padding: '20px 0',
    }}>
      <div className="ms-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 16,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div className="ms-serif" style={{ fontSize: 22, fontWeight: 700, color: 'var(--ms-rose)', fontStyle: 'normal' }}>{it.num}</div>
            <div style={{ fontSize: 11, color: 'var(--ms-text-light-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.TrustBar = TrustBar;

function ThoughtBubbles() {
  const thoughts = [
    { side: 'left',  text: 'Esse creme aqui pode? Não sei se é seguro…' },
    { side: 'right', text: 'A bula tá em inglês, e agora?' },
    { side: 'left',  text: 'Será que esse remédio passa pra ele?' },
    { side: 'right', text: 'Já usei isso ontem… será que fez mal?' },
  ];
  return (
    <section style={{
      background: 'var(--ms-bg-dark)',
      color: 'var(--ms-text-light)',
      paddingTop: 0,
    }}>
      <div className="ms-container" style={{ textAlign: 'center' }}>
        <h2 className="ms-serif" style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          margin: '0 0 8px',
          color: 'var(--ms-text-light)',
        }}>
          A cada produto que você vê,<br/>vem aquele aperto no peito… Será que pode usar na gravidez? E na amamentação?
        </h2>
        <p style={{ color: 'var(--ms-rose)', fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 48px' }}>
          Você se reconhece em alguma dessas situações?
        </p>

        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'grid',
          gap: 18,
        }}>
          {thoughts.map((t, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: t.side === 'left' ? 'flex-start' : 'flex-end',
            }}>
              <div style={{
                background: t.side === 'left' ? 'rgba(212,168,160,0.12)' : 'var(--ms-rose)',
                color: t.side === 'left' ? 'var(--ms-text-light)' : 'var(--ms-bg-dark)',
                padding: '14px 20px',
                borderRadius: t.side === 'left' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                fontSize: 16,
                fontWeight: 500,
                maxWidth: 480,
                border: t.side === 'left' ? '1px solid rgba(212,168,160,0.25)' : 'none',
              }}>
                {t.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56,
          maxWidth: 620,
          margin: '56px auto 0',
          padding: '28px 32px',
          background: 'rgba(212,168,160,0.06)',
          border: '1px solid rgba(212,168,160,0.18)',
          borderRadius: 16,
        }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🤍</div>
          <div className="ms-serif" style={{ fontSize: 24, lineHeight: 1.3, color: 'var(--ms-text-light)' }}>
            Você não tem mais que pesquisar nada.<br/>
            <span style={{ color: 'var(--ms-rose)' }}>Você só precisa apontar a câmera.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      icon: 'camera',
      title: 'Escaneie',
      desc: 'Aponte a câmera no código de barras de qualquer produto — cosmético, remédio, alimento ou suplemento.',
    },
    {
      n: '02',
      icon: 'lab',
      title: 'Analise',
      desc: 'Em segundos, a IA cruza os ingredientes com o protocolo clínico de segurança na gravidez e amamentação.',
    },
    {
      n: '03',
      icon: 'check',
      title: 'Decida',
      desc: 'Veja "liberado", "atenção" ou "evitar" — com a explicação clara do porquê. Sem dúvida, sem culpa. Sem prejudicar o seu bebê.',
    },
  ];
  return (
    <section style={{ background: 'var(--ms-bg-cream)' }}>
      <div className="ms-container" style={{ textAlign: 'center' }}>
        <span className="ms-badge ms-badge-light" style={{ marginBottom: 20 }}>Como funciona</span>
        <h2 className="ms-serif" style={{
          fontSize: 'clamp(32px, 4.5vw, 48px)',
          margin: '0 0 16px',
          color: 'var(--ms-text-dark)',
        }}>
          3 passos. Menos de 5 segundos.<br/>
          <span style={{ color: 'var(--ms-rose-deep)' }}>Zero dúvida.</span>
        </h2>
        <p style={{ color: 'var(--ms-text-muted)', maxWidth: 540, margin: '0 auto 60px', fontSize: 16 }}>
          O que antes você levava 30 minutos pesquisando no Google,
          agora resolve antes mesmo de tirar o produto da prateleira.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          alignItems: 'stretch',
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid var(--ms-border)',
              borderRadius: 18,
              padding: '32px 28px',
              textAlign: 'left',
              position: 'relative',
              boxShadow: '0 2px 0 rgba(0,0,0,0.02)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: 'var(--ms-rose-deep)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}>PASSO {s.n}</div>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'var(--ms-bg-pink)',
                color: 'var(--ms-rose-deep)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: 16,
              }}>
                <StepIcon name={s.icon} />
              </div>
              <h3 className="ms-serif" style={{ fontSize: 28, margin: '0 0 8px', color: 'var(--ms-text-dark)' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--ms-text-muted)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: -14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 28, height: 28,
                  background: 'var(--ms-rose)',
                  color: '#fff',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                  zIndex: 2,
                }} className="hide-mobile">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

window.TopBar = TopBar;
window.Hero = Hero;
window.ThoughtBubbles = ThoughtBubbles;
window.HowItWorks = HowItWorks;
