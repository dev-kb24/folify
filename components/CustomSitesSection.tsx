import { StarIcon } from '@heroicons/react/24/solid'

type SiteType = {
  title: string
  description: string
  category: 'Business' | 'E-commerce' | 'Contenu'
  featured?: boolean
}

const siteTypes: SiteType[] = [
  {
    title: 'Portfolio Pro',
    description: 'Site pour freelances et agences : pages Projets, À propos, contact rapide et formulaire de leads. Optimisé SEO et responsive pour mettre en valeur ton travail.',
    category: 'Business',
  },
  {
    title: 'Site Vitrine Business',
    description: 'Site entreprise clair et professionnel : services, témoignages, tarifs et formulaire de contact. Conçu pour rassurer les clients et générer des demandes qualifiées.',
    category: 'Business',
    featured: true,
  },
  {
    title: 'Landing Page Conversion',
    description: 'Page one‑page focalisée sur une offre : accroche, bénéfices, preuves sociales et CTA clair pour maximiser la conversion (inscription, vente ou prise de contact).',
    category: 'Business',
  },
  {
    title: 'Blog / Média de contenu',
    description: 'Plateforme de contenu structurée pour articles SEO : catégories, recherche, pagination et partage social. Idéal pour construire une audience et améliorer le référencement.',
    category: 'Contenu',
  },
  {
    title: 'Site de réservation',
    description: 'Système de réservation en ligne avec calendrier, choix de créneaux, confirmation par email et gestion des rendez‑vous. Option d’intégration au paiement si besoin.',
    category: 'Business',
  },
  {
    title: 'E-commerce Essentiel',
    description: 'Boutique simple pour vendre : catalogue, fiches produit, panier et paiement sécurisé. Gestion des commandes et emails automatiques inclus.',
    category: 'E-commerce',
    featured: true,
  },
  {
    title: 'E-commerce Avancé',
    description: 'Solution e‑commerce complète : variantes, filtres, recherche, promotions, gestion avancée du stock et intégrations marketing/analytics.',
    category: 'E-commerce',
  },
  {
    title: 'Espace Membre / Formation',
    description: 'Portail membre pour contenus privés ou formations : inscription, gestion des accès, suivi de progression et paiements récurrents pour les contenus payants.',
    category: 'Contenu',
  },
]

export default function CustomSitesSection() {
  const featuredSites = siteTypes.filter((site) => site.featured)
  const regularSites = siteTypes.filter((site) => !site.featured)

  return (
    <section id="custom-sites" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-brand)] sm:text-3xl lg:text-4xl">
           Une solution web sur mesure, alignée à vos objectifs
          </p>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
           Chaque type de site est structuré pour valoriser votre image, fluidifier le parcours utilisateur et soutenir vos priorités commerciales.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredSites.map((site) => (
            <article
              key={site.title}
              className="rounded-2xl border border-[var(--color-brand)] bg-[var(--color-brand)] p-6 text-white shadow-lg transition hover:opacity-90 sm:p-8"
            >
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{site.title}</h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  <StarIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Le plus demandé
                </span>
              </div>
              <p className="mt-4 text-base/7 text-white">{site.description}</p>

              <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-white">{site.category}</span>
                <a href="#" className="text-sm font-semibold text-white">
                  Discuter du projet →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {regularSites.map((site) => (
            <article
              key={site.title}
              className="min-w-[85%] snap-start rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:min-w-[70%] sm:p-6 lg:min-w-0"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{site.title}</h3>
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">{site.description}</p>

              <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-gray-500">{site.category}</span>
                <a href="#" className="text-sm font-semibold text-gray-900">
                  Discuter du projet →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
