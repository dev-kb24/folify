'use client'

export default function HeroComponent() {
  return (
    <div className="bg-white">
      <div id="hero" className="px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-brand)] text-pretty sm:text-4xl lg:text-5xl">
              Un site professionnel, clair et performant pour développer votre activité
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm text-gray-600 sm:mt-6 sm:text-base lg:text-lg">
              Folify vous propose des thèmes élégants et des sites sur mesure conçus pour valoriser votre image,
              rassurer vos clients et générer des demandes qualifiées.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-x-4">
              <a
                href="#themes"
                className="rounded-md bg-[var(--color-brand)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
              >
                Voir les thèmes
              </a>
              <a href="#contact" className="text-sm font-semibold text-[var(--color-brand)]">
                Prendre un rendez-vous <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
