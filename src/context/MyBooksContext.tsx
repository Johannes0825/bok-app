"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Result } from "@/types/bookType";
import useLocalStorage from "@/hooks/useLocalStorage";

type MyBookContextType = {
    myBooks: Result[];
    addBook: (item: Result) => void;
    removeBook: (id: number) => void;
};

const MyBookContext = createContext<MyBookContextType | undefined>(undefined);

export const useMyBooks = () => {
    const context = useContext(MyBookContext);
    if (!context) {
        throw new Error("UseMyBooks must be used within a provider");
    }

    return context;
};

export default function MyBooksProvider({ children }: { children: ReactNode }) {
    const [myBooks, setMyBooks] = useLocalStorage<Result[]>("my books");

    const addBook = (item: Result) => {
        setMyBooks((prev) => {
            const exist = prev.some((i) => i.id === item.id);

            if (exist) {
                alert("Book already stored");
                return prev;
            }

            return [...prev, item];
        });
    };

    const removeBook = (id: number) => {
        setMyBooks((prev) => prev.filter((i) => id !== i.id));
    };

    const providerObject = { myBooks, addBook, removeBook };

    return (
        <MyBookContext.Provider value={providerObject}>
            {children}
        </MyBookContext.Provider>
    );
}
