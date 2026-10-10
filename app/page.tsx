import { HeroFirstScreen } from '@/components/hero-first-screen'
import { SeoArticle } from '@/components/seo-article'
import { SideRail } from '@/components/side-rail'
import { SiteFooter } from '@/components/site-footer'
import { TopBar } from '@/components/top-bar'

export default function Page() {
  return (
    <>
      <TopBar />
      <div className="q7d2-shell">
        <SideRail />
        <main className="q7d2-main">
          <HeroFirstScreen />
          <SeoArticle />
        </main>
      </div>
      <SiteFooter />
    </>
  )
}
