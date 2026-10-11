

// export default function About() {
//   return (
//     <div className="flex min-h-screen flex-col">

//       <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 dark:bg-black sm:px-16">
//         <div className="w-full max-w-3xl py-32">
//           <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-6">About Me</h1>
//           <p className="text-lg text-zinc-600 dark:text-zinc-400">
//             This is where I&apos;ll share my professional background, skills, and experiences.
//           </p>
//         </div>
//       </main>

//     </div>
//   );
// }





import Link from "next/link";
import SnowCanvas from "@/app/components/SnowCanvas";

const techStacks = [
  {
    title: "Languages",
    items: ["C++", "C", "JavaScript", "Python"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    items: ["LangChain", "LangGraph", "RAG", "Embeddings", "AI Agents"],
  },
  {
    title: "AI Ecosystem",
    items: ["Groq", "Gemini", "OpenAI", "Hugging Face"],
  },
  {
    title: "Core CS & Tools",
    items: ["DSA", "OOP", "DBMS", "Computer Networks", "Git", "Linux"],
  },
];

const interests = [
  {
    number: "01",
    title: "Software Engineering",
    text: "Building full-stack applications with practical features, maintainable code, and backend systems that solve real problems.",
  },
  {
    number: "02",
    title: "AI-Powered Applications",
    text: "Exploring LLMs, agentic workflows, semantic search, and ways to integrate AI into useful software products.",
  },
  {
    number: "03",
    title: "Problem Solving",
    text: "Strengthening data structures and algorithms, understanding core computer science concepts, and improving how I approach technical problems.",
  },
  {
    number: "04",
    title: "Cybersecurity & Automation",
    text: "Learning security fundamentals and using Python to automate tasks and explore practical security workflows.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Snow background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <SnowCanvas />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pt-28">
          <div className="mb-8 flex items-center gap-3 text-sm text-zinc-500">
            <span className="h-px w-8 bg-zinc-700" />
            ABOUT ME · DEVELOPER PROFILE
          </div>

          <div className="max-w-5xl">
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              Building things
              <br />
              that solve problems.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              I&apos;m Vishal Prasad, a B.Tech student in Electronics
              &amp; Communication Engineering at Jalpaiguri Government
              Engineering College, interested in software development,
              AI-powered applications, and building products from the ground up.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "AI Applications",
                "React Native",
                "Problem Solving",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects/razorscout"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Explore My Projects
              </Link>

              <a
                href="https://github.com/Pratik98755"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-prasad-705b37299/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Background and approach */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              A little about me
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              From engineering fundamentals to building software.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              I&apos;m pursuing my B.Tech in Electronics &amp; Communication
              Engineering at JGEC, graduating in 2027. Alongside my
              coursework, I spend time learning software technologies and
              applying them through personal projects.
            </p>

            <p>
              My interests span the full development process — from
              designing interfaces and building APIs to working with
              databases and integrating AI models into applications.
              I enjoy understanding how the pieces fit together rather
              than treating each technology as an isolated tool.
            </p>

            <p>
              Projects are where I explore these ideas in practice.
              RazorScout combines AI agents, semantic product retrieval,
              and payment workflows, while V5ibe is my ongoing attempt
              to build a music discovery experience for Android.
            </p>

            <p>
              I&apos;m continuing to strengthen my problem-solving skills,
              software engineering fundamentals, and understanding of
              systems that can be useful beyond a demo.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of interest */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              What I&apos;m interested in
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Learning by building.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              These are the areas I&apos;m working on and exploring
              through coursework, independent learning, and projects.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {interests.map((interest) => (
              <div
                key={interest.number}
                className="rounded-2xl border border-zinc-800 bg-black p-7 md:p-8"
              >
                <span className="text-sm text-zinc-600">
                  {interest.number} / INTEREST
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  {interest.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {interest.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I work with.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            A growing toolkit across software development, AI integration,
            databases, and computer science fundamentals.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((stack) => (
            <div
              key={stack.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h3 className="text-lg font-medium">
                {stack.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Ideas turned into projects.
              </h2>
            </div>

            <Link
              href="/projects/razorscout"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Explore project details →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Link
              href="/projects/razorscout"
              className="group rounded-2xl border border-zinc-800 bg-black p-8 transition hover:border-zinc-600 md:p-10"
            >
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                AI · Full-Stack
              </p>

              <h3 className="mt-5 text-3xl font-semibold">
                RazorScout
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                An agentic commerce project exploring natural-language
                shopping, semantic product retrieval, contextual
                recommendations, and Razorpay payment workflows.
              </p>

              <p className="mt-8 text-sm text-zinc-300 transition group-hover:text-white">
                View project →
              </p>
            </Link>

            <Link
              href="/projects/v5ibe"
              className="group rounded-2xl border border-zinc-800 bg-black p-8 transition hover:border-zinc-600 md:p-10"
            >
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                React Native · Mobile
              </p>

              <h3 className="mt-5 text-3xl font-semibold">
                V5ibe
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                An Android music application focused on music discovery,
                song playback, playlists, and building a smooth,
                scrolling-first mobile experience. Development is ongoing.
              </p>

              <p className="mt-8 text-sm text-zinc-300 transition group-hover:text-white">
                Explore V5ibe →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:px-10 md:py-32">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            What&apos;s next
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Build. Learn. Improve.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            I&apos;m interested in opportunities where I can contribute
            to real software projects, learn from experienced engineers,
            and keep improving as a developer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/vishal-prasad-705b37299/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Connect on LinkedIn ↗
            </a>

            <Link
              href="/"
              className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}