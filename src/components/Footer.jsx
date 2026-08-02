import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/50 py-10 border-t border-bone/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="font-mono text-xs tracking-widest">{site.nameEn}</span>
      </div>
    </footer>
  )
}
