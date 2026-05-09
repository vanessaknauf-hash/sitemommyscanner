// Seções 2: Demo cards alternados, Para quem é, Autoridade, Por que confiar

function WhatYouScan() {
  const cats = [
    { icon: '🧴', label: 'Skincare',     items: 'Cremes, séruns, ácidos, retinol' },
    { icon: '💄', label: 'Maquiagem',    items: 'Bases, batons, máscaras' },
    { icon: '💊', label: 'Medicamentos', items: 'Analgésicos, antibióticos, vitaminas' },
    { icon: '🥗', label: 'Alimentos',    items: 'Industrializados, conservas, queijos' },
    { icon: '🌿', label: 'Suplementos',  items: 'Ômega, ferro, complexos vitamínicos' },
    { icon: '🧼', label: 'Higiene',      items: 'Sabonetes, perfumes, desodorantes' },
    { icon: '☀️', label: 'Solar',        items: 'Filtros químicos vs físicos' },
    { icon: '💅', label: 'Esmaltes',     items: 'Tolueno, formol, removedores' },
  ];
  return (
    <section style={{ background: 'var(--ms-bg-cream-2)' }}>
      <div className="ms-container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="ms-badge ms-badge-light" style={{ marginBottom: 20 }}>O que você pode escanear</span>
          <h2 className="ms-serif" style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            margin: '0 0 16px',
            color: 'var(--ms-text-dark)',
          }}>
            Tudo que entra em contato<br/>
            com você e que pode passar para o bebê.
          </h2>
          <p style={{ color: 'var(--ms-text-muted)', maxWidth: 540, margin: '0 auto', fontSize: 16 }}>
            Mais de <strong style={{ color: 'var(--ms-text-dark)' }}>15.000 produtos catalogados</strong> e analisados
            individualmente pela nossa equipe médica. Atualizado toda semana.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 14,
        }}>
          {cats.map((c, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid var(--ms-border)',
              borderRadius: 14,
              padding: '20px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'var(--ms-bg-pink)',
                display: 'grid', placeItems: 'center',
                fontSize: 22, flexShrink: 0,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ms-text-dark)' }}>{c.label}</div>
                <div style={{ fontSize: 12.5, color: 'var(--ms-text-muted)', marginTop: 2 }}>{c.items}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoRow({ reverse, status, title, copy, brand, productName, reasons, screenshot }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      marginBottom: 80,
    }} className="demo-row">
      <div style={{
        order: reverse ? 2 : 1,
        textAlign: 'left',
      }} className="demo-text">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          borderRadius: 999,
          background: status === 'safe' ? '#E8F0E5' : status === 'unsafe' ? '#FCE5E5' : '#FFF4E0',
          color: status === 'safe' ? '#3F5840' : status === 'unsafe' ? '#A33A3A' : '#B8800C',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          <span>{status === 'safe' ? '✓' : status === 'unsafe' ? '✕' : '!'}</span>
          {status === 'safe' ? 'Liberado' : status === 'unsafe' ? 'Evitar' : 'Atenção'}
        </div>
        <h3 className="ms-serif" style={{
          fontSize: 'clamp(28px, 3.4vw, 38px)',
          margin: '0 0 16px',
          color: 'var(--ms-text-dark)',
          lineHeight: 1.15,
        }}>{title}</h3>
        <p style={{
          color: 'var(--ms-text-muted)',
          fontSize: 16,
          lineHeight: 1.65,
          margin: 0,
        }}>{copy}</p>
      </div>
      <div style={{
        order: reverse ? 1 : 2,
        display: 'flex',
        justifyContent: 'center',
      }} className="demo-phone">
        <PhoneFrame scale={0.95} tilt={reverse ? -3 : 3} glow>
          {screenshot ? (
            <img src={screenshot} alt={productName || title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <ResultScreen scale={0.95} status={status} brand={brand} productName={productName} reasons={reasons} />
          )}
        </PhoneFrame>
      </div>
    </div>
  );
}

function DemoCards() {
  return (
    <section style={{ background: 'var(--ms-bg-cream)' }}>
      <div className="ms-container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="ms-badge ms-badge-light" style={{ marginBottom: 20 }}>Veja o app em ação</span>
          <h2 className="ms-serif" style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            margin: 0, color: 'var(--ms-text-dark)',
          }}>
            Cada produto, uma resposta clara.<br/>
            <span style={{ color: 'var(--ms-rose-deep)' }}>Em segundos.</span>
          </h2>
        </div>

        <DemoRow
          status="safe"
          title="Aquele creme do dia a dia que você ama"
          copy="Você abre o app, escaneia, e em segundos vê: liberado. Com explicação dos ingredientes, por que é seguro, e a referência da dermatologista. Você usa tranquila — sem culpa, sem aperto no peito."
          screenshot="assets/screen-cerave.png"
        />
        <DemoRow
          reverse
          status="unsafe"
          title="O sérum de retinol que ficou na nécessaire"
          copy="Aquele produto que você usava antes de engravidar e ficou na dúvida se pode continuar? O app te avisa imediatamente: evitar. E mostra o porquê — em linguagem que você entende, sem termo técnico."
          screenshot="assets/screen-retinol.png"
        />
        <DemoRow
          status="caution"
          title="O remédio que a farmácia liberou sem perguntar"
          copy="Dor de cabeça, gripe, azia… você toma sem pensar. O app revisa cada princípio ativo e te diz se é categoria A, B, C ou D para gestação — com a recomendação do que você deve fazer."
          screenshot="assets/screen-dipirona.png"
          brand="DIPIRONA"
          productName="Dipirona sódica 500mg"
          reasons={[
            { ok: false, text: 'Categoria C no 3º trimestre' },
            { ok: true, text: 'Pode ser usada no 1º e 2º trimestre' },
            { ok: true, text: 'Dose máxima: 500mg/dia' },
          ]}
        />
      </div>
      <style>{`
        @media (max-width: 800px) {
          .demo-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .demo-text { order: 2 !important; text-align: center !important; }
          .demo-phone { order: 1 !important; }
        }
      `}</style>
    </section>
  );
}

function Authority() {
  return (
    <section style={{ background: 'var(--ms-bg-dark)', color: 'var(--ms-text-light)' }}>
      <div className="ms-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: 56,
          alignItems: 'center',
        }} className="auth-grid">
          <div style={{
            aspectRatio: '3/4',
            borderRadius: 18,
            border: '1px solid rgba(212,168,160,0.25)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
          }}>
            <img
              src="assets/dra-vanessa.jpeg"
              alt="Dra. Vanessa Knauf"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
          <div>
            <span className="ms-badge" style={{ marginBottom: 20 }}>Quem está por trás do app</span>
            <h2 className="ms-serif" style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              margin: '0 0 20px',
              color: 'var(--ms-text-light)',
              lineHeight: 1.1,
            }}>
              Pode ficar tranquila, mamãe.<br/>
              <span style={{ color: 'var(--ms-rose)' }}>Eu cuido disso por você.</span>
            </h2>
            <p style={{ color: 'var(--ms-text-light-muted)', fontSize: 17, lineHeight: 1.7, margin: '0 0 20px' }}>
              Eu sou a <strong style={{ color: 'var(--ms-text-light)' }}>Dra. Vanessa Knauf</strong> (CRM 76876 · RQE 51795),
              dermatologista, e já ajudei mais de <strong style={{ color: 'var(--ms-text-light)' }}>1.500 gestantes</strong> a
              cuidarem da pele e da saúde com segurança durante a gravidez.
            </p>
            <p style={{ color: 'var(--ms-text-light-muted)', fontSize: 17, lineHeight: 1.7, margin: '0 0 24px' }}>
              O Mommy Scanner é o meu protocolo clínico real, transformado em tecnologia.
              Cada análise que você vê dentro do app passou pela minha curadoria.
              Não é IA genérica — é meu consultório, na palma da sua mão.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {[
                'Análise individual de cada produto, validada clinicamente',
                'Banco de dados atualizado toda semana',
                'Linguagem clara — sem jargão médico',
                'Recomendações de substitutos quando algo é evitar',
              ].map((it, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  color: 'var(--ms-text-light-muted)', fontSize: 15,
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'var(--ms-rose)', color: 'var(--ms-bg-dark)',
                    display: 'grid', placeItems: 'center',
                    fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 2,
                  }}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .auth-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .auth-grid > div:first-child { max-width: 280px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}

function ForWho() {
  const items = [
    'Acabou de descobrir a gravidez e olha pra nécessaire sem saber o que ainda pode usar.',
    'Tem medo de errar num produto e acabar prejudicando o bebê — nem que seja sem querer.',
    'Cansou de pesquisar no Google e chegar em respostas contraditórias.',
    'Já gastou dinheiro com cosméticos que agora não sabe se pode usar.',
    'Quer continuar se cuidando — com pele bonita, autoestima alta — sem pôr o bebê em risco.',
    'Tem receita médica nova e quer conferir se aquele remédio é mesmo seguro.',
  ];
  return (
    <section style={{ background: 'var(--ms-bg-pink)' }}>
      <div className="ms-container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="ms-serif" style={{
          fontSize: 'clamp(32px, 4.5vw, 46px)',
          margin: '0 0 12px',
          color: 'var(--ms-rose-deep)',
        }}>
          O Mommy Scanner foi feito<br/>pra você que…
        </h2>
        <p style={{ color: 'var(--ms-text-muted)', margin: '0 0 40px', fontSize: 15 }}>
          Se você se identificar com pelo menos <strong>uma</strong> dessas frases, segue lendo.
        </p>
        <div style={{ display: 'grid', gap: 12, textAlign: 'left' }}>
          {items.map((t, i) => (
            <div key={i} style={{
              background: '#fff',
              padding: '18px 22px',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              border: '1px solid rgba(212,168,160,0.2)',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                border: '2px solid var(--ms-rose-deep)',
                color: 'var(--ms-rose-deep)',
                display: 'grid', placeItems: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
                marginTop: 1,
              }}>✓</div>
              <div style={{ fontSize: 15.5, color: 'var(--ms-text-dark)', lineHeight: 1.55 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTrust() {
  const items = [
    {
      title: 'Não é IA genérica chutando.',
      desc: 'Cada análise passa pela curadoria de uma dermatologista especializada em gestantes — não é um app que pegou base de dados qualquer da internet.',
    },
    {
      title: 'Baseado nas evidências mais atualizadas.',
      desc: 'Cruzamos ingredientes com publicações científicas e protocolos clínicos atualizados constantemente — o mesmo padrão usado em consultório.',
    },
    {
      title: 'Quem está por trás é uma médica.',
      desc: 'Eu, Dra. Vanessa, sou dermatologista com mais de 1.500 gestantes atendidas. Não é um app de tecnologia tentando vender saúde.',
    },
    {
      title: 'Já existem apps grátis pra isso?',
      desc: 'Não. O que existe são listas genéricas, fóruns confusos e respostas contraditórias. O Mommy Scanner é o primeiro app no mundo com curadoria médica especializada em gestação.',
    },
  ];
  return (
    <section style={{ background: 'var(--ms-bg-cream)' }}>
      <div className="ms-container-narrow">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="ms-badge ms-badge-light" style={{ marginBottom: 20 }}>Por que confiar</span>
          <h2 className="ms-serif" style={{ fontSize: 'clamp(30px, 4.2vw, 44px)', margin: 0, color: 'var(--ms-text-dark)' }}>
            "Mas eu posso confiar nesse app?"
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14, padding: '22px 24px',
              border: '1px solid var(--ms-border)',
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'var(--ms-bg-pink)', color: 'var(--ms-rose-deep)',
                display: 'grid', placeItems: 'center',
                fontSize: 14, fontWeight: 700, flexShrink: 0,
              }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--ms-text-dark)', marginBottom: 4 }}>{it.title}</div>
                <div style={{ fontSize: 14.5, color: 'var(--ms-text-muted)', lineHeight: 1.6 }}>{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhyTrust = WhyTrust;
window.DemoCards = DemoCards;
window.Authority = Authority;
window.ForWho = ForWho;
