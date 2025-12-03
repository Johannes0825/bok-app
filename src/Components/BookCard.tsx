"use client";

import { useMyBooks } from "@/context/MyBooksContext";
import type { Result } from "@/types/bookType";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BookCardProps {
    book: Result;
    showDelete?: boolean;
}

export default function BookCard({ book, showDelete = false }: BookCardProps) {
    const { title, authors, formats } = book;
    const router = useRouter();
    const { removeBook } = useMyBooks();

    const imageSrc = formats["image/jpeg"];
    const titleSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        sessionStorage.setItem("currentBook", JSON.stringify(book));
        router.push(`/books/${titleSlug}`);
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeBook(book.id);
    };

    return (
        <div
            onClick={handleClick}
            className="w-full h-full p-6 hover:cursor-pointer hover:scale-102 transition ease-in-out bg-card-bg text-card-fg border border-card-border hover:bg-card-border rounded-2xl flex justify-between flex-col"
        >
            <div className="flex flex-col items-center text-center ">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={200}
                        height={300}
                        className="h-[300px] w-auto object-contain"
                    />
                )}
                <h1 className="text-2xl font-bold py-3 ">{title}</h1>
                <p className="text-card-fg opacity-80">
                    {authors.map((a) => a.name)}
                </p>
            </div>
            {showDelete && (
                <button
                    onClick={handleDelete}
                    className="border mt-2 border-accent text-accent rounded-xl py-2 px-4 transition hover:cursor-pointer duration-125 ease-in-out hover:bg-accent hover:text-white"
                >
                    Delete
                </button>
            )}
        </div>
    );
}
