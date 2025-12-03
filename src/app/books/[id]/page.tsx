"use client";

import Image from "next/image";
import Link from "next/link";
import type { Result } from "@/types/bookType";
import { useMyBooks } from "@/context/MyBooksContext";
import { useEffect, useState } from "react";

export default function BookDetailPage() {
    const { myBooks, addBook } = useMyBooks();
    const [book, setBook] = useState<Result | null>(null);

    useEffect(() => {
        const storedBook = sessionStorage.getItem("currentBook");
        if (storedBook) {
            setBook(JSON.parse(storedBook));
        }
    }, []);
    if (!book) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Book not found</h1>
                    <Link href="/home" className="text-red-500 hover:underline">
                        Go back to home
                    </Link>
                </div>
            </div>
        );
    }

    const imageSrc = book.formats["image/jpeg"];
    const isInMyBooks = myBooks.some((b) => b.id === book.id);

    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="max-w-6xl w-full bg-card-bg rounded-2xl p-8">
                <Link
                    href="/home"
                    className="text-red-400 hover:underline mb-6 inline-block"
                >
                    ← Back to books
                </Link>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-baseline">
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                alt={book.title}
                                width={300}
                                height={450}
                                className="h-auto w-full max-w-[500px] object-contain rounded-lg"
                            />
                        )}
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            {book.title}
                        </h1>
                        <p className="text-xl text-card-fg mb-6">
                            {book.authors.map((a) => a.name).join(", ")}
                        </p>
                        <button
                            className="mb-4 border border-red-400 rounded-3xl py-2 px-4 transition hover:cursor-pointer  duration-125 ease-in-out hover:bg-red-400 hover:text-white"
                            onClick={() => addBook(book)}
                            disabled={isInMyBooks}
                        >
                            {isInMyBooks
                                ? "Already in my books"
                                : "Add to my books"}
                        </button>
                        {book.summaries && book.summaries.length > 0 && (
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">
                                    Summary
                                </h2>
                                <p className="text-fg">{book.summaries[0]}</p>
                            </div>
                        )}
                        {book.subjects && book.subjects.length > 0 && (
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">
                                    Subjects
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {book.subjects.map((subject, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-bg rounded-full text-sm"
                                        >
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {book.languages && (
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">
                                    Languages
                                </h2>
                                <p className="text-navbar-fg">
                                    {book.languages.join(", ").toUpperCase()}
                                </p>
                            </div>
                        )}
                        {/* <button onClick={addBook}>Add to my books</button> */}
                        {/* <AddBookButton book={book} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
