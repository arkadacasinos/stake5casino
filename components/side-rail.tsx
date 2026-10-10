import {
  Award,
  ChevronDown,
  Crown,
  Gift,
  Globe,
  Handshake,
  Headphones,
  Megaphone,
  MessageSquare,
  Newspaper,
  Shield,
  X,
  type LucideIcon,
} from 'lucide-react'
import { REF_URL } from '@/lib/ref'

function RailItem({ icon: Icon, label, chevron }: { icon: LucideIcon; label: string; chevron?: boolean }) {
  return (
    <a className="q7d2-rail-item" href={REF_URL}>
      <Icon size={18} />
      <span>{label}</span>
      {chevron ? <ChevronDown size={16} className="q7d2-chev" /> : null}
    </a>
  )
}

export function SideRail() {
  return (
    <>
      <nav id="q7d2-menu" className="q7d2-rail" aria-label="Основное меню">
        <a className="q7d2-rail-x" href="#!" aria-label="Закрыть меню">
          <X size={18} />
        </a>
        <RailItem icon={Gift} label="Акции" chevron />
        <RailItem icon={Award} label="Конкурсы" />
        <RailItem icon={Megaphone} label="Партнерам" />
        <RailItem icon={Crown} label="ВИП-клуб" />
        <RailItem icon={Newspaper} label="Блог" />
        <RailItem icon={MessageSquare} label="Форум" />
        <hr className="q7d2-rail-sep" />
        <RailItem icon={Handshake} label="Спонсорство" chevron />
        <RailItem icon={Shield} label="Ответственная игра" />
        <RailItem icon={Headphones} label="Поддержка" />
        <hr className="q7d2-rail-sep" />
        <RailItem icon={Globe} label="Язык: Русский" chevron />
      </nav>
      <a className="q7d2-scrim" href="#!" aria-hidden="true" tabIndex={-1} />
    </>
  )
}
