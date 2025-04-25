import type { Comic } from "@/types";
import { Link } from "@inertiajs/react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

function ComicItem({ comic }: { comic: Comic }) {
    return (
        <Card className="hover:shadow-xl dark:hover:shadow-md overflow-hidden transition-all duration-300">
            <Link href={route("comics.show", comic.slug)}>
                <div className="relative w-full overflow-hidden">
                    <img
                        src={comic.cover}
                        alt={comic.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>

            <CardHeader className="pt-2 pb-1">
                <Link href={route("comics.show", comic.slug)}>
                    <h2 className="font-semibold hover:text-primary dark:text-white text-xl line-clamp-2 transition-colors duration-200">
                        {comic.title}
                    </h2>
                </Link>
            </CardHeader>

            <CardContent className="space-y-3 pt-0 pb-4">
                    <span className="mr-2">In</span>
                    <Link href="/">
                    {comic.category && (
                        <Badge
                            variant="outline"
                            className="px-2 py-1 dark:border-primary dark:text-primary text-xs hover:underline"
                        >
                            {comic.category.name}
                        </Badge>
                    )}
                    </Link>
            </CardContent>
        </Card>
    );
}
export default ComicItem;