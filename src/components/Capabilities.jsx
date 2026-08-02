import { capabilities } from '../data/content'
import Reveal from './Reveal'

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-bone/50 uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-4">
            能力地图
          </h2>
          <p className="text-bone/70 max-w-prose mb-14">
            不是四段经历，而是四簇互相连接的能力。
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {capabilities.map((c, i) => (
            <Reveal key={c.id} delay={i * 80} className="bg-ink p-8">
              <span className="font-mono text-clay text-sm">{c.index}</span>
              <h3 className="font-display text-xl font-bold mt-4 mb-3">
                {c.title}
              </h3>
              <p className="text-bone/70 text-sm leading-relaxed mb-6">{c.desc}</p>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="text-sm text-bone/90 flex items-start gap-2">
                    <span className="text-clay mt-1">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
