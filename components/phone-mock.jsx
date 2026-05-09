// PhoneVideo — loop animado simulando o app em uso
// Estados em sequência: scan → loading → result → repete com produto diferente

function PhoneFrame({ children, scale = 1, tilt = 0, glow = false }) {
  return (
    <div style={{
      width: 300 * scale, height: 620 * scale, borderRadius: 48 * scale,
      background: '#0a0a0a', padding: 10 * scale,
      boxShadow: glow
        ? '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,160,0.15)'
        : '0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.4)',
      position: 'relative', transform: `rotate(${tilt}deg)`, flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: 18 * scale, left: '50%',
        transform: 'translateX(-50%)', width: 110 * scale, height: 32 * scale,
        background: '#000', borderRadius: 20 * scale, zIndex: 10,
      }}/>
      <div style={{
        width: '100%', height: '100%', borderRadius: 38 * scale,
        background: '#fff', overflow: 'hidden', position: 'relative',
      }}>
        {children}
      </div>
    </div>
  );
}

function ScanScreen({ scale = 1 }) {
  const s = scale;
  return (
    <div style={{ width: '100%', height: '100%', background: '#0E0A09', position: 'relative', color: '#fff', fontFamily: 'var(--sans)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: `${14*s}px ${28*s}px ${6*s}px`, fontSize: 13*s, fontWeight: 600 }}>
        <span>9:41</span><span style={{ fontSize: 11*s }}>●●●● WiFi</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${20*s}px ${20*s}px ${12*s}px` }}>
        <div style={{ width: 32*s, height: 32*s, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center', fontSize: 16*s }}>×</div>
        <div style={{ fontSize: 13*s, fontWeight: 500, opacity: 0.7 }}>Aponte para o código de barras</div>
        <div style={{ width: 32*s, height: 32*s, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center', fontSize: 14*s }}>⚡</div>
      </div>
      <div style={{
        margin: `${20*s}px ${28*s}px`, height: 320*s, borderRadius: 18*s,
        background: 'linear-gradient(180deg, #2a1f1c 0%, #1a1310 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', width: 90*s, height: 180*s,
          background: 'linear-gradient(180deg, #D4A8A0 0%, #B07A70 100%)',
          borderRadius: `${8*s}px ${8*s}px ${16*s}px ${16*s}px`, opacity: 0.5,
        }}>
          <div style={{ position: 'absolute', top: -10*s, left: '50%', transform: 'translateX(-50%)', width: 30*s, height: 14*s, background: '#3a2a25', borderRadius: 4*s }}/>
          <div style={{ position: 'absolute', bottom: 30*s, left: '50%', transform: 'translateX(-50%)', width: 60*s, height: 30*s, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1*s, padding: `0 ${4*s}px` }}>
            {[3,1,2,1,3,1,2,2,1,3,1,2].map((w, i) => <div key={i} style={{ width: w*s, height: '70%', background: '#000' }}/>)}
          </div>
        </div>
        {[
          { top: 16*s, left: 16*s }, { top: 16*s, right: 16*s },
          { bottom: 16*s, left: 16*s }, { bottom: 16*s, right: 16*s },
        ].map((c, i) => (
          <div key={i} style={{
            position: 'absolute', ...c, width: 28*s, height: 28*s,
            border: `2.5px solid #D4A8A0`,
            ...(i === 0 ? { borderRight: 'none', borderBottom: 'none' } :
              i === 1 ? { borderLeft: 'none', borderBottom: 'none' } :
              i === 2 ? { borderRight: 'none', borderTop: 'none' } :
                        { borderLeft: 'none', borderTop: 'none' }),
          }}/>
        ))}
        <div style={{
          position: 'absolute', left: 24*s, right: 24*s, height: 2*s,
          background: 'linear-gradient(90deg, transparent, #FF6B6B 50%, transparent)',
          boxShadow: `0 0 ${20*s}px #FF6B6B`,
          animation: 'scanLineSweep 2s ease-in-out infinite',
        }}/>
      </div>
      <div style={{ position: 'absolute', bottom: 30*s, left: 0, right: 0, textAlign: 'center', fontSize: 12*s, opacity: 0.5 }}>Escaneando…</div>
      <style>{`@keyframes scanLineSweep { 0%,100%{top:12%} 50%{top:80%} }`}</style>
    </div>
  );
}

function ResultScreen({ scale = 1, status = 'safe', productName, brand, reasons }) {
  const s = scale;
  const config = {
    safe:    { bg: '#E8F0E5', accent: '#3F5840', accentSoft: '#D4E5D2', icon: '✓', label: 'LIBERADO', message: 'Seguro durante a gestação' },
    caution: { bg: '#FFF4E0', accent: '#B8800C', accentSoft: '#FCE8B8', icon: '!', label: 'ATENÇÃO', message: 'Use com cautela' },
    unsafe:  { bg: '#FCE5E5', accent: '#A33A3A', accentSoft: '#F4C8C8', icon: '✕', label: 'EVITAR', message: 'Não recomendado na gestação' },
  }[status];

  return (
    <div style={{ width: '100%', height: '100%', background: '#FAFAF8', color: '#1F1714', fontFamily: 'var(--sans)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: `${14*s}px ${28*s}px ${6*s}px`, fontSize: 13*s, fontWeight: 600 }}>
        <span>9:41</span><span style={{ fontSize: 11*s }}>●●●● WiFi</span>
      </div>
      <div style={{ padding: `${12*s}px ${20*s}px`, display: 'flex', alignItems: 'center', gap: 12*s }}>
        <div style={{ fontSize: 18*s }}>‹</div>
        <div style={{ fontSize: 13*s, fontWeight: 600 }}>Resultado</div>
      </div>
      <div style={{ background: config.bg, margin: `${8*s}px ${20*s}px`, borderRadius: 18*s, padding: `${28*s}px ${20*s}px`, textAlign: 'center' }}>
        <div style={{ width: 72*s, height: 72*s, borderRadius: '50%', background: config.accent, color: '#fff', margin: '0 auto', display: 'grid', placeItems: 'center', fontSize: 38*s, fontWeight: 700, boxShadow: `0 8px 24px ${config.accent}40` }}>{config.icon}</div>
        <div style={{ marginTop: 14*s, fontSize: 11*s, fontWeight: 700, letterSpacing: '0.12em', color: config.accent }}>{config.label}</div>
        <div style={{ marginTop: 6*s, fontSize: 15*s, fontWeight: 600 }}>{config.message}</div>
      </div>
      <div style={{ padding: `${4*s}px ${24*s}px ${8*s}px` }}>
        <div style={{ fontSize: 10*s, opacity: 0.5, fontWeight: 600, letterSpacing: '0.08em' }}>{brand}</div>
        <div style={{ fontSize: 16*s, fontWeight: 700, marginTop: 2*s }}>{productName}</div>
      </div>
      <div style={{ padding: `${4*s}px ${24*s}px`, flex: 1 }}>
        <div style={{ fontSize: 10*s, opacity: 0.5, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 10*s }}>ANÁLISE MÉDICA</div>
        {(reasons || [
          { ok: true, text: 'Não contém retinóides' },
          { ok: true, text: 'Sem ácido salicílico' },
          { ok: true, text: 'Filtros físicos seguros' },
        ]).map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10*s, padding: `${8*s}px 0`, fontSize: 12*s, borderTop: i === 0 ? 'none' : '1px solid #eee' }}>
            <div style={{ width: 16*s, height: 16*s, borderRadius: '50%', background: r.ok ? config.accentSoft : '#fce2e2', color: r.ok ? config.accent : '#A33A3A', display: 'grid', placeItems: 'center', fontSize: 10*s, fontWeight: 700, flexShrink: 0 }}>{r.ok ? '✓' : '✕'}</div>
            <div>{r.text}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: `${10*s}px ${20*s}px ${24*s}px` }}>
        <div style={{ background: '#1F1714', color: '#fff', padding: `${14*s}px`, borderRadius: 14*s, textAlign: 'center', fontSize: 13*s, fontWeight: 600 }}>Escanear próximo produto</div>
      </div>
    </div>
  );
}

// LoadingScreen — entre scan e resultado
function LoadingScreen({ scale = 1 }) {
  const s = scale;
  return (
    <div style={{ width: '100%', height: '100%', background: '#FAFAF8', color: '#1F1714', fontFamily: 'var(--sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20*s }}>
      <div style={{
        width: 60*s, height: 60*s, borderRadius: '50%',
        border: `3px solid #EFE6DF`, borderTopColor: '#B07A70',
        animation: 'spin 0.9s linear infinite',
      }}/>
      <div style={{ fontSize: 14*s, fontWeight: 600 }}>Analisando ingredientes…</div>
      <div style={{ fontSize: 11*s, opacity: 0.5, maxWidth: 200*s, textAlign: 'center' }}>
        Cruzando com protocolo clínico de segurança
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// PhoneVideo — vídeo local com poster (cai pra screenshot enquanto carrega)
function PhoneVideo({ scale = 1 }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => { try { v.play().catch(() => {}); } catch (_) {} };
    tryPlay();
    const t1 = setTimeout(tryPlay, 1000);
    const t2 = setTimeout(tryPlay, 3000);
    const onTouch = () => tryPlay();
    const onScroll = () => tryPlay();
    document.addEventListener('touchstart', onTouch, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      document.removeEventListener('touchstart', onTouch);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <PhoneFrame scale={scale} glow>
      <video
        ref={ref}
        src="assets/app-demo.mp4"
        poster="assets/screen-cerave.png"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        onCanPlay={(e) => { try { e.currentTarget.play(); } catch (_) {} }}
        onLoadedData={(e) => { try { e.currentTarget.play(); } catch (_) {} }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          background: '#000',
        }}
      />
    </PhoneFrame>
  );
}

window.PhoneFrame = PhoneFrame;
window.ScanScreen = ScanScreen;
window.ResultScreen = ResultScreen;
window.LoadingScreen = LoadingScreen;
window.PhoneVideo = PhoneVideo;
