import { useEffect, useState } from 'react'
import { site } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/80 backdrop-blur-md border-b border-ink/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-bold tracking-tightest text-lg text-ink"
        >
          {site.name}
        </a>

        {/* 桌面导航 */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-ash">
          {site.nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="hover:text-ink transition-colors duration-200"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 移动端汉堡 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换菜单"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* 移动端下拉 */}
      <ul
        className={`md:hidden overflow-hidden bg-bone/95 backdrop-blur-md border-b border-ink/5 transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {site.nav.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-ash hover:text-ink"
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
