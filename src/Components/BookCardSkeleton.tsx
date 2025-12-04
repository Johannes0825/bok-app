export default function BookCardSkeleton() {
    return (
        <div className="w-full h-full p-6 bg-card-bg text-card-fg border border-card-border rounded-2xl flex justify-between flex-col animate-pulse">
            <div className="h-[300px] w-full bg-card-border rounded-lg"></div>
            <div className="h-8 w-full bg-card-border rounded mt-3"></div>
            <div className="h-5 w-2/3 bg-card-border rounded mt-2"></div>
        </div>
    );
}
