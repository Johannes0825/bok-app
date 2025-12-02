"use client";

// import { Result } from "@/types/bookType";
// import { useEffect, useState } from "react";
import BookCard from "@/Components/BookCard";
import { useMyBooks } from "@/context/MyBooksContext";

export default function MyBooks() {
    // const [books, setBooks] = useState<Result | null>(null);
    const { myBooks } = useMyBooks();

    // useEffect(() => {
    //     const books = localStorage.getItem("my books");
    //     if (books) {
    //         setBooks(JSON.parse(books));
    //     }
    // }, []);

    return (
        <>
            <div className="flex min-h-screen items-center justify-center ">
                <main className="flex min-h-screen w-svw flex-col items-center justify-between py-6 px-16  sm:items-start">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center w-full">
                        {myBooks?.map((book) => (
                            <BookCard
                                showDelete={true}
                                key={book.id}
                                book={book}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
