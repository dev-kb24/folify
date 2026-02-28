'use client'

import FolifyLogo from '@/components/FolifyLogo'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center">
              <FolifyLogo />
            </div>
            <div className="mt-1 text-sm text-gray-500">Design minimal & performant</div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Mentions légales</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Politique de confidentialité</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">© {new Date().getFullYear()} Folify — Tous droits réservés</div>
      </div>
    </footer>
  )
}
