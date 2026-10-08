'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function continueToWorkspace(event: FormEvent) {
    event.preventDefault()
    if (!email.includes('@')) {
      setMessage('Enter a valid work email to continue.')
      return
    }
    localStorage.setItem('trustlens-user', email)
    localStorage.setItem('trustlens-session', 'active')
    router.push('/setup')
  }

  return (
    <main className="auth-shell min-h-screen px-5 py-6 md:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0c111c] shadow-2xl md:grid-cols-[1.06fr_.94fr]">
        <section className="relative hidden overflow-hidden p-12 md:flex md:flex-col">
          <div className="auth-orb auth-orb-one" /><div className="auth-orb auth-orb-two" />
          <Link href="/" className="relative z-10 flex items-center gap-3 text-white"><Mark /><span className="text-lg font-semibold tracking-tight">TrustLens</span></Link>
          <div className="relative z-10 my-auto max-w-md">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#65d7ff]/20 bg-[#65d7ff]/10 px-3 py-1 text-xs font-medium text-[#9ee7ff]"><Sparkles size={13}/> Intelligence, without the black box</p>
            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-white">See risk clearly.<br/><span className="text-[#8ee0b3]">Move with confidence.</span></h1>
            <p className="mt-6 text-base leading-7 text-slate-300">The workspace for teams that need to decide on every transaction while the moment still matters.</p>
          </div>
          <div className="relative z-10 flex items-center gap-3 text-sm text-slate-300"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"><CheckCircle2 size={18}/></span> Explainable signals. Human judgement. One audit trail.</div>
        </section>
        <section className="flex bg-[#f8fafc] p-6 text-slate-900 sm:p-10 md:p-12">
          <div className="m-auto w-full max-w-sm">
            <Link href="/" className="mb-14 flex items-center gap-3 md:hidden"><Mark dark/><span className="font-semibold">TrustLens</span></Link>
            <p className="text-sm font-medium text-[#177f5e]">WELCOME TO TRUSTLENS</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-.04em]">Start your workspace</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">Use any work email to explore the interactive demo. No card required.</p>
            <form className="mt-8 space-y-5" onSubmit={continueToWorkspace}>
              <label className="block"><span className="mb-2 block text-sm font-medium">Work email</span><span className="input-wrap"><Mail size={18}/><input autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" type="email" /></span></label>
              <label className="block"><span className="mb-2 block text-sm font-medium">Password <em className="font-normal text-slate-400">(optional for demo)</em></span><span className="input-wrap"><LockKeyhole size={18}/><input placeholder="••••••••" type={showPassword ? 'text' : 'password'} /><button aria-label="Toggle password visibility" type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></span></label>
              {message && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{message}</p>}
              <button className="primary-action" type="submit">Continue to setup <ArrowRight size={18}/></button>
            </form>
            <div className="my-7 flex items-center gap-3 text-xs text-slate-400 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">OR</div>
            <button onClick={() => { setEmail('demo@northstar.pay'); setMessage('Demo email loaded — continue to create your workspace.') }} className="secondary-action"><Sparkles size={17}/> Use demo account</button>
            <p className="mt-8 flex gap-2 text-xs leading-5 text-slate-400"><ShieldCheck className="mt-0.5 shrink-0 text-[#177f5e]" size={15}/> In production, TrustLens uses magic links, secure HTTP-only sessions, and tenant-level access controls.</p>
          </div>
        </section>
      </div>
    </main>
  )
}

function Mark({ dark = false }: { dark?: boolean }) { return <span className={`grid h-9 w-9 place-items-center rounded-xl ${dark ? 'bg-[#102235] text-[#67d8fa]' : 'bg-gradient-to-br from-[#56cbff] to-[#6fe2a2] text-[#09202a]'}`}><span className="text-sm font-black">TL</span></span> }
