import { site } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 克制的几何标记：圆 + 方 + 连线，呼应「交点」概念 */}
      <svg
        className="absolute right-[-4%] top-[12%] w-[42vw] max-w-md opacity-30 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="40" stroke="#232321" strokeWidth="2.5" />
        <rect x="120" y="120" width="62" height="62" stroke="#C26B4A" strokeWidth="2.5" />
        <line x1="60" y1="60" x2="151" y2="151" stroke="#6E8CA0" strokeWidth="2" />
        <circle cx="151" cy="151" r="4" fill="#6E8CA0" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 w-full pt-24 pb-16">
        <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase mb-8">
          Portfolio — 2026
        </p>

        <h1 className="font-display font-bold tracking-tightest leading-[0.92] text-ink text-[clamp(3.5rem,16vw,11rem)]">
          {site.name}
        </h1>

        <p className="mt-10 text-xl md:text-3xl text-ink/90 max-w-prose font-serif leading-snug">
          {site.tagline}
        </p>

        <p className="mt-5 text-sm md:text-base text-ash font-mono tracking-wide">
          {site.subtitle}
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-sm tracking-wide hover:bg-ink/85 transition-colors"
          >
            看项目
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-ink border-b border-ink/30 pb-1 hover:border-ink transition-colors"
          >
            联系我
          </a>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-ash animate-pulse">
        SCROLL
      </div>
    </section>
  )
}
