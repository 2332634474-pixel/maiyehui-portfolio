import { about } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-12">
            关于我
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <img
              src={about.photo}
              alt="麦业辉"
              className="w-full max-w-[240px] rounded-sm grayscale-[0.12] contrast-105 object-cover"
            />
            <dl className="mt-6 space-y-3 text-sm">
              {about.facts.map((f) => (
                <div key={f.label} className="border-t border-ink/10 pt-3">
                  <dt className="text-ash text-xs font-mono tracking-wide">
                    {f.label}
                  </dt>
                  <dd className="text-ink mt-1">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed text-ink/90 max-w-prose">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
