const themes = [
  {
    name: 'Minimal Clean',
    description: 'Design épuré et lisible, parfait pour une présence pro et efficace.',
    cta: 'Voir la démo Minimal',
    secondaryCta: 'Choisir ce thème',
  },
  {
    name: 'Premium',
    description: 'Expérience haut de gamme avec sections riches et mise en avant forte.',
    cta: 'Voir la démo Premium',
    secondaryCta: 'Choisir ce thème',
  },
  {
    name: 'Gallery Focus',
    description: 'Approche visuelle centrée sur les photos et les réalisations.',
    cta: 'Voir la démo Gallery',
    secondaryCta: 'Choisir ce thème',
  },
]

export default function PortfolioPreview() {
  return (
    <section id="themes" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-brand)] sm:text-3xl lg:text-4xl">
            Explorez des rendus conçus pour valoriser votre marque
          </p>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Chaque aperçu vous permet d’évaluer la qualité de présentation, la lisibilité du contenu et l’impact global
            de votre futur site.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {themes.map((theme) => (
            <article key={theme.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{theme.name}</h3>
              <p className="mt-3 text-sm/6 text-gray-600">{theme.description}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="col-span-2 h-28 rounded-lg border border-gray-200 bg-gray-50" />
                <div className="h-28 rounded-lg border border-gray-200 bg-gray-50" />
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="block rounded-md bg-[var(--color-brand)] px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90"
                >
                  {theme.cta}
                </a>
                <a
                  href="#"
                  className="block rounded-md border border-[var(--color-brand)] px-4 py-2 text-center text-sm font-semibold text-[var(--color-brand)] hover:bg-gray-100"
                >
                  {theme.secondaryCta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
