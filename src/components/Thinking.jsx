import { thinking } from '../data/content'
import Reveal from './Reveal'

export default function Thinking() {
  return (
    <section id="thinking" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase mb-3">
            Thinking
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-8">
            思考
          </h2>
        </Reveal>

        {thinking.posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-px bg-ink/10">
            {thinking.posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="bg-bone p-8 hover:bg-bone/70 transition-colors group border border-ink/5"
              >
                <div className="font-mono text-xs text-clay mb-3">{post.date}</div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-clay transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{post.excerpt}</p>
              </a>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="text-ink/55 max-w-prose text-lg font-serif">
              {thinking.placeholder}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
