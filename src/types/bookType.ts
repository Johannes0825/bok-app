export type BookType = {
    count: number;
    next: string;
    previous: string;
    results: Result[];
};

export type Result = {
    id: number;
    title: string;
    authors: Author[];
    summaries: Array<string>;
    subjects: Array<string>;
    languages: Array<string>;
    formats: {
        [key: string]: string | undefined;
    };
};

type Author = {
    name: string;
    birth_year: number;
    death_year: number;
};
