"use client";
import { useEffect, useState } from "react";
import { fetchBooks } from "../../api/bookApi";
import { BookType } from "@/types/bookType";
import BookCard from "@/Components/BookCard";
import BookCardSkeleton from "@/Components/BookCardSkeleton";
import NavBar from "@/Components/NavBar";
import SearchBar from "@/Components/SearchBar";

export default function Home() {
    const [books, setBooks] = useState<BookType | null>(null);
    const [loading, setLoading] = useState(true);

    const loadBooks = async (search?: string, category?: string) => {
        setLoading(true);
        const data = await fetchBooks(search, category);
        console.log(data);

        setBooks(data);
        setLoading(false);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleSearch = (query: string, category: string) => {
        loadBooks(query, category);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="flex min-h-screen items-center justify-center ">
                <main className="flex min-h-screen w-svw flex-col items-center justify-between py-6 px-16  sm:items-start">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center w-full">
                        {loading
                            ? Array.from({ length: 12 }).map((_, i) => (
                                  <BookCardSkeleton key={i} />
                              ))
                            : books?.results.map((book) => (
                                  <BookCard key={book.id} book={book} />
                              ))}
                    </div>
                </main>
            </div>
        </>
    );
}
