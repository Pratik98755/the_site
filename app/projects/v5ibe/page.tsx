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

import Link from "next/link";
import SnowCanvas from "@/app/components/SnowCanvas";

const DOWNLOAD_HREF = "https://v5ibe.pages.dev";

const DEPENDENCIES = [
  "expo@~57.0.27",
  "react-native@0.86.3",
  "react@19.2.3",
  "typescript@~6.0.3",
  "youtubei.js@^18.1.0",
  "ytdlp-react-native@^1.0.0",
  "react-native-nitro-player@^1.6.1",
  "react-native-nitro-modules@^0.37.1",
  "firebase@^13.0.0",
  "axios@^1.20.0",
  "@react-navigation/native@^7.5.0",
  "@react-navigation/native-stack@^7.20.0",
  "@react-navigation/bottom-tabs@^7.20.0",
  "@react-navigation/material-top-tabs@^7.8.0",
  "@react-native-async-storage/async-storage@2.2.0",
  "@react-native-community/slider@5.2.0",
  "@react-native-masked-view/masked-view@0.3.2",
  "react-native-bootsplash@^6.3.10",
  "react-native-fs@^2.20.0",
  "react-native-safe-area-context@~5.7.0",
  "react-native-screens@~4.26.0",
  "expo-constants@~57.0.22",
  "expo-device@~57.0.2",
  "expo-file-system@~57.0.7",
  "expo-intent-launcher@~57.0.1",
  "expo-linear-gradient@~57.0.2",
  "expo-notifications@~57.0.22",
  "expo-status-bar@~57.0.1",
];

function DownloadLink({
  variant = "primary",
}: {
  variant?: "primary" | "outline";
}) {
  const base =
    variant === "primary"
      ? "rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
      : "rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200";

  return (
    <Link
      href={DOWNLOAD_HREF}
      className={`${base} inline-flex items-center gap-2`}
    >
      Visit v5ibe page to download
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M4.5 2.5L8 6l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
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

            <p className="mt-6 text-2xl font-medium tracking-tight md:text-4xl">
              Proudly presenting <span className="text-zinc-500">v2.0.0</span>{" "}
              — the first production release.
            </p>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              A React Native music experience built around discovering
              songs through a simple, immersive scrolling interface.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React Native",
                "Expo",
                "TypeScript",
                "Innertube API",
                "yt-dlp",
                "Nitro Player",
                "10-Band EQ",
                "Offline Downloads",
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
              <DownloadLink />
              <span className="text-sm text-zinc-500">
                v2.0.0 · Android · Production release
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
                  v2.0.0 is live.
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                  Search, discovery, streaming, playback, downloads and a
                  full 10-band equalizer now work together end to end.
                  V5ibe has moved past development builds and into its
                  first production release.
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                PRODUCTION RELEASE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE HIGHLIGHTS ================= */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Feature highlights
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Everything, in one player.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              v2.0.0 brings the full listening experience together —
              equalizer, local playback, downloads, discovery, a queue
              that fills itself, and a direct line between you and the
              app.
            </p>
          </div>

          {/* Selling points */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                01 / EQUALIZER
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                10-band equalizer
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Shape your sound with a full 10-band EQ powered by
                Nitro Player, right inside the app.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                02 / LOCAL PLAYER
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Built-in local player
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Play the audio already on your device without ever
                leaving V5ibe — no separate music app needed.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                03 / DOWNLOADS
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                1-click download
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Save any song to your device with a single tap and keep
                it available for offline listening.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                04 / DISCOVERY
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Explore, search &amp; trending
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Search the full catalog or browse trending content to
                see what&apos;s moving right now.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                05 / QUEUE
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Auto-queued recommendations
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Recommended songs are added to your queue
                automatically, so playback never has to stop.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <span className="text-sm text-zinc-500">
                06 / STAY IN TOUCH
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                Notices &amp; feedback
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Notices from the developer arrive straight in the app,
                including push notifications for releases and updates.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Send your own feedback too — ideas, queries or bug
                reports — without ever leaving V5ibe.
              </p>
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
              With v2.0.0, that idea is finally complete: discovery
              and playback live in the same place, and the scroll
              never breaks.
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
                The streaming layer is in place — discovered songs
                now play directly inside the app through a
                dedicated native player.
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
              Streams are then resolved on device with yt-dlp and
              handed to a Nitro Player instance, which keeps
              playback native, low-latency and independent of any
              in-app browser view.
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
                "Innertube API · youtubei.js",
                "Song & Artist Metadata",
                "Stream Retrieval · yt-dlp",
                "Nitro Player · React Native",
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
                items: "React Native 0.86 · Expo SDK 57",
              },
              {
                title: "Music API",
                items: "youtubei.js · Innertube",
              },
              {
                title: "Streaming",
                items: "yt-dlp · Nitro Player",
              },
              {
                title: "Data",
                items: "Firebase · AsyncStorage",
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

          {/* Full dependency list */}
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-8">
            <p className="text-sm text-zinc-500">
              DEPENDENCIES · v2.0.0
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {DEPENDENCIES.map((dep) => (
                <span
                  key={dep}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
                >
                  {dep}
                </span>
              ))}
            </div>
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
              v2.0.0 shipped. Work continues.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Polish the player and queue experience",
              "Expand search and discovery",
              "Improve stream reliability and caching",
              "Add library, playlists and offline support",
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
            What are you waiting for? Give it a try!
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <DownloadLink variant="primary" />

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