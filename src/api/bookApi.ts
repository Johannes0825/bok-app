const BASE_URL = "https://gutendex.com/books";

export const fetchBooks = async (search?: string, topic?: string) => {
    try {
        let url = BASE_URL;
        const params = new URLSearchParams();

        if (search) {
            params.append("search", search);
        }

        if (topic && topic !== "all") {
            params.append("topic", topic.toLowerCase());
        }

        if (params.toString()) {
            url += `?${params.toString()}`;
        }

        console.log(url);

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    } catch (err) {
        console.error(err, Error);
    }
};
