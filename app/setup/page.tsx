'use client'

import { ArrowRight, Building2, Check, ChevronLeft, Globe2, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const steps = ['Your company', 'Your first detection rule', 'Invite your team']

export default function SetupPage() {
  const router = useRouter()
  const [company, setCompany] = useState('Northstar Payments')
  const [industry, setIndustry] = useState('Fintech / payments')
  const [error, setError] = useState('')

  function createWorkspace(e: FormEvent) {
    e.preventDefault()
    if (!company.trim()) return setError('Add your company name to continue.')
    localStorage.setItem('trustlens-company', company.trim())
    router.push('/dashboard')
  }

  return <main className="setup-shell min-h-screen px-5 py-8 text-slate-900">
    <div className="mx-auto max-w-5xl">
      <Link href="/login" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"><ChevronLeft size={17}/> Back to sign in</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <aside>
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#102235] font-bold text-[#6cddff]">TL</span><b>TrustLens</b></div>
          <p className="mt-12 text-sm font-bold uppercase tracking-[.18em] text-[#168462]">Workspace setup</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-.05em]">Make it yours.</h1>
          <p className="mt-4 max-w-sm leading-7 text-slate-500">A few details help us shape your starting investigation workspace.</p>
          <ol className="mt-10 space-y-6 text-sm">{steps.map((title, index) => <li key={title} className={`flex items-center gap-4 ${index === 0 ? 'text-slate-900' : 'text-slate-400'}`}><span className={`grid h-7 w-7 place-items-center rounded-full border text-xs ${index === 0 ? 'border-[#168462] bg-[#e6f8ef] text-[#168462]' : 'border-slate-200'}`}>{index === 0 ? <Check size={14}/> : `0${index + 1}`}</span>{title}</li>)}</ol>
        </aside>
        <section className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6f8ef] text-[#168462]"><Building2 size={22}/></div>
          <h2 className="mt-6 text-2xl font-semibold tracking-[-.035em]">Tell us about your company</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">You’ll be the administrator and can invite teammates later.</p>
          <form onSubmit={createWorkspace} className="mt-8 space-y-6">
            <label className="setup-label">Company name<input value={company} onChange={e => { setCompany(e.target.value); setError('') }} placeholder="Acme Payments" autoFocus/></label>
            <label className="setup-label">Industry<select value={industry} onChange={e => setIndustry(e.target.value)}><option>Fintech / payments</option><option>E-commerce</option><option>Marketplace</option><option>Banking</option></select></label>
            <label className="setup-label">Primary region<div className="relative"><Globe2 className="setup-icon" size={17}/><select className="with-icon"><option>India & South Asia</option><option>North America</option><option>Europe</option><option>Global</option></select></div></label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button className="primary-action mt-2" type="submit">Create workspace <ArrowRight size={18}/></button>
          </form>
          <p className="mt-5 flex items-center gap-2 text-xs text-slate-400"><Users size={14}/> Start with a private workspace. Add colleagues when you’re ready.</p>
        </section>
      </div>
    </div>
  </main>
}
