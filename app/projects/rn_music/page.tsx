// import Image from "next/image";


// export default function v5ibe_page() {
//   return (
//     <div className="flex min-h-screen flex-col">

//       <main className="flex flex-1 items-center justify-center  px-4 sm:px-16">
//         <div className="flex w-full max-w-3xl flex-col items-center justify-between gap-24 py-32 sm:items-start">
//           <Image
//             className="dark:invert"
//             src="/next.svg"
//             // src=''
//             alt="Legendary"
//             width={100}
//             height={20}
//             priority
//           />
//           <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//             <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//               We will get started, soon.
//             </h1>
//             <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//               Work in Progress.
//               {/* <a
//                 href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                 className="font-medium text-zinc-950 dark:text-zinc-50"
//               >
//                 Templates
//               </a>{" "}
//               or the{" "}
//               <a
//                 href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                 className="font-medium text-zinc-950 dark:text-zinc-50"
//               >
//                 Learning
//               </a>{" "}
//               center. */}
//             </p>
//           </div>
//           {/* <div className="flex w-full flex-col gap-4 text-base font-medium sm:flex-row">
//             <a
//               className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className="dark:invert"
//                 src="/vercel.svg"
//                 alt="Vercel logomark"
//                 width={16}
//                 height={16}
//               />
//               Deploy Now
//             </a>
//             <a
//               className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Documentation
//             </a>
//           </div> */}
//         </div>
//       </main>

//     </div>
//   );
// }









"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SnowCanvas from "@/app/components/SnowCanvas";

const VERSIONS = [
  {
    version: "v1.1.0",
    label: "Latest",
    url: "https://github.com/Pratik98755/v5ibe/releases/download/v1.1.0/v5ibe_1.1.0.apk",
  },
  {
    version: "v1.0.1",
    label: "Previous",
    url: "https://github.com/Pratik98755/v5ibe/releases/download/v1.0.1/v5ibe_v1.0.1.apk",
  },
  {
    version: "v1.0.0",
    label: "Previous",
    url: "https://github.com/Pratik98755/v5ibe/releases/download/v1.0.0/v5ibe.apk",
  },
];

function DownloadButton({
  variant = "primary",
}: {
  variant?: "primary" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const base =
    variant === "primary"
      ? "rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
      : "rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`${base} inline-flex items-center gap-2`}
      >
        Download Android App
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="border-b border-zinc-800 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Select version
            </p>
          </div>

          <div className="p-2">
            {VERSIONS.map((v) => (
              <a
                key={v.version}
                href={v.url}
                download
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-zinc-900"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {v.version}
                  </span>
                  <span className="text-xs text-zinc-500">{v.label}</span>
                </div>

                <span className="text-zinc-600 transition group-hover:text-white">
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function v5ibe_page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Snow background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <SnowCanvas />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pt-28">
          <div className="mb-8 flex items-center gap-3 text-sm text-zinc-500">
            <span className="h-px w-8 bg-zinc-700" />
            PERSONAL PROJECT · REACT NATIVE
          </div>

          <div className="max-w-5xl">
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              V5ibe
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              A React Native music experience built around discovering
              songs through a simple, immersive scrolling interface.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React Native",
                "JavaScript",
                "YouTube Music",
                "Innertube API",
                "Music Discovery",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Download */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <DownloadButton />
              <span className="text-sm text-zinc-500">
                Development build
              </span>
            </div>
          </div>

          {/* Project status */}
          <div className="mt-20 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Current status
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  App development is in progress.
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                  The core music discovery experience is being built,
                  while the streaming layer and backend infrastructure
                  are still under active development.
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                IN DEVELOPMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              The idea
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              What if discovering music felt more natural?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              V5ibe is an attempt to rethink the way music is browsed
              on mobile. Instead of navigating through traditional
              lists of songs, albums and menus, the app is designed
              around a continuous scrolling experience.
            </p>

            <p>
              Each song occupies its own part of the interface,
              allowing users to move through music simply by
              scrolling and discovering what comes next.
            </p>

            <p>
              The app uses the Innertube API — the underlying API
              interface used by YouTube Music — to search and
              discover songs and artists from its extensive music
              catalog.
            </p>

            <p>
              The goal is to combine the depth of an existing music
              catalog with an interface that feels lightweight,
              visual and effortless to explore.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              The experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Scroll. Discover. Listen.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              V5ibe is designed around a song-by-song scrolling
              experience rather than making users constantly
              navigate between screens.
            </p>
          </div>

          {/* Experience cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                01 / DISCOVER
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Find music
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Search for songs and artists and explore music
                through the underlying YouTube Music catalog.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                02 / SCROLL
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Keep exploring
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Move through songs using a continuous vertical
                interface designed to make discovery feel fluid.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                03 / LISTEN
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Play music
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                The application is being developed around a
                dedicated streaming layer for playing discovered
                music directly in the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Under the hood
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Built on top of Innertube.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Rather than maintaining a separate music catalog,
              V5ibe communicates with YouTube Music through the
              Innertube API to discover songs, artists and
              metadata.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              The project also includes a JavaScript backend that
              handles parts of the music retrieval and streaming
              pipeline. This layer is still being refined as the
              application develops.
            </p>
          </div>

          {/* Technical pipeline */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="text-sm text-zinc-500">
              MUSIC PIPELINE
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Search / Artist Query",
                "Innertube API",
                "Song & Artist Metadata",
                "Stream Retrieval",
                "React Native Player",
              ].map((step, index) => (
                <div key={step}>
                  <div className="rounded-xl border border-zinc-800 bg-black p-4">
                    <span className="mr-3 text-zinc-600">
                      0{index + 1}
                    </span>

                    {step}
                  </div>

                  {index < 4 && (
                    <div className="py-2 text-center text-zinc-700">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Technology
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              The stack behind V5ibe.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Mobile",
                items: "React Native",
              },
              {
                title: "API",
                items: "Innertube · YouTube Music",
              },
              {
                title: "Backend",
                items: "Node.js · JavaScript",
              },
              {
                title: "Playback",
                items: "Audio Streaming · Music Player",
              },
            ].map((stack) => (
              <div
                key={stack.title}
                className="rounded-2xl border border-zinc-800 bg-black p-6"
              >
                <p className="text-sm text-zinc-500">
                  {stack.title}
                </p>

                <p className="mt-3 leading-relaxed text-zinc-300">
                  {stack.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRENT STATE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              What&apos;s next?
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Still being built.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Improve the audio streaming pipeline",
              "Refine the music player experience",
              "Improve search and discovery",
              "Add more playback and library features",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
              >
                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <span className="text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center md:px-10">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            V5ibe
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Music, one scroll at a time.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            V5ibe is still under development, but the current
            Android build is available to try.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <DownloadButton variant="primary" />

            <Link
              href="/"
              className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium transition hover:border-zinc-500"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
