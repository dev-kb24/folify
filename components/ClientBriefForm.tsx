'use client'

import { useState } from 'react'

export default function ClientBriefForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    objective: '',
    theme: '',
    multilingual: 'no',
    features: '',
    budget: '',
    deadline: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target as HTMLInputElement
    if (type === 'checkbox') return
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Client brief submitted', form)
    alert('Merci — ton brief a été enregistré. Nous te contacterons bientôt.')
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      sector: '',
      objective: '',
      theme: '',
      multilingual: 'no',
      features: '',
      budget: '',
      deadline: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mt-2 text-xl font-semibold text-[var(--color-brand)] sm:text-2xl">Complétez votre demande de projet</p>
          <p className="mt-2 text-sm text-gray-600">Complétez ce court formulaire pour décrire votre projet. Nous revenons rapidement avec une proposition et une estimation.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-3 sm:gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nom / Prénom"
            className="col-span-2 w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Téléphone (optionnel)"
            className="w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
          />

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Entreprise / Marque"
            className="col-span-2 w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
          />

          <input
            name="sector"
            value={form.sector}
            onChange={handleChange}
            placeholder="Secteur d'activité"
            className="w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
          />

          <select
            name="objective"
            value={form.objective}
            onChange={handleChange}
            className={`w-full min-w-0 rounded-md border border-gray-200 px-3 py-2 ${form.objective ? 'text-gray-900' : 'text-gray-400'}`}
          >
            <option value="" >Objectif principal</option>
            <option value="presenter">Présenter</option>
            <option value="vendre">Vendre</option>
            <option value="reserver">Réserver / prendre RDV</option>
            <option value="newsletter">Collecter des leads</option>
          </select>

          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className={`col-span-2 w-full min-w-0 rounded-md border border-gray-200 px-3 py-2 ${form.theme ? 'text-gray-900' : 'text-gray-400'}`}
          >
            <option value="">Thème préféré</option>
            <option value="minimal">Minimal Clean</option>
            <option value="premium">Premium</option>
            <option value="gallery">Gallery Focus</option>
          </select>

          

          <input
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="Budget estimé (optionnel)"
            className="w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
          />

          <input
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            placeholder="Date souhaitée / disponibilité"
            className="w-full min-w-0 rounded-md border border-gray-200 px-3 py-2"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message / besoins spécifiques"
            className="col-span-2 w-full min-w-0 min-h-[120px] rounded-md border border-gray-200 px-3 py-2"
          />

          <div className="col-span-2 flex items-center justify-stretch sm:justify-end">
            <button type="submit" className="w-full rounded-md bg-[var(--color-brand)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 sm:w-auto">
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
