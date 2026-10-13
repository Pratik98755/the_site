"use client";

import { useEffect, useRef } from "react";

export default function V5ibeLandingPage() {
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Forward all Firebase query parameters to the app.
        const search = window.location.search;
        const deepLink = `v5ibe://auth${search}`;

        // Update the fallback link without triggering a React render.
        if (linkRef.current) {
            linkRef.current.href = deepLink;
        }

        // Attempt to open the app automatically.
        window.location.href = deepLink;
    }, []);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#120f16] px-6 py-6 text-center font-sans text-white">
            <div className="w-full max-w-[340px]">
                <h1 className="mb-2 text-[22px] font-bold">
                    v5ibe
                </h1>

                <p className="mb-5 text-sm text-[#9aa0a6]">
                    Tap below to finish signing in.
                </p>

                <a
                    ref={linkRef}
                    href="v5ibe://auth"
                    className="inline-block rounded-full bg-[#ff4081] px-6 py-3 font-bold text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#120f16]"
                >
                    Open v5ibe
                </a>
            </div>
        </main>
    );
}