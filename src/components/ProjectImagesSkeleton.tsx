import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectImagesSkeleton() {
    return (
        <div className="flex items-center gap-4">
            <Skeleton className="rounded-full size-8" />
            <Skeleton className="h-28 rounded-md min-[840px]:h-32 lg:h-36 hidden md:w-44 min-[840px]:w-52 sm:block sm:w-20 lg:w-60" />
            <Skeleton className="h-28 rounded-md min-[840px]:h-32 lg:h-36 w-48 md:w-44 min-[840px]:w-52 lg:w-60" />
            <Skeleton className="h-28 rounded-md min-[840px]:h-32 lg:h-36 hidden md:w-44 sm:block min-[840px]:w-52 sm:w-20 lg:w-60" />
            <Skeleton className="rounded-full size-8" />
        </div>
    );
}
