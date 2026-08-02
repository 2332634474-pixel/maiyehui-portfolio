import { contact } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-bone/50 uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tightest mb-6">
            一起做点东西
          </h2>
          <p className="text-bone/70 max-w-prose text-lg mb-10">{contact.note}</p>
        </Reveal>

        <Reveal className="flex flex-col sm:flex-row sm:items-center gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 bg-clay text-bone px-6 py-3 text-sm tracking-wide hover:bg-clay/90 transition-colors"
          >
            发邮件 · {contact.email}
          </a>
          <a
            href={`mailto:${contact.emailAlt}`}
            className="text-sm text-bone/70 hover:text-bone transition-colors"
          >
            备用邮箱：{contact.emailAlt}
          </a>
        </Reveal>

        {contact.resumeUrl !== '#' && (
          <Reveal className="mt-8">
            <a
              href={contact.resumeUrl}
              className="inline-flex items-center gap-2 text-sm text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
            >
              下载简历 PDF ↓
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
