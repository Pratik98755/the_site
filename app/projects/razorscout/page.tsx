import Image from "next/image";
import Link from "next/link";

import SnowCanvas from "@/app/components/SnowCanvas";

export default function razorscout_page() {
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
                    {/* Small label */}
                    <div className="mb-8 flex items-center gap-3 text-sm text-zinc-500">
                        <span className="h-px w-8 bg-zinc-700" />
                        RAZORPAY BUILDATHON · TRACK 01
                    </div>

                    <div className="max-w-5xl">
                        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
                            RazorScout
                        </h1>

                        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
                            An AI-powered agentic commerce platform that takes buyers from
                            natural-language intent to a verified Razorpay transaction.
                        </p>

                        {/* Tags */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "AI Agents",
                                "Agentic Commerce",
                                "Semantic Search",
                                "AI Cross-Sell",
                                "Razorpay",
                                "LangGraph",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/Pratik98755/razor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                            >
                                View on GitHub ↗
                            </a>

                            <a
                                href="https://youtu.be/h22UqbsDOoI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
                            >
                                Live Demo ↗
                            </a>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="mt-20 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src="/projects/razorscout/hero.png"
                                alt="RazorScout AI commerce interface"
                                fill
                                className="object-cover"
                                priority
                            />
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
                            What if AI could actually participate in commerce?
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
                        <p>
                            Traditional e-commerce puts the entire shopping workflow on the
                            buyer — searching, comparing, finding accessories, managing the
                            cart and finally completing payment.
                        </p>

                        <p>
                            RazorScout changes that interaction by introducing an AI agent
                            directly into the commerce workflow.
                        </p>

                        <p>
                            Buyers can describe what they want naturally. The agent discovers
                            relevant products, manages the cart and, when appropriate,
                            recommends complementary products before checkout.
                        </p>

                        <p>
                            The final transaction remains controlled by the backend and
                            Razorpay, keeping AI reasoning separate from transaction-critical
                            operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FLOW ================= */}
            <section className="border-y border-zinc-800 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-widest text-zinc-500">
                            The experience
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                            From intent to transaction.
                        </h2>

                        <p className="mt-5 text-lg text-zinc-400">
                            Two buying paths, designed around how people actually shop.
                        </p>
                    </div>

                    {/* Flow cards */}
                    <div className="mt-16 grid gap-6 md:grid-cols-2">
                        {/* Direct buy */}
                        <div className="rounded-2xl border border-zinc-800 bg-black p-8">
                            <span className="text-sm text-zinc-500">01 / DIRECT BUY</span>

                            <h3 className="mt-5 text-2xl font-semibold">
                                Intent → Product → Payment
                            </h3>

                            <p className="mt-4 leading-relaxed text-zinc-400">
                                When a buyer already knows what they want, the agent provides a
                                frictionless path directly to Razorpay Checkout.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
                                {["Natural Intent", "Semantic Search", "Buy Now", "Razorpay"].map(
                                    (item, index) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <span className="rounded-lg border border-zinc-800 px-3 py-2 text-zinc-300">
                                                {item}
                                            </span>
                                            {index < 3 && (
                                                <span className="text-zinc-700">→</span>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Cart */}
                        <div className="rounded-2xl border border-zinc-800 bg-black p-8">
                            <span className="text-sm text-zinc-500">02 / CART CHECKOUT</span>

                            <h3 className="mt-5 text-2xl font-semibold">
                                Cart → Context → Cross-Sell
                            </h3>

                            <p className="mt-4 leading-relaxed text-zinc-400">
                                When the buyer is already building a cart, RazorScout uses that
                                context to surface complementary products before payment.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
                                {[
                                    "Cart Context",
                                    "Candidate Retrieval",
                                    "AI Classification",
                                    "Checkout",
                                ].map((item, index) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <span className="rounded-lg border border-zinc-800 px-3 py-2 text-zinc-300">
                                            {item}
                                        </span>
                                        {index < 3 && (
                                            <span className="text-zinc-700">→</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SCREENSHOTS ================= */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-zinc-500">
                            Product
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                            Built around the buyer.
                        </h2>
                    </div>

                    <p className="max-w-md text-zinc-400">
                        A commerce interface where natural language, product discovery and
                        transactions come together.
                    </p>
                </div>

                <div className="mt-14 space-y-8">
                    {/* Screenshot 1 */}
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src="/projects/razorscout/scout-ai.png"
                                alt="RazorScout AI shopping interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Two screenshots */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/projects/razorscout/recommendations.png"
                                    alt="RazorScout product recommendations"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-sm text-zinc-500">CROSS-SELL</p>
                                <h3 className="mt-2 text-xl font-medium">
                                    Contextual recommendations
                                </h3>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/projects/razorscout/cart.png"
                                    alt="RazorScout shopping cart"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-sm text-zinc-500">CART</p>
                                <h3 className="mt-2 text-xl font-medium">
                                    Agent-assisted checkout
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Payment screenshot */}
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src="/projects/razorscout/payment.png"
                                alt="Razorpay payment flow"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-8">
                            <p className="text-sm text-zinc-500">PAYMENTS</p>
                            <h3 className="mt-2 text-2xl font-medium">
                                From AI interaction to a verified transaction
                            </h3>

                            <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
                                RazorScout creates Razorpay orders on the backend and verifies
                                the payment before confirming the order.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RECOMMENDATION ENGINE ================= */}
            <section className="border-y border-zinc-800 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                    <div className="grid gap-16 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-zinc-500">
                                Recommendation engine
                            </p>

                            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                                Related isn&apos;t enough.
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                                A simple similarity search can find products that are related
                                to what a customer is buying. But related doesn&apos;t necessarily
                                mean complementary.
                            </p>

                            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                                RazorScout combines semantic retrieval, structured product
                                metadata, business rules and AI classification to determine
                                whether a product is complementary, an alternative, or
                                unrelated.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-black p-8">
                            <div className="text-sm text-zinc-500">RECOMMENDATION PIPELINE</div>

                            <div className="mt-8 space-y-3">
                                {[
                                    "Cart / Product Context",
                                    "Vector Candidate Retrieval",
                                    "Metadata + Business Filtering",
                                    "AI Classification",
                                    "Complementary Products",
                                ].map((step, index) => (
                                    <div key={step}>
                                        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                                            <span className="mr-3 text-zinc-600">
                                                0{index + 1}
                                            </span>
                                            {step}
                                        </div>

                                        {index < 4 && (
                                            <div className="py-2 text-center text-zinc-700">↓</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ARCHITECTURE ================= */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                        Under the hood
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                        AI for reasoning. Backend for control.
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                        The architecture separates probabilistic AI decisions from
                        transaction-critical commerce operations.
                    </p>
                </div>

                {/* Architecture visual */}
                <div className="mt-14 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                    <div className="relative aspect-[16/9]">
                        <Image
                            src="/projects/razorscout/architecture.png"
                            alt="RazorScout system architecture"
                            fill
                            className="object-contain p-6 md:p-12"
                        />
                    </div>
                </div>

                {/* Tech stack */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "AI",
                            items: "LangChain · LangGraph · Groq · Gemini",
                        },
                        {
                            title: "Search",
                            items: "LanceDB · Embeddings · Semantic Retrieval",
                        },
                        {
                            title: "Backend",
                            items: "Node.js · Express · MongoDB",
                        },
                        {
                            title: "Payments",
                            items: "Razorpay · Server-side Verification",
                        },
                    ].map((stack) => (
                        <div
                            key={stack.title}
                            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                        >
                            <p className="text-sm text-zinc-500">{stack.title}</p>
                            <p className="mt-3 leading-relaxed text-zinc-300">
                                {stack.items}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TRUST ================= */}
            <section className="border-y border-zinc-800 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-widest text-zinc-500">
                            Agentic commerce
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                            Built with boundaries.
                        </h2>

                        <p className="mt-5 text-lg text-zinc-400">
                            An AI agent participating in commerce needs more than intelligence.
                            It needs control, visibility and accountability.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                number: "01",
                                title: "Explainable",
                                text: "Recommendations are based on product context and classification.",
                            },
                            {
                                number: "02",
                                title: "Bounded",
                                text: "Commerce operations enforce stock, cart and transaction constraints.",
                            },
                            {
                                number: "03",
                                title: "Gated",
                                text: "Money movement requires explicit Razorpay Checkout authorization.",
                            },
                            {
                                number: "04",
                                title: "Auditable",
                                text: "USER and AGENT actions are recorded throughout the journey.",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="rounded-2xl border border-zinc-800 bg-black p-7"
                            >
                                <span className="text-sm text-zinc-600">{item.number}</span>

                                <h3 className="mt-6 text-xl font-medium">{item.title}</h3>

                                <p className="mt-3 leading-relaxed text-zinc-500">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Activity screenshot */}
                    <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-black">
                        <div className="relative aspect-[16/7]">
                            <Image
                                src="/projects/razorscout/activity.png"
                                alt="RazorScout activity audit trail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MERCHANT VALUE ================= */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
                <div className="grid gap-16 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-zinc-500">
                            Merchant side
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                            AI that can be measured.
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                            The merchant doesn&apos;t just get an AI assistant. They can see
                            whether AI recommendations actually lead to additional purchases
                            and revenue.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                <p className="text-sm text-zinc-500">AI-GENERATED REVENUE</p>
                                <p className="mt-3 text-3xl font-semibold">₹XXXX</p>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                <p className="text-sm text-zinc-500">ADDITIONAL PURCHASES</p>
                                <p className="mt-3 text-3xl font-semibold">XX</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/projects/razorscout/dashboard.png"
                                alt="RazorScout merchant dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL ================= */}
            <section className="border-t border-zinc-800">
                <div className="mx-auto max-w-5xl px-6 py-32 text-center md:px-10">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                        RazorScout
                    </p>

                    <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                        Commerce that moves at the speed of intent.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                        From natural-language intent to discovery, recommendation, cart,
                        payment and verification — an AI agent participating in the
                        commerce workflow.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a
                            href="https://github.com/Pratik98755/razor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                        >
                            GitHub ↗
                        </a>

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