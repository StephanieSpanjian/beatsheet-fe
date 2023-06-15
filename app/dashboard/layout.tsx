'use client'
import SpotterLaLogo from '../spotter.la-logo'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-stone-900/10 border-stone-50/[0.06] bg-stone supports-backdrop-blur:bg-stone/95 bg-stone-900/75">
        <SpotterLaLogo />
        {/* Dashboard navs... would go here... */}
      </nav>

      <main className="container mx-auto w-full border-red-500 border-6">
        <section className="flex flex-col">{children}</section>
      </main>
    </section>
  )
}
