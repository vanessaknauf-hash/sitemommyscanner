// Seções 3: Comparação Opção 1 vs 2, Oferta, Garantia, FAQ, Footer

function PriceAnchor({ checkoutUrl, ctaText }) {
  return (
    <section style={{
      background: 'var(--ms-bg-dark)',
      color: 'var(--ms-text-light)',
      paddingTop: 88,
      paddingBottom: 88,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(212,168,160,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}/>
      <div className="ms-container-narrow" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <MommyScannerLogo size={56} glow />
        </div>
        <h2 className="ms-serif" style={{
          fontSize: 'clamp(32px, 4.5vw, 48px)',
          margin: '0 0 20px',
          color: 'var(--ms-text-light)',
          lineHeight: 1.15,
        }}>
          Sua gestação merece <span style={{ color: 'var(--ms-rose)' }}>tranquilidade.</span><br/>
          Não dúvida.
        </h2>
        <p style={{ color: 'var(--ms-text-light-muted)', fontSize: 17, lineHeight: 1.7, maxWidth: 580, margin: '0 auto 36px' }}>
          Uma consulta com dermatologista e outra com obstetra pra tirar todas as suas dúvidas custam,
          facilmente, <strong style={{ color: 'var(--ms-text-light)' }}>R$ 800 ou mais</strong>.
          E a vida do seu bebê <em style={{ color: 'var(--ms-rose)', fontStyle: 'italic' }}>não tem preço.</em>
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12,
          maxWidth: 720, margin: '0 auto 32px', alignItems: 'stretch',
        }} className="anchor-grid">
          <div style={{
            background: 'rgba(245,239,234,0.04)',
            border: '1px solid rgba(245,239,234,0.1)',
            borderRadius: 14,
            padding: '22px 18px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: 10, color: 'var(--ms-text-light-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              Consulta dermato
            </div>
            <div className="ms-serif" style={{
              fontSize: 30, color: 'var(--ms-text-light)', fontStyle: 'normal', fontWeight: 600,
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(212,168,160,0.5)',
              opacity: 0.6, lineHeight: 1,
            }}>
              R$ 400
            </div>
            <div style={{ fontSize: 11, color: 'var(--ms-text-light-muted)', marginTop: 6 }}>
              uma única consulta
            </div>
          </div>
          <div style={{
            background: 'rgba(245,239,234,0.04)',
            border: '1px solid rgba(245,239,234,0.1)',
            borderRadius: 14,
            padding: '22px 18px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: 10, color: 'var(--ms-text-light-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              Consulta obstetra
            </div>
            <div className="ms-serif" style={{
              fontSize: 30, color: 'var(--ms-text-light)', fontStyle: 'normal', fontWeight: 600,
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(212,168,160,0.5)',
              opacity: 0.6, lineHeight: 1,
            }}>
              R$ 400
            </div>
            <div style={{ fontSize: 11, color: 'var(--ms-text-light-muted)', marginTop: 6 }}>
              uma única consulta
            </div>
          </div>
          <div style={{
            background: 'rgba(212,168,160,0.1)',
            border: '1px solid var(--ms-rose)',
            borderRadius: 14,
            padding: '22px 18px',
            textAlign: 'left',
            position: 'relative',
          }}>
            <div style={{ fontSize: 10, color: 'var(--ms-rose)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
              Mommy Scanner
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span className="ms-serif" style={{
                fontSize: 30, color: 'var(--ms-text-light)', fontStyle: 'normal', fontWeight: 700, lineHeight: 1,
              }}>R$ 16,67</span>
              <span style={{ fontSize: 12, color: 'var(--ms-text-light-muted)' }}>/mês</span>
            </div>
            <div style={{ fontSize: 9.5, color: 'rgba(245,239,234,0.55)', marginTop: 6, letterSpacing: '0.02em' }}>
              R$ 97 por 6 meses
            </div>
            <div style={{ fontSize: 11, color: 'var(--ms-rose)', marginTop: 4 }}>
              acesso ilimitado
            </div>
          </div>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          padding: '14px 22px',
          background: 'rgba(212,168,160,0.08)',
          border: '1px dashed rgba(212,168,160,0.4)',
          borderRadius: 999,
          marginBottom: 32,
          fontSize: 14,
          color: 'var(--ms-text-light-muted)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <span style={{ textDecoration: 'line-through', opacity: 0.7 }}>R$ 800+ em consultas</span>
          <span style={{ color: 'var(--ms-rose)', fontWeight: 700 }}>vs</span>
          <span style={{ color: 'var(--ms-text-light)', fontWeight: 600 }}>R$ 16,67/mês no Mommy Scanner</span>
        </div>

        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: 1.5,
          color: 'var(--ms-text-light)',
          maxWidth: 580, margin: '0 auto 32px',
          fontWeight: 500,
        }}>
          Por <strong style={{ color: 'var(--ms-rose)', fontStyle: 'normal' }}>menos de R$ 17 por mês</strong>,<br/>
          você tem 6 meses inteiros de tranquilidade.
        </p>

        <a href={checkoutUrl} className="ms-cta">
          {ctaText || 'Quero meu acesso agora'}
          <span className="ms-cta-arrow">→</span>
        </a>
        <div style={{ marginTop: 18, fontSize: 13, color: 'var(--ms-text-light-muted)' }}>
          Acesso imediato · Garantia de 7 dias
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .anchor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Comparison() {
  return (
    <section style={{ background: 'var(--ms-bg-cream)' }}>
      <div className="ms-container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="ms-serif" style={{
            fontSize: 'clamp(30px, 4.2vw, 44px)',
            margin: '0 0 12px',
            color: 'var(--ms-text-dark)',
          }}>
            Agora você tem <span style={{ color: 'var(--ms-rose-deep)' }}>duas escolhas.</span>
          </h2>
          <p style={{ color: 'var(--ms-text-muted)', fontSize: 16, margin: 0 }}>
            Qual delas faz mais sentido pra você e pro seu bebê?
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }} className="comp-grid">
          <div style={{
            background: '#fff', borderRadius: 18, padding: '32px 28px',
            border: '1px solid #f0d4cf',
            position: 'relative', opacity: 0.85,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: '#FCE5E5', color: '#A33A3A',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: 18,
            }}>OPÇÃO 1</div>
            <div style={{ fontSize: 36, marginBottom: 12 }}>😩</div>
            <h3 className="ms-serif" style={{ fontSize: 24, lineHeight: 1.3, margin: '0 0 22px', color: 'var(--ms-text-dark)' }}>
              Continuar pesquisando no Google a cada produto
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {[
                'Horas perdidas em fóruns e blogs contraditórios',
                'Dúvida e culpa sempre que usa qualquer coisa',
                'Risco de usar algo proibido sem saber',
                'Estresse desnecessário num momento que devia ser leve',
              ].map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ms-text-muted)' }}>
                  <span style={{ color: '#A33A3A', fontWeight: 700 }}>✕</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            background: 'var(--ms-bg-dark)', color: 'var(--ms-text-light)',
            borderRadius: 18, padding: '32px 28px',
            border: '1px solid var(--ms-rose)',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(212,168,160,0.18)',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'var(--ms-rose)', color: 'var(--ms-bg-dark)',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: 18,
              whiteSpace: 'nowrap',
            }}>OPÇÃO 2 · A escolha inteligente</div>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🤍</div>
            <h3 className="ms-serif" style={{ fontSize: 24, lineHeight: 1.3, margin: '0 0 22px', color: 'var(--ms-text-light)' }}>
              Apontar a câmera e ter a segurança médica em segundos
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {[
                'Resposta clara em menos de 5 segundos',
                'Análise médica em cada produto',
                'Tranquilidade pra usar o que pode',
                'Mais energia pra curtir essa fase',
              ].map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ms-text-light-muted)' }}>
                  <span style={{ color: 'var(--ms-rose)', fontWeight: 700 }}>✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Offer({ checkoutUrl, ctaText }) {
  return (
    <section id="oferta" style={{
      background: 'var(--ms-bg-pink)',
      paddingTop: 80, paddingBottom: 40,
    }}>
      <div className="ms-container-narrow">
        <div style={{
          background: '#fff',
          borderRadius: 22,
          padding: '48px 40px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(212,168,160,0.15)',
          border: '2px solid var(--ms-rose-soft)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <MommyScannerLogo size={56} />
          </div>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            color: 'var(--ms-rose-deep)', textTransform: 'uppercase',
            marginBottom: 10,
          }}>Oferta de lançamento</div>
        <h2 className="ms-serif" style={{
            fontSize: 'clamp(28px, 4vw, 38px)',
            margin: '0 0 24px',
            color: 'var(--ms-text-dark)',
            lineHeight: 1.2,
          }}>
            Acesso completo ao Mommy Scanner<br/>por <span style={{ color: 'var(--ms-rose-deep)' }}>6 meses</span>
          </h2>
          <ul style={{
            listStyle: 'none', padding: 0, margin: '0 auto 28px', maxWidth: 380,
            display: 'grid', gap: 10, textAlign: 'left',
          }}>
            {[
              'Escaneamento ilimitado de qualquer produto',
              'Mais de 15.000 produtos já catalogados',
              'Análises da Equipe Médica',
              'Atualização semanal do banco de dados',
              'Cosméticos, remédios, alimentos e suplementos',
              'Disponível 24h, na palma da sua mão',
            ].map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--ms-text-dark)' }}>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: '#E8F0E5', color: 'var(--ms-green)',
                  display: 'grid', placeItems: 'center',
                  fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 2,
                }}>✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div style={{
            padding: '24px 24px',
            background: 'var(--ms-bg-cream)',
            borderRadius: 14,
            marginBottom: 24,
          }}>
            <div style={{ fontSize: 13, color: 'var(--ms-text-muted)', marginBottom: 10 }}>
              Hoje você garante acesso completo por
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8 }}>
              <span style={{
                fontFamily: 'var(--serif)', fontWeight: 700,
                fontSize: 64, color: 'var(--ms-green)',
                lineHeight: 1, fontStyle: 'normal',
              }}>R$ 97</span>
            </div>
            <div style={{ fontSize: 14, color: 'var(--ms-text-dark)', marginTop: 10, fontWeight: 600 }}>
              à vista · 6 meses de acesso
            </div>
            <div style={{
              display: 'inline-block',
              marginTop: 10,
              padding: '4px 12px',
              background: 'rgba(63,88,64,0.08)',
              borderRadius: 999,
              fontSize: 12,
              color: 'var(--ms-green)',
              fontWeight: 600,
            }}>
              equivale a R$ 16,67/mês
            </div>
          </div>

          <a href={checkoutUrl} className="ms-cta" style={{ width: '100%', justifyContent: 'center' }}>
            {ctaText || 'Quero meu acesso agora'}
            <span className="ms-cta-arrow">→</span>
          </a>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: 16,
            marginTop: 20, fontSize: 12, color: 'var(--ms-text-muted)',
            flexWrap: 'wrap',
          }}>
            <span>🔒 Pagamento 100% seguro</span>
            <span>·</span>
            <span>⚡ Acesso imediato</span>
            <span>·</span>
            <span>🛡️ Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee({ checkoutUrl }) {
  return (
    <section style={{ background: 'var(--ms-bg-pink)', paddingTop: 40 }}>
      <div className="ms-container-narrow">
        <div style={{
          background: '#fff',
          borderRadius: 22,
          padding: '40px 32px',
          textAlign: 'center',
          border: '1px solid rgba(212,168,160,0.25)',
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'var(--ms-bg-pink)',
            border: '3px solid var(--ms-rose-deep)',
            display: 'grid', placeItems: 'center',
            margin: '0 auto 16px',
          }}>
            <div style={{ textAlign: 'center', lineHeight: 1 }}>
              <div className="ms-serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--ms-rose-deep)' }}>7</div>
              <div style={{ fontSize: 9, color: 'var(--ms-rose-deep)', fontWeight: 700, letterSpacing: '0.1em' }}>DIAS</div>
            </div>
          </div>
          <h3 className="ms-serif" style={{
            fontSize: 32, margin: '0 0 12px', color: 'var(--ms-text-dark)',
          }}>
            Experimente. Se não amar, devolvemos.
          </h3>
          <p style={{
            color: 'var(--ms-text-muted)', fontSize: 15, lineHeight: 1.6,
            maxWidth: 480, margin: '0 auto',
          }}>
            Você tem <strong>7 dias</strong> para testar o Mommy Scanner com calma e sem medo.
            Se por qualquer motivo sentir que não é pra você,
            é só pedir o reembolso e devolvemos <strong>100%</strong> do seu investimento.
            Sem letra miúda, sem perguntas chatas.
          </p>
          <div style={{
            marginTop: 20,
            color: 'var(--ms-rose-deep)',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 18,
            fontWeight: 600,
          }}>
            Risco zero. Tranquilidade total.
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      marginBottom: 10,
      border: '1px solid var(--ms-border)',
      overflow: 'hidden',
    }}>
      <button onClick={onClick} style={{
        width: '100%',
        background: 'transparent',
        padding: '18px 22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        fontSize: 15.5,
        fontWeight: 600,
        color: 'var(--ms-text-dark)',
        gap: 16,
      }}>
        <span style={{ flex: 1 }}>{q}</span>
        <span style={{
          width: 26, height: 26, borderRadius: '50%',
          background: isOpen ? 'var(--ms-rose-deep)' : 'var(--ms-bg-pink)',
          color: isOpen ? '#fff' : 'var(--ms-rose-deep)',
          display: 'grid', placeItems: 'center',
          fontSize: 14, fontWeight: 700,
          transition: 'all .2s ease',
          flexShrink: 0,
        }}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div style={{
          padding: '0 22px 20px',
          fontSize: 14.5,
          color: 'var(--ms-text-muted)',
          lineHeight: 1.65,
        }}>{a}</div>
      )}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    {
      q: 'Como funciona o escaneamento?',
      a: 'Você abre o app, aponta a câmera no código de barras do produto, e em segundos recebe a análise. Funciona com cosméticos, medicamentos, alimentos e suplementos.',
    },
    {
      q: 'Preciso baixar na loja de aplicativos?',
      a: 'Não. O Mommy Scanner é um PWA — você acessa pelo navegador e adiciona o atalho na tela inicial do celular. Funciona como um app, mas sem ocupar espaço e sem depender da Apple Store ou Play Store. iOS e Android.',
    },
    {
      q: 'A cobrança é recorrente?',
      a: 'Sim, mas só a cada 6 meses. Você paga R$ 97 hoje e tem acesso completo por 6 meses. Depois desse período, a cobrança se renova automaticamente para garantir que você não fique sem o app no momento que mais precisa. Você pode cancelar a qualquer momento, sem multa.',
    },
    {
      q: 'Posso cancelar quando quiser?',
      a: 'Sim, a qualquer momento. É só nos enviar uma mensagem. Você continua usando o app até o fim do período já pago e não tem nenhuma nova cobrança depois disso. Sem multa, sem letra miúda.',
    },
    {
      q: 'O app substitui a consulta com meu médico?',
      a: 'Não. O Mommy Scanner é uma ferramenta de apoio para decisões do dia a dia — saber se aquele creme, alimento ou suplemento é seguro. Para diagnósticos, prescrições e dúvidas clínicas, sempre consulte seu obstetra ou dermatologista.',
    },
    {
      q: 'Em qual fase da gestação posso usar?',
      a: 'Em qualquer fase. O app considera as três fases (1º, 2º e 3º trimestre) na análise — alguns produtos são liberados num trimestre e contraindicados em outro, e o Mommy Scanner te avisa exatamente quando.',
    },
    {
      q: 'Posso usar durante a amamentação também?',
      a: 'Sim! O app diferencia recomendações para gestação e lactação. Você seleciona seu momento no perfil e as análises se ajustam.',
    },
    {
      q: 'Como recebo o acesso?',
      a: 'Logo depois da compra, você recebe um e-mail com o link e as instruções para baixar o app (iOS e Android) e fazer login. Acesso liberado na hora.',
    },
    {
      q: 'Por quanto tempo vou ter acesso?',
      a: 'A assinatura é válida por 6 meses a partir da data da compra. No fim do período, você pode renovar se quiser continuar.',
    },
    {
      q: 'Quem está por trás da curadoria?',
      a: 'A Dra. Vanessa Knauf — médica dermatologista (CRM 76876 · RQE 51795), especializada em saúde da gestante. Cada produto adicionado ao banco de dados passa pela curadoria dela.',
    },
    {
      q: 'E se eu não gostar?',
      a: 'Você tem 7 dias para testar com calma. Se sentir que não é pra você, é só mandar um e-mail e devolvemos 100% do valor. Sem letra miúda.',
    },
  ];
  return (
    <section style={{ background: 'var(--ms-bg-cream)' }}>
      <div className="ms-container-narrow">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 className="ms-serif" style={{
            fontSize: 'clamp(32px, 4.5vw, 44px)',
            margin: '0 0 8px', color: 'var(--ms-text-dark)',
          }}>
            Perguntas frequentes
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ checkoutUrl, ctaText }) {
  return (
    <section style={{
      background: 'var(--ms-bg-dark)',
      color: 'var(--ms-text-light)',
      textAlign: 'center',
    }}>
      <div className="ms-container-narrow">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <MommyScannerLogo size={64} glow />
        </div>
        <h2 className="ms-serif" style={{
          fontSize: 'clamp(32px, 4.5vw, 48px)',
          margin: '0 0 16px',
          color: 'var(--ms-text-light)',
          lineHeight: 1.15,
        }}>
          Sua gestação merece <span style={{ color: 'var(--ms-rose)' }}>tranquilidade.</span><br/>
          Não dúvida.
        </h2>
        <p style={{ color: 'var(--ms-text-light-muted)', fontSize: 17, maxWidth: 520, margin: '0 auto 32px' }}>
          São 6 meses inteiros de acesso, por menos do que você gasta com um único pote de creme.
          Pra cada produto que entrar na sua vida — você ter certeza.
        </p>
        <a href={checkoutUrl} className="ms-cta">
          {ctaText || 'Quero meu acesso agora'}
          <span className="ms-cta-arrow">→</span>
        </a>
        <div style={{ marginTop: 24, fontSize: 14, color: 'var(--ms-text-light-muted)' }}>
          R$ 97 à vista · 6 meses de acesso · Garantia de 7 dias
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: 'var(--ms-bg-dark)',
      borderTop: '1px solid var(--ms-border-dark)',
      padding: '36px 0',
      color: 'var(--ms-text-light-muted)',
      fontSize: 12,
      textAlign: 'center',
    }}>
      <div className="ms-container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center', marginBottom: 12 }}>
          <MommyScannerLogo size={28} />
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 16, color: 'var(--ms-text-light)' }}>
            Mommy Scanner
          </span>
        </div>
        <div style={{ maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
          O Mommy Scanner é uma ferramenta de apoio à decisão e não substitui a orientação do seu médico.
          Sempre consulte seu obstetra ou dermatologista antes de mudanças importantes na rotina de cuidados ou medicação.
        </div>
        <div style={{ marginTop: 16, opacity: 0.6 }}>
          © Mommy Scanner · Dra. Vanessa Knauf · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}

function StickyCTA({ checkoutUrl, ctaText }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0,
      background: 'rgba(31,23,20,0.96)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(212,168,160,0.2)',
      padding: '12px 16px',
      transform: show ? 'translateY(0)' : 'translateY(110%)',
      transition: 'transform 0.3s ease',
      zIndex: 100,
    }}>
      <div className="ms-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <div className="hide-on-tiny" style={{ color: 'var(--ms-text-light)', fontSize: 14 }}>
          Garanta sua tranquilidade na gestação
        </div>
        <a href={checkoutUrl} className="ms-cta" style={{ padding: '12px 20px', fontSize: 13 }}>
          {ctaText || 'Quero acesso'}
          <span className="ms-cta-arrow">→</span>
        </a>
      </div>
      <style>{`@media (max-width: 500px) { .hide-on-tiny { display: none; } }`}</style>
    </div>
  );
}

window.StickyCTA = StickyCTA;
window.Comparison = Comparison;
window.Offer = Offer;
window.Guarantee = Guarantee;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
