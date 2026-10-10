import { REF_URL } from '@/lib/ref'

const FOOT_NAV = ['Казино', 'Спорт', 'Акции', 'ВИП-клуб', 'Блог', 'Форум', 'Поддержка']

const TAGS = [
  { tag: '#stakecasino', href: '#obzor' },
  { tag: '#stakeзеркало', href: '#zerkalo' },
  { tag: '#stakecasinoзеркало', href: '#zerkalo-alt' },
  { tag: '#stakecasinoофициальныйсайт', href: '#oficialnyj-sajt' },
  { tag: '#стейкзеркало', href: '#zerkalo' },
  { tag: '#стейкказинозеркало', href: '#zerkalo-alt' },
  { tag: '#стейкказиноиграть', href: '#igrat' },
  { tag: '#стейкказиноонлайн', href: '#sport' },
  { tag: '#стейкказиноофициальный', href: '#oficialnyj-sajt' },
  { tag: '#стейкказинорегистрация', href: '#registraciya' },
  { tag: '#стейкказиносайт', href: '#mobilnaya' },
  { tag: '#stakecasinoрегистрация', href: '#registraciya' },
  { tag: '#stakeказино', href: '#obzor' },
  { tag: '#stakekazinoзеркало', href: '#zerkalo-alt' },
  { tag: '#стейкказино', href: '#itog' },
]

export function SiteFooter() {
  return (
    <footer className="q7d2-footer">
      <nav className="q7d2-foot-nav" aria-label="Меню в подвале">
        {FOOT_NAV.map((label) => (
          <a key={label} href={REF_URL}>
            {label}
          </a>
        ))}
      </nav>
      <nav className="q7d2-tags" aria-label="Теги по ключевым фразам">
        {TAGS.map((item) => (
          <a key={item.tag} href={item.href}>
            {item.tag}
          </a>
        ))}
      </nav>
      <p className="q7d2-note">
        18+ Азартные игры могут вызывать зависимость. Играйте ответственно: устанавливайте лимиты депозитов и никогда не
        ставьте больше, чем готовы потерять. Материал носит информационный характер и не является офертой.
      </p>
      <p className="q7d2-copy">© 2026 Stake casino обзор. Все права на торговые марки принадлежат их владельцам.</p>
    </footer>
  )
}
