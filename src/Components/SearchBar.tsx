"use client";

import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string, category: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        "Fiction",
        "Mystery",
        "Thriller",
        "Romance",
        "Fantasy",
        "Morality",
        "Society",
        "Power",
        "Justice",
        "Adventure",
        "Tragedy",
        "War",
        "Philosophy",
    ];

    const handleSearch = () => {
        onSearch(searchQuery, selectedCategory);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex justify-center gap-4 py-10">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search books..."
                className="px-4 py-2 border border-card-border rounded-lg bg-card-bg text-card-fg"
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 hover:cursor-pointer py-2 border border-card-border rounded-lg bg-card-bg text-card-fg"
            >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button
                onClick={handleSearch}
                className="border border-red-400 rounded-xl py-2 px-4 transition hover:cursor-pointer  duration-125 ease-in-out hover:bg-red-400 hover:text-white"
            >
                Search
            </button>
        </div>
    );
}
