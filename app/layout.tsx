import '@fontsource-variable/inter'
import '@fontsource/pacifico'
import './globals.css'
import './landing.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="q7d2-root">
      <head>
        <title>Stake casino зеркало — стейк казино официальный сайт: вход и регистрация</title>
        <meta
          name="description"
          content="Stake casino официальный сайт и рабочее stake зеркало на сегодня: стейк казино онлайн, регистрация в один клик, бонусы, слоты и ставки на спорт. Вход на стейк казино сайт через актуальное стейк зеркало."
        />
        <meta
          name="keywords"
          content="stake casino, stake зеркало, stake casino зеркало, stake casino официальный сайт, стейк зеркало, стейк казино зеркало, стейк казино играть, стейк казино онлайн, стейк казино официальный, стейк казино официальный сайт, стейк казино регистрация, стейк казино сайт, stake casino регистрация, stake казино, stake kazino зеркало, стейк казино"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://stake5casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stake5casino.vercel.app/" />
        <meta property="og:title" content="Stake casino зеркало — стейк казино официальный сайт: вход и регистрация" />
        <meta
          property="og:description"
          content="Stake casino официальный сайт и рабочее stake зеркало на сегодня: стейк казино онлайн, регистрация в один клик, бонусы, слоты и ставки на спорт. Вход на стейк казино сайт через актуальное стейк зеркало."
        />
        <meta property="og:image" content="https://stake5casino.vercel.app/images/hero-banner.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stake casino зеркало — стейк казино официальный сайт: вход и регистрация" />
        <meta
          name="twitter:description"
          content="Stake casino официальный сайт и рабочее stake зеркало на сегодня: стейк казино онлайн, регистрация в один клик, бонусы, слоты и ставки на спорт. Вход на стейк казино сайт через актуальное стейк зеркало."
        />
        <meta name="theme-color" content="#0f212e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
