import { Card, CardHeader } from '@/components/ui/card';
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

            <CardHeader className="items-center pt-3 pb-2">
                <Link href={route('comics.show', comic.slug)}>
                    <h2 className="font-semibold hover:text-primary dark:text-white text-base line-clamp-2 leading-tight transition-colors duration-200">
                        {comic.title}
                    </h2>
                </Link>
            </CardHeader>
        </Card>
    );
}

export default ComicItem;
