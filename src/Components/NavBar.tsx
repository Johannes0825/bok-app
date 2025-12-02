"use client";

import Link from "next/link";
// import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
    // const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between px-8 py-4 border-b border-zinc-800 items-center shadow-sm">
            {" "}
            <Link href="/home">
                <h1 className="text-2xl font-bold text-white transition-opacity cursor-pointer">
                    Gutendex
                </h1>
            </Link>
            <ul className="flex gap-8 text-lg">
                <li>
                    <Link
                        href="/home"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/books/my-books"
                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                        My Books
                    </Link>
                </li>
            </ul>
            <button
                // onClick={toggleTheme}
                className="border border-zinc-300 dark:border-zinc-600 rounded-3xl py-2 px-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 flex items-center gap-2 "
            >
                Theme
            </button>
        </nav>
    );
}
