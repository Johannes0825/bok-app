"use client";
import { useMyBooks } from "@/context/MyBooksContext";
import type { Result } from "@/types/bookType";

interface BookCardProps {
    book: Result;
}

export default function AddBookButton({ book }: BookCardProps) {
    const { addBook } = useMyBooks();

    return (
        <button
            className="m-5 border border-red-400 rounded-3xl py-2 px-4 transition hover:cursor-pointer  duration-125 ease-in-out hover:bg-red-400 hover:text-white"
            onClick={() => addBook(book)}
        >
            Add to my books
        </button>
    );
}
