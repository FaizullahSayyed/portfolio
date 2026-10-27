import { useEffect, useRef, useState } from 'react';
import { FiEdit2, FiLayers, FiPlus, FiX } from 'react-icons/fi';

type Project = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type ProjectEditor = { mode: 'add' } | { mode: 'edit'; project: Project };

const projects: Project[] = [
  {
    number: '01',
    label: 'Featured project',
    title: 'Coming soon',
    description: 'A new project story is on its way.',
  },
  {
    number: '02',
    label: 'Featured project',
    title: 'Coming soon',
    description: 'A new project story is on its way.',
  },
  {
    number: '03',
    label: 'Featured project',
    title: 'Coming soon',
    description: 'A new project story is on its way.',
  },
];

export default function Projects() {
  const [editor, setEditor] = useState<ProjectEditor | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (editor && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [editor]);

  return (
    <section id="projects" className="section-atmosphere section-atmosphere--projects scroll-mt-20 border-y border-[#eeedf5] px-[18px] py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-[620px]">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">Selected work</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#181824] sm:text-4xl">A few things I’ve been building.</h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="max-w-[360px] leading-7 text-[#5f5f70] sm:text-right">
              Project details and case studies will be added here as the portfolio grows.
            </p>
            <button
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6c63ff] px-5 text-sm font-semibold text-white transition hover:bg-[#554be8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c63ff]"
              type="button"
              onClick={() => setEditor({ mode: 'add' })}
            >
              <FiPlus className="h-4 w-4" aria-hidden="true" />
              Add project
            </button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-[#e9e9ef] bg-white transition hover:-translate-y-1 hover:border-[#d3d0ff] hover:shadow-[0_18px_48px_rgba(24,24,36,0.07)]"
            >
              <div className="flex aspect-[1.35] items-center justify-center bg-[#f1f0ff] p-8">
                <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#c9c5ff] bg-white/70">
                  <div className="flex flex-col items-center gap-3 text-[#c2beff] transition group-hover:text-[#6c63ff]">
                    <FiLayers className="h-10 w-10" aria-hidden="true" />
                    <span className="text-sm font-semibold tracking-[0.14em]">{project.number}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold tracking-[0.14em] text-[#6c63ff] uppercase">{project.label}</p>
                  <button
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-[#666675] transition hover:bg-[#f2f0ff] hover:text-[#554be8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff]"
                    type="button"
                    aria-label={`Edit project ${project.number}`}
                    onClick={() => setEditor({ mode: 'edit', project })}
                  >
                    <FiEdit2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Edit
                  </button>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-[#181824]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#666675]">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto max-h-[min(90vh,48rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl border border-[#e9e9ef] bg-white p-0 text-[#181824] shadow-[0_24px_80px_rgba(24,24,36,0.2)] backdrop:bg-[#181824]/45"
        aria-labelledby="project-editor-title"
        onClose={() => setEditor(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        {editor && (
          <form
            className="p-6 sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-[#6c63ff] uppercase">
                  Portfolio projects
                </p>
                <h2 id="project-editor-title" className="text-2xl font-bold tracking-[-0.04em]">
                  {editor.mode === 'add' ? 'Add project details' : `Edit project ${editor.project.number}`}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#666675]">
                  {editor.mode === 'add'
                    ? 'Fill in the project information to prepare it for your portfolio.'
                    : 'Update the project information for your portfolio.'}
                </p>
              </div>
              <button
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[#666675] transition hover:bg-[#f2f0ff] hover:text-[#554be8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff]"
                type="button"
                aria-label="Close project form"
                onClick={() => dialogRef.current?.close()}
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#343442]">
                Project title
                <input
                  className="mt-2 min-h-11 w-full rounded-xl border border-[#e1e0e9] bg-white px-3.5 text-sm text-[#181824] outline-none transition placeholder:text-[#9898a5] focus:border-[#8c85ff] focus:ring-4 focus:ring-[#6c63ff]/10"
                  type="text"
                  name="title"
                  placeholder="e.g. Portfolio website"
                  defaultValue={editor.mode === 'edit' ? editor.project.title : ''}
                />
              </label>
              <label className="block text-sm font-medium text-[#343442]">
                Description
                <textarea
                  className="mt-2 min-h-28 w-full resize-y rounded-xl border border-[#e1e0e9] bg-white px-3.5 py-3 text-sm text-[#181824] outline-none transition placeholder:text-[#9898a5] focus:border-[#8c85ff] focus:ring-4 focus:ring-[#6c63ff]/10"
                  name="description"
                  placeholder="What does this project do?"
                  defaultValue={editor.mode === 'edit' ? editor.project.description : ''}
                />
              </label>
              <label className="block text-sm font-medium text-[#343442]">
                Project URL
                <input
                  className="mt-2 min-h-11 w-full rounded-xl border border-[#e1e0e9] bg-white px-3.5 text-sm text-[#181824] outline-none transition placeholder:text-[#9898a5] focus:border-[#8c85ff] focus:ring-4 focus:ring-[#6c63ff]/10"
                  type="url"
                  name="url"
                  placeholder="https://example.com"
                />
              </label>
              <label className="block text-sm font-medium text-[#343442]">
                Technologies
                <input
                  className="mt-2 min-h-11 w-full rounded-xl border border-[#e1e0e9] bg-white px-3.5 text-sm text-[#181824] outline-none transition placeholder:text-[#9898a5] focus:border-[#8c85ff] focus:ring-4 focus:ring-[#6c63ff]/10"
                  type="text"
                  name="technologies"
                  placeholder="e.g. React, TypeScript"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#eeedf5] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="m-0 text-xs leading-5 text-[#777687]">
                Saving will be available when project management is connected.
              </p>
              <div className="flex gap-3 sm:shrink-0">
                <button
                  className="min-h-10 rounded-full border border-[#e1e0e9] px-4 text-sm font-medium text-[#555563] transition hover:bg-[#f7f6ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff]"
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                >
                  Cancel
                </button>
                <button
                  className="min-h-10 cursor-not-allowed rounded-full bg-[#aaa5ff] px-4 text-sm font-semibold text-white"
                  type="submit"
                  disabled
                >
                  {editor.mode === 'add' ? 'Add project' : 'Save changes'}
                </button>
              </div>
            </div>
          </form>
        )}
      </dialog>
    </section>
  );
}
