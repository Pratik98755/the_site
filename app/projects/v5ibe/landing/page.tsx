
"use client";

import { useEffect, useState } from "react";

export default function V5ibeLandingPage() {
    const [deepLink, setDeepLink] = useState("v5ibe://auth");

    useEffect(() => {
        // Forward all Firebase query parameters to the app.
        const search = window.location.search;
        const link = `v5ibe://auth${search}`;

        setDeepLink(link);

        // Attempt to open the app automatically.
        window.location.href = link;
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
                    href={deepLink}
                    className="inline-block rounded-full bg-[#ff4081] px-6 py-3 font-bold text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#120f16]"
                >
                    Open v5ibe
                </a>
            </div>
        </main>
    );
}
