import { FiLayers } from 'react-icons/fi';

const projects = [
  { number: '01', label: 'Featured project' },
  { number: '02', label: 'Featured project' },
  { number: '03', label: 'Featured project' },
];

export default function Projects() {
  return (
    <section id="projects" className="section-atmosphere section-atmosphere--projects scroll-mt-20 border-y border-[#eeedf5] px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-[620px]">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">Selected work</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">A few things I’ve been building.</h2>
          </div>
          <p className="max-w-[360px] leading-7 text-[#5f5f70]">
            Project details and case studies will be added here as the portfolio grows.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map(({ number, label }) => (
            <article
              key={number}
              className="group overflow-hidden rounded-3xl border border-[#e9e9ef] bg-white transition hover:-translate-y-1 hover:border-[#d3d0ff] hover:shadow-[0_18px_48px_rgba(24,24,36,0.07)]"
            >
              <div className="flex aspect-[1.35] items-center justify-center bg-[#f1f0ff] p-8">
                <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#c9c5ff] bg-white/70">
                  <div className="flex flex-col items-center gap-3 text-[#c2beff] transition group-hover:text-[#6c63ff]">
                    <FiLayers className="h-10 w-10" aria-hidden="true" />
                    <span className="text-sm font-semibold tracking-[0.14em]">{number}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#6c63ff] uppercase">{label}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#181824]">Coming soon</h3>
                <p className="mt-2 text-sm leading-6 text-[#666675]">A new project story is on its way.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
