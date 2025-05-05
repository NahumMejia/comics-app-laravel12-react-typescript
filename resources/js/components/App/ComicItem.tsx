import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Comic } from '@/types';
import { Link } from '@inertiajs/react';

function ComicItem({ comic }: { comic: Comic }) {
    return (
        <Card className="dark:bg-muted/30 overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow">
            <Link href={route('comics.show', comic.slug)}>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                        src={comic.cover}
                        alt={comic.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </Link>

            <CardHeader className="pt-3 pb-2">
                <Link href={route('comics.show', comic.slug)}>
                    <h2 className="hover:text-primary line-clamp-2 text-base leading-tight font-semibold transition-colors duration-200 dark:text-white">
                        {comic.title}
                    </h2>
                </Link>
            </CardHeader>

            <CardContent className="pt-0 pb-3">
                <div className="text-muted-foreground flex items-center gap-1 text-sm">
                    <span>in</span>
                    {comic.category && (
                        <Link href="/">
                            <Badge variant="outline" className="dark:border-primary dark:text-primary px-2 py-0.5 text-xs hover:underline">
                                {comic.category.name}
                            </Badge>
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

export default ComicItem;
