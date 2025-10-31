import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 px-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 dark:text-zinc-400">
        <p>© 2025 My Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-50">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-50">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}