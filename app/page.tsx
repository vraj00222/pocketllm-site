export default function Home() {
  return (
    <div className="flex flex-col min-h-screen noise">
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-black focus:rounded-lg focus:text-sm">
        Skip to content
      </a>

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center transition-transform group-hover:scale-110" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M10 2v3" /><path d="M14 2v3" />
              </svg>
            </div>
            <span className="font-display font-semibold text-[15px] text-[var(--text-primary)]">PocketLLM</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-[13px] text-[var(--text-secondary)]">
            <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">How It Works</a>
            <a href="#benchmarks" className="hover:text-[var(--text-primary)] transition-colors">Benchmarks</a>
            <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">Features</a>
            <a href="#platforms" className="hover:text-[var(--text-primary)] transition-colors">Platforms</a>
            <a
              href="https://github.com/vraj00222/pocketllm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 ml-2 px-3.5 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-bright)] hover:bg-[var(--bg-surface)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--accent)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="animate-fade-in-up delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[13px] text-[var(--text-secondary)] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" aria-hidden="true" />
              Open Source &middot; MIT License
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-2 font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.035em] leading-[1.05] text-white" style={{ textWrap: "balance" }}>
              Your AI lives on<br />
              <span className="text-[var(--accent)] glow-text">a USB stick</span>
            </h1>

            <p className="animate-fade-in-up delay-3 mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Plug in. Chat locally. Unplug. Zero footprint.<br className="hidden sm:block" />
              No install. No cloud. No SSD space wasted.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://github.com/vraj00222/pocketllm#quick-start"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_var(--accent-glow)]"
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] text-sm hover:border-[var(--border-bright)] hover:text-[var(--text-primary)] transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Terminal */}
            <div className="animate-fade-in-up delay-5 mt-20 max-w-2xl mx-auto terminal glow-border" role="img" aria-label="Terminal showing PocketLLM launch sequence">
              <div className="terminal-bar" aria-hidden="true">
                <div className="terminal-dot" style={{ background: "var(--red)" }} />
                <div className="terminal-dot" style={{ background: "var(--amber)" }} />
                <div className="terminal-dot" style={{ background: "var(--green)" }} />
                <span className="ml-auto text-[11px] text-[var(--text-muted)] font-mono">~/usb/pocketllm</span>
              </div>
              <div className="terminal-body text-left">
                <p><span className="comment"># plug in your USB, run one command</span></p>
                <p><span className="prompt">$</span> ./launch.sh</p>
                <p className="mt-3 text-[var(--text-muted)]">&nbsp; PocketLLM v0.1.0</p>
                <p className="text-[var(--text-muted)]">&nbsp; OS: Darwin (arm64) &middot; USB: /Volumes/MY_USB</p>
                <p className="mt-3"><span className="success">&#10003;</span> Ollama server &rarr; port&nbsp;11434</p>
                <p><span className="success">&#10003;</span> Web UI &rarr; localhost:8080</p>
                <p><span className="success">&#10003;</span> Model loaded: gemma4:e2b</p>
                <p className="mt-3"><span className="prompt">&gt;&gt;&gt;</span> <span className="text-white">What is quantum computing?</span></p>
                <p className="mt-1">Quantum computing uses qubits that can exist in superposition&hellip;</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Process</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>3 Steps. Zero Installs.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  step: "01",
                  title: "Plug In",
                  desc: "Insert the USB into any Mac or Linux machine. Runtime, models, and chat UI are all on the drive.",
                },
                {
                  step: "02",
                  title: "Launch",
                  desc: "Run ./launch.sh \u2014 Ollama starts, loads your model into RAM, and opens the chat UI.",
                },
                {
                  step: "03",
                  title: "Unplug",
                  desc: "Ctrl+C to stop. Pull the USB. Nothing installed, cached, or saved on the host.",
                },
              ].map((item) => (
                <div key={item.step} className="card p-8 group">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">{item.step}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                  <p className="mt-3 text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Architecture */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="terminal" role="img" aria-label="Architecture: USB drive contents connect to host machine for compute">
                <div className="terminal-bar" aria-hidden="true">
                  <div className="terminal-dot" style={{ background: "var(--red)" }} />
                  <div className="terminal-dot" style={{ background: "var(--amber)" }} />
                  <div className="terminal-dot" style={{ background: "var(--green)" }} />
                  <span className="ml-auto text-[11px] text-[var(--text-muted)] font-mono">architecture</span>
                </div>
                <div className="terminal-body text-[12px] leading-relaxed">
<pre>{`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                 USB DRIVE                    \u2502
\u2502                                              \u2502
\u2502  bin/           models/         context/     \u2502
\u2502  ollama         GGUF weights    history.db   \u2502
\u2502  + GPU libs     (your models)   (encrypted)  \u2502
\u2502                                              \u2502
\u2502  ui/            config/         launch.sh    \u2502
\u2502  web chat       settings        (entry point)\u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                   \u2502 USB 3.x
                   \u25BC
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502           HOST MACHINE (borrowed)            \u2502
\u2502                                              \u2502
\u2502  CPU/GPU runs inference                      \u2502
\u2502  RAM loads model weights via mmap            \u2502
\u2502  Browser opens localhost:8080                \u2502
\u2502                                              \u2502
\u2502  Nothing installed. Nothing saved to disk.   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── Why ── */}
        <section className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Why</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>The Problem with Local LLMs</h2>
              <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto">They eat your disk, chain you to one machine, and leave traces everywhere. PocketLLM fixes all of it.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  ),
                  title: "Truly Private",
                  desc: "No data leaves the machine. No cloud. No API keys. Unplug and every trace vanishes.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  ),
                  title: "Save Your SSD",
                  desc: "5\u201350\u00A0GB of model weights live on the USB. Your laptop\u2019s drive stays clean.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  ),
                  title: "Zero Install",
                  desc: "No Ollama, no brew, no Docker needed. The USB bundles the full runtime and GPU libraries.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                  ),
                  title: "Machine to Machine",
                  desc: "Carry AI between laptop, desktop, and office machine. Same models, same history, one USB.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center shrink-0" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── Benchmarks ── */}
        <section id="benchmarks" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Performance</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>USB&nbsp;=&nbsp;SSD Speed</h2>
              <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto">After the one-time model load, inference is identical. Tested on MacBook&nbsp;Pro&nbsp;M4, 16&nbsp;GB RAM.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Cold start */}
              <div className="card overflow-hidden">
                <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-surface)]">
                  <h3 className="font-display font-semibold text-white text-sm">Cold Start &mdash; Model Load</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">One-time cost on first chat</p>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[var(--text-muted)]">
                        <th className="text-left pb-3 font-medium text-xs uppercase tracking-wider">Model</th>
                        <th className="text-right pb-3 font-medium text-xs uppercase tracking-wider">SSD</th>
                        <th className="text-right pb-3 font-medium text-xs uppercase tracking-wider">USB</th>
                      </tr>
                    </thead>
                    <tbody className="tabular-nums text-[var(--text-secondary)]">
                      <tr className="border-t border-[var(--border)]">
                        <td className="py-3 font-mono text-xs text-white">gemma4:e2b</td>
                        <td className="py-3 text-right font-mono text-xs">7.0s</td>
                        <td className="py-3 text-right font-mono text-xs text-[var(--amber)] font-medium">47.7s</td>
                      </tr>
                      <tr className="border-t border-[var(--border)]">
                        <td className="py-3 font-mono text-xs text-white">llama3.1:8b</td>
                        <td className="py-3 text-right font-mono text-xs">11.0s</td>
                        <td className="py-3 text-right font-mono text-xs text-[var(--amber)] font-medium">29.8s</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-4 text-[11px] text-[var(--text-muted)]">Slower on USB \u2014 but only happens once. Model stays in RAM after.</p>
                </div>
              </div>

              {/* Inference */}
              <div className="card overflow-hidden animate-pulse-glow">
                <div className="px-6 py-4 border-b border-[rgba(88,166,255,0.2)] bg-[rgba(88,166,255,0.05)]">
                  <h3 className="font-display font-semibold text-[var(--accent-bright)] text-sm">Inference &mdash; After Load</h3>
                  <p className="text-xs text-[var(--accent)] mt-1">Where it matters</p>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[var(--text-muted)]">
                        <th className="text-left pb-3 font-medium text-xs uppercase tracking-wider">Model</th>
                        <th className="text-right pb-3 font-medium text-xs uppercase tracking-wider">SSD</th>
                        <th className="text-right pb-3 font-medium text-xs uppercase tracking-wider">USB</th>
                      </tr>
                    </thead>
                    <tbody className="tabular-nums text-[var(--text-secondary)]">
                      <tr className="border-t border-[var(--border)]">
                        <td className="py-3 font-mono text-xs text-white">gemma4:e2b</td>
                        <td className="py-3 text-right font-mono text-xs">53.9&nbsp;tok/s</td>
                        <td className="py-3 text-right font-mono text-xs text-[var(--accent)] font-bold">54.0&nbsp;tok/s</td>
                      </tr>
                      <tr className="border-t border-[var(--border)]">
                        <td className="py-3 font-mono text-xs text-white">llama3.1:8b</td>
                        <td className="py-3 text-right font-mono text-xs">21.2&nbsp;tok/s</td>
                        <td className="py-3 text-right font-mono text-xs text-[var(--accent)] font-bold">21.4&nbsp;tok/s</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-4 text-[11px] text-[var(--accent)] font-semibold font-mono uppercase tracking-wider">Identical. Zero difference.</p>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-xs text-[var(--text-muted)] max-w-md mx-auto">
              The only bottleneck is initial model load. With a USB&nbsp;3.2 SSD enclosure, even that gap shrinks. After loading, the real limit is your machine&rsquo;s RAM.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ── Features ── */}
        <section id="features" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Features</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>Everything on the Drive</h2>
              <p className="mt-4 text-[var(--text-secondary)]">1 USB. Full AI workspace.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Any Ollama Model",
                  desc: "Gemma, Llama, Mistral, Phi \u2014 if Ollama runs it, PocketLLM runs it.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                },
                {
                  title: "Web Chat UI",
                  desc: "Markdown, code blocks, streaming, history. All in-browser.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                },
                {
                  title: "Terminal Chat",
                  desc: "Interactive CLI chat on launch. Like your own Claude Code.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
                },
                {
                  title: "Chat History",
                  desc: "Conversations saved to USB. Carry history between machines.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
                },
                {
                  title: "Skills System",
                  desc: "Extend UI with drop-in JavaScript plugins.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
                },
                {
                  title: "1-Command Launch",
                  desc: "./launch.sh \u2014 auto-detects OS, models, starts server, opens browser.",
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                },
              ].map((f) => (
                <div key={f.title} className="card p-6 group">
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mb-4 group-hover:border-[var(--accent)] transition-colors" aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-[15px] group-hover:text-[var(--accent)] transition-colors">{f.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── Models ── */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Models</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>Pick Your Model</h2>
              <p className="mt-4 text-[var(--text-secondary)]">Any Ollama-compatible model works.</p>
            </div>
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--bg-surface)] text-[var(--text-muted)] text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 text-left font-medium">Model</th>
                    <th className="px-6 py-4 text-right font-medium">Disk</th>
                    <th className="px-6 py-4 text-right font-medium">RAM</th>
                    <th className="px-6 py-4 text-right font-medium hidden sm:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  {[
                    { name: "Phi-3 mini (3.8B)", disk: "~2.3\u00A0GB", ram: "~3\u00A0GB", best: "Low-RAM machines" },
                    { name: "Mistral 7B", disk: "~4.1\u00A0GB", ram: "~5\u00A0GB", best: "General purpose" },
                    { name: "Llama 3.1 8B", disk: "~4.7\u00A0GB", ram: "~6\u00A0GB", best: "Balanced quality" },
                    { name: "Gemma 4 e2b", disk: "~7.2\u00A0GB", ram: "~9\u00A0GB", best: "Best quality", recommended: true },
                  ].map((m, i) => (
                    <tr key={m.name} className={`${i > 0 ? "border-t border-[var(--border)]" : ""} ${m.recommended ? "bg-[rgba(88,166,255,0.04)]" : ""}`}>
                      <td className="px-6 py-4 font-mono text-xs text-white">
                        {m.name}
                        {m.recommended && <span className="ml-2 text-[10px] text-[var(--accent)] font-sans uppercase tracking-wider">recommended</span>}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-xs text-[var(--text-secondary)]">{m.disk}</td>
                      <td className="px-6 py-4 text-right font-mono text-xs text-[var(--text-secondary)]">{m.ram}</td>
                      <td className="px-6 py-4 text-right text-xs text-[var(--text-muted)] hidden sm:table-cell">{m.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── Platforms ── */}
        <section id="platforms" className="py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Compatibility</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>Platform Support</h2>
            <p className="mt-4 text-[var(--text-secondary)] mb-12">1 USB drive, multiple machines.</p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="card p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                </div>
                <h3 className="font-display font-semibold text-white">macOS</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">Intel&nbsp;+&nbsp;Apple&nbsp;Silicon</p>
                <span className="inline-block mt-3 px-2.5 py-1 rounded-md bg-[rgba(63,185,80,0.1)] border border-[rgba(63,185,80,0.2)] text-[var(--green)] text-[11px] font-mono uppercase tracking-wider">Supported</span>
              </div>
              <div className="card p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01"/><path d="M16 12h.01"/><path d="M9 17c1 1 2.5 1 3 1s2-0 3-1"/></svg>
                </div>
                <h3 className="font-display font-semibold text-white">Linux</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">Ubuntu&nbsp;20+, x86_64</p>
                <span className="inline-block mt-3 px-2.5 py-1 rounded-md bg-[rgba(63,185,80,0.1)] border border-[rgba(63,185,80,0.2)] text-[var(--green)] text-[11px] font-mono uppercase tracking-wider">Supported</span>
              </div>
              <div className="card p-8 text-center opacity-50">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>
                </div>
                <h3 className="font-display font-semibold text-[var(--text-secondary)]">Windows</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">x86_64</p>
                <span className="inline-block mt-3 px-2.5 py-1 rounded-md bg-[rgba(210,153,34,0.1)] border border-[rgba(210,153,34,0.2)] text-[var(--amber)] text-[11px] font-mono uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── Requirements ── */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-[13px] text-[var(--accent)] uppercase tracking-widest mb-3">Requirements</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>What You Need</h2>
              <p className="mt-4 text-[var(--text-secondary)]">PocketLLM brings the software. Your machine brings the compute.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-8">
                <h3 className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Minimum</h3>
                <ul className="mt-5 space-y-4 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />USB&nbsp;3.0 drive, 64&nbsp;GB</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />8&nbsp;GB RAM (small models)</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />macOS&nbsp;12+ or Ubuntu&nbsp;20+</li>
                </ul>
              </div>
              <div className="card p-8 border-[rgba(88,166,255,0.2)]! relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1.5 bg-[var(--accent)] text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded-bl-lg">Recommended</div>
                <h3 className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-wider">Recommended</h3>
                <ul className="mt-5 space-y-4 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />USB&nbsp;3.2 Gen&nbsp;2, 128&nbsp;GB+</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />16&nbsp;GB+ RAM (7B+ models)</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />macOS with Apple Silicon</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── CTA ── */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent)] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: "balance" }}>
              Ready to carry your AI in your pocket?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Open source. Free forever. 5 minutes to set up.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://github.com/vraj00222/pocketllm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_var(--accent-glow)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <a
                href="https://github.com/vraj00222/pocketllm#quick-start"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] text-sm hover:border-[var(--border-bright)] hover:text-[var(--text-primary)] transition-colors"
              >
                Quick Start Guide
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[var(--accent)] flex items-center justify-center" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/></svg>
            </div>
            <span className="font-display text-[var(--text-secondary)]">PocketLLM</span>
          </div>
          <p>Built by <a href="https://github.com/vraj00222" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Vraj Patel</a> &middot; MIT License</p>
          <a href="https://github.com/vraj00222/pocketllm" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-secondary)] transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
