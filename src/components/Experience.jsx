import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-12">
            经历
          </h2>
        </Reveal>

        <div className="border-l border-ink/15 ml-2 md:ml-0 space-y-12 md:space-y-16">
          {experience.map((e, i) => (
            <Reveal
              key={i}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-[170px_1fr] md:gap-10"
            >
              {/* 移动端节点圆点 */}
              <span className="absolute left-0 top-1.5 w-2.5 h-2.5 -ml-[5.5px] rounded-full bg-clay md:hidden" />
              {/* 桌面端时间 */}
              <span className="hidden md:block font-mono text-sm text-ash pt-1">
                {e.period}
              </span>
              <div>
                <div className="md:hidden font-mono text-xs text-ash mb-1">
                  {e.period}
                </div>
                <h3 className="font-display text-xl font-bold">{e.title}</h3>
                <p className="text-clay text-sm mt-1 mb-3">{e.role}</p>
                <ul className="text-ink/80 space-y-1.5 text-[15px]">
                  {e.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-ash">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-ink/55 italic">
                  带走的能力：{e.takeaway}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
