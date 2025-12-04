"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between px-8 py-4 border-b bg-navbar-bg border-navbar-border items-center shadow-sm">
            <Link href="/home">
                <h1 className="text-2xl font-bold text-white transition-opacity cursor-pointer">
                    Gutendex
                </h1>
            </Link>
            <ul className="flex gap-8 text-lg">
                <li>
                    <Link
                        href="/home"
                        className="hover:text-red-400 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/books/my-books"
                        className="hover:text-red-400 transition-colors"
                    >
                        My Books
                    </Link>
                </li>
            </ul>
            <button
                onClick={() => {
                    console.log("Button clicked in NavBar");
                    toggleTheme();
                }}
                className="border border-accent bg-theme-btn-bg hover:bg-theme-btn-hover cursor-pointer rounded-3xl py-2 px-6  transition-all duration-200 flex items-center gap-2 "
            >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </nav>
    );
}
