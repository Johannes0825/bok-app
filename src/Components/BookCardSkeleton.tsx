export default function BookCardSkeleton() {
    return (
        <div className="w-full flex flex-col items-center text-center p-6 bg-zinc-800 border border-zinc-700 rounded-2xl animate-pulse">
            <div className="h-[300px] aspect-2/3 bg-zinc-700 rounded-lg"></div>
            <div className="h-8 w-full bg-zinc-700 rounded mt-3"></div>
            <div className="h-5 w-2/3 bg-zinc-700 rounded mt-2"></div>
        </div>
    );
}
