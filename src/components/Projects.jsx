import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {projects.map((p) => (
          <div key={p.id}>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase mb-3">
                Featured Project
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-6">
                {p.name}
              </h2>
              <p className="text-lg text-ink/85 max-w-prose mb-12">{p.summary}</p>
            </Reveal>

            {/* 数据卡 */}
            <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink/10 mb-16">
              {p.metrics.map((m, i) => (
                <div key={i} className="bg-bone p-6 md:p-8">
                  <div className="font-display text-3xl md:text-4xl font-bold text-ink">
                    {m.value}
                  </div>
                  <div className="text-sm text-ash mt-2">{m.label}</div>
                </div>
              ))}
            </Reveal>

            {/* 方法步骤 */}
            <Reveal>
              <h3 className="font-display text-xl font-bold mb-6">方法</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                {p.method.map((m, i) => (
                  <div key={i} className="border-t-2 border-clay pt-4">
                    <div className="font-mono text-xs text-ash mb-2">
                      0{i + 1}
                    </div>
                    <div className="font-bold text-ink mb-1">{m.step}</div>
                    <p className="text-sm text-ink/75 leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* 项目截图画廊 */}
            <Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {p.images.map((img, i) => (
                  <figure key={i} className="space-y-2">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full rounded-sm object-cover border border-ink/5"
                      loading="lazy"
                    />
                    <figcaption className="text-xs text-ash">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            {/* 复盘 */}
            <Reveal>
              <blockquote className="border-l-2 border-clay pl-6 text-lg md:text-xl text-ink/90 font-serif leading-relaxed max-w-prose">
                {p.reflection}
              </blockquote>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
