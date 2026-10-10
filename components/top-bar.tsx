import { Menu } from 'lucide-react'
import { REF_URL } from '@/lib/ref'

export function TopBar() {
  return (
    <header className="q7d2-topbar">
      <a className="q7d2-burger" href="#q7d2-menu" aria-label="Открыть меню">
        <Menu size={20} />
      </a>
      <nav className="q7d2-tabs" aria-label="Разделы платформы">
        <a className="q7d2-tab q7d2-tab--on" href={REF_URL}>
          Казино
        </a>
        <a className="q7d2-tab" href={REF_URL}>
          Спорт
        </a>
      </nav>
      <a className="q7d2-logo" href={REF_URL} aria-label="Stake — перейти на сайт">
        Stake
      </a>
      <span className="q7d2-spacer" />
      <a className="q7d2-login" href={REF_URL}>
        Войти
      </a>
      <a className="q7d2-signup" href={REF_URL}>
        Зарегистрироваться
      </a>
    </header>
  )
}
