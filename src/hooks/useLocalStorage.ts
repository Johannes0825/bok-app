import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : [];
        } catch (err) {
            console.error(err);
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.error(err);
        }
    }, [key, value]);

    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
