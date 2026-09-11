import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-black py-4 px-8">
      <nav className="flex gap-6 flex-row-reverse">
        <Link href="/about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
          About
        </Link>
        <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
          Home
        </Link>

        <Link href="/projects/razorscout" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
          RazorScout
        </Link>
        <Link href="/projects/rn_music" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
          v5ibe
        </Link>

      </nav>
    </header>
  );
}