import { Skeleton } from "@/components/ui/skeleton";

export default function OrbitingCirclesToolsSkeleton() {
    return (
        <div className="flex items-center justify-center flex-1 pt-8">
            <Skeleton className="relative hidden rounded-full size-12 right-4 top-8 sm:block" />
            <Skeleton className="rounded-full size-60" />
            <Skeleton className="relative hidden rounded-full size-12 left-4 bottom-8 sm:block" />
        </div>
    );
}
