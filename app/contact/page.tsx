import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 dark:bg-black sm:px-16">
        <div className="w-full max-w-3xl py-32">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-6">Contact Me</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Get in touch through the contact form or connect via social media.
          </p>
        </div>
      </main>

    </div>
  );
}