import { Dice5, Search, Volleyball } from 'lucide-react'
import { REF_URL } from '@/lib/ref'

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 320 512" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.61H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  )
}

export function HeroFirstScreen() {
  return (
    <>
      <section className="q7d2-hero" aria-label="Stake — крупнейшее онлайн-казино">
        <h1 className="q7d2-h1">
          Крупнейшее в мире онлайн-казино и букмекерская контора
          <span className="q7d2-sr"> — stake casino официальный сайт и стейк казино зеркало</span>
        </h1>
        <a className="q7d2-hero-cta" href={REF_URL}>
          Зарегистрироваться
        </a>
        <p className="q7d2-socials-label">Или продолжить с</p>
        <div className="q7d2-socials">
          <a className="q7d2-social" href={REF_URL} aria-label="Продолжить с Google">
            <GoogleMark />
          </a>
          <a className="q7d2-social" href={REF_URL} aria-label="Продолжить с Facebook">
            <FacebookMark />
          </a>
          <a className="q7d2-social" href={REF_URL} aria-label="Продолжить с Kick">
            <span className="q7d2-kick" aria-hidden="true">
              K
            </span>
          </a>
        </div>
      </section>

      <div className="q7d2-stats">
        <a className="q7d2-stat" href={REF_URL}>
          <Dice5 size={20} className="q7d2-stat-ic" />
          <span className="q7d2-stat-name">Казино</span>
          <span className="q7d2-stat-side">
            <span className="q7d2-dot" aria-hidden="true" />
            <span className="q7d2-stat-num">34 231</span>
            <span>в игре</span>
          </span>
        </a>
        <a className="q7d2-stat" href={REF_URL}>
          <Volleyball size={20} className="q7d2-stat-ic" />
          <span className="q7d2-stat-name">Спорт</span>
          <span className="q7d2-stat-side">
            <span className="q7d2-dot" aria-hidden="true" />
            <span className="q7d2-stat-num">36 786</span>
            <span>в ставках</span>
          </span>
        </a>
      </div>

      <a className="q7d2-search" href={REF_URL}>
        <Search size={18} />
        <span>Искать Stake.com</span>
        <span className="q7d2-kbd">Ctrl + K</span>
      </a>
    </>
  )
}
