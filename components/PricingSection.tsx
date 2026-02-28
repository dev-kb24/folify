import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Minimal Clean',
    id: 'tier-minimal-clean',
    href: '#',
    priceMonthly: '49,99',
    description: 'Une base élégante et structurée pour présenter votre activité avec clarté, sans complexité inutile.',
    features: [
      'Architecture claire des sections essentielles',
      'Design responsive mobile / desktop',
      'Formulaire de contact optimisé',
      'SEO on-page de base prêt à l’emploi',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '79.99',
    description: 'Une expérience plus avancée pour valoriser votre image de marque et renforcer votre crédibilité commerciale.',
    features: [
      'Composants visuels premium et hiérarchie soignée',
      'Personnalisation avancée (mise en page, blocs, contenus)',
      'Sections de preuve sociale (avis, réalisations, arguments)',
      'Accompagnement prioritaire pour les ajustements',
    ],
    featured: true,
  },
  {
    name: 'Gallery Focus',
    id: 'tier-gallery-focus',
    href: '#',
    priceMonthly: '49.99',
    description: 'Un format centré sur le visuel pour mettre en avant vos réalisations et créer un fort impact dès la première visite.',
    features: [
      'Grilles galerie haute visibilité',
      'Parcours orienté portfolio / cas clients',
      'Blocs narratifs image + texte',
      'Optimisation des médias pour chargement rapide',
    ],
    featured: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSectionComponent() {
  return (
    <section id="pricing" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-brand)] sm:text-3xl lg:text-4xl">
          Choisissez la formule la plus adaptée à votre projet
        </p>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
        Que vous recherchiez une base épurée ou une expérience plus premium, chaque offre est pensée pour vous offrir
        un cadre simple, performant et évolutif.
      </p>
      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-16 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-white'
                : 'border-gray-200 bg-white text-gray-900',
              tier.featured ? 'p-6 sm:p-8 lg:scale-[1.04] lg:p-10 shadow-md' : 'p-6 sm:p-8 shadow-sm',
              'rounded-2xl border transition hover:shadow-md',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-gray-200' : 'text-gray-700', 'text-sm font-semibold uppercase tracking-wide')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-3xl font-semibold tracking-tight sm:text-4xl',
                )}
              >
                €
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-white' : 'text-gray-500', 'text-sm')}>/thème</span>
            </p>
            <p className={classNames(tier.featured ? 'text-white' : 'text-gray-600', 'mt-4 text-sm/6')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-white' : 'text-gray-600',
                'mt-6 space-y-3 text-sm/6',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-white' : 'text-gray-700', 'h-5 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-white text-[var(--color-brand)] hover:bg-gray-100'
                  : 'border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-gray-100',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold',
              )}
            >
              Choisir ce thème
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
