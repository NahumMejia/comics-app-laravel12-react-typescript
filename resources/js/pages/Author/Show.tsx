import ComicItem from '@/components/App/ComicItem';
import AppLayout from '@/layouts/app-layout';
import { Comic } from '@/types';
import { Head } from '@inertiajs/react';

function Show({ author, comics }: { author: { id: number; name: string; slug: string }; comics: Comic[] }) {
    return (
        <AppLayout>
            <Head title={`Author: ${author.name}`} />
            <section className="relative flex flex-col flex-1 gap-8 bg-background dark:bg-gradient-to-b shadow-md p-8 rounded-2xl">
                <div className="z-10 relative mb-2">
                    <h1 className="font-extrabold text-foreground dark:text-white text-4xl tracking-tight">
                        Comics written by <span className="text-primary">"{author.name}"</span>
                    </h1>
                </div>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {comics.map((comic) => (
                        <ComicItem key={comic.id} comic={comic} />
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}

export default Show;
