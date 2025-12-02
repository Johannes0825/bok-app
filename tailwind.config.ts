import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                fg: "var(--fg)",
                heading: "var(--heading)",
                "card-bg": "var(--card-bg)",
                "card-fg": "var(--card-fg)",
                "card-border": "var(--card-border)",
                "navbar-bg": "var(--navbar-bg)",
                "navbar-fg": "var(--navbar-fg)",
                "navbar-border": "var(--navbar-border)",
                accent: "var(--accent)",
                "accent-hover": "var(--accent-hover)",
            },
        },
    },
    plugins: [],
} satisfies Config;
