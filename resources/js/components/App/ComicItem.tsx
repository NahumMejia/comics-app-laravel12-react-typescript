import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Comic } from '@/types';
import { Link } from '@inertiajs/react';

function ComicItem({ comic }: { comic: Comic }) {
    return (
        <Card className="dark:bg-muted/30 hover:shadow-md dark:hover:shadow overflow-hidden transition-all duration-300">
            <Link href={route('comics.show', comic.slug)}>
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                        src={comic.cover}
                        alt={comic.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>

            <CardHeader className="pt-3 pb-2">
                <Link href={route('comics.show', comic.slug)}>
                    <h2 className="font-semibold hover:text-primary dark:text-white text-base line-clamp-2 leading-tight transition-colors duration-200">
                        {comic.title}
                    </h2>
                </Link>
            </CardHeader>

            <CardContent className="pt-0 pb-3">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <span>in</span>
                    {comic.category && (
                        <Link href="/">
                            <Badge variant="outline" className="px-2 py-0.5 dark:border-primary dark:text-primary text-xs hover:underline">
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
