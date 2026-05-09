// App principal — Mommy Scanner Landing

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ctaText": "Quero meu acesso agora",
  "checkoutUrl": "https://pay.kiwify.com.br/XCf1if9",
  "showThoughts": true,
  "showComparison": true,
  "showWhatYouScan": true,
  "showAuthority": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <div>
      <TopBar />
      <Hero checkoutUrl={t.checkoutUrl} ctaText={t.ctaText} />
      <TrustBar />
      {t.showThoughts && <ThoughtBubbles />}
      <HowItWorks />
      <DemoCards />
      {t.showAuthority && <Authority />}
      <WhyTrust />
      <ForWho />
      <PriceAnchor checkoutUrl={t.checkoutUrl} ctaText={t.ctaText} />
      {t.showComparison && <Comparison />}
      <Offer checkoutUrl={t.checkoutUrl} ctaText={t.ctaText} />
      <Guarantee checkoutUrl={t.checkoutUrl} />
      <FAQ />
      <Footer />
      <StickyCTA checkoutUrl={t.checkoutUrl} ctaText={t.ctaText} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Copy & Link" />
        <TweakText
          label="Texto do CTA"
          value={t.ctaText}
          onChange={v => setTweak('ctaText', v)}
        />
        <TweakText
          label="URL do checkout"
          value={t.checkoutUrl}
          onChange={v => setTweak('checkoutUrl', v)}
        />
        <TweakSection label="Seções" />
        <TweakToggle
          label="Pensamentos da gestante"
          value={t.showThoughts}
          onChange={v => setTweak('showThoughts', v)}
        />
        <TweakToggle
          label="Autoridade Dra. Vanessa"
          value={t.showAuthority}
          onChange={v => setTweak('showAuthority', v)}
        />
        <TweakToggle
          label="Comparação Opção 1 vs 2"
          value={t.showComparison}
          onChange={v => setTweak('showComparison', v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('ms-app'));
root.render(<App />);
// remove flex centering for landing
document.getElementById('ms-app').style.cssText = 'min-height: auto; display: block;';
