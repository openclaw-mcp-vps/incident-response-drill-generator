export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Realistic<br />
          <span className="text-[#58a6ff]">Incident Response Drills</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Create custom practice scenarios tailored to your tech stack. Train your team, sharpen response skills, and get automated scoring — before a real incident hits.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Drilling — $35/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚙️</div>
            <h3 className="font-semibold text-white mb-1">Stack-Aware Scenarios</h3>
            <p className="text-sm text-[#8b949e]">Configure your infra — Kubernetes, AWS, Postgres, Redis — and get incidents that match your real environment.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Automated Scoring</h3>
            <p className="text-sm text-[#8b949e]">Log your response actions and receive instant feedback on speed, accuracy, and process adherence.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Track Improvement</h3>
            <p className="text-sm text-[#8b949e]">Review drill history and score trends to measure how your team's incident readiness grows over time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited drill scenarios</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom tech stack configuration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated response scoring</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Team drill history &amp; analytics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> New scenario types monthly</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What tech stacks are supported?</h3>
            <p className="text-sm text-[#8b949e]">You can configure any combination of cloud providers (AWS, GCP, Azure), container orchestration (Kubernetes, ECS), databases (Postgres, MySQL, Redis, MongoDB), and more. Scenarios are generated to match your specific setup.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does automated scoring work?</h3>
            <p className="text-sm text-[#8b949e]">As you work through a drill, you log your response actions in the app. The scoring engine evaluates your steps against best-practice runbooks, measuring time-to-detect, time-to-mitigate, and process correctness.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I run drills with my whole team?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your subscription covers your entire team. Share a drill session link and everyone can participate, log actions, and see the collective score and debrief together.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Incident Response Drill Generator. All rights reserved.
      </footer>
    </main>
  )
}
