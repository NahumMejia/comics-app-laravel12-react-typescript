import ComicItem from '@/components/App/ComicItem';
import AppLayout from '@/layouts/app-layout';
import { Comic } from '@/types';
import { Head } from '@inertiajs/react';

function Show({ tag, comics }: { tag: { id: number; name: string; slug: string }; comics: Comic[] }) {
    return (
        <AppLayout>
            <Head title={`Tag: ${tag.name}`} />
            <section className="bg-background relative flex flex-1 flex-col gap-8 rounded-2xl p-8 shadow-md dark:bg-gradient-to-b">
                <div className="relative z-10 mb-2">
                    <h1 className="text-foreground text-4xl font-extrabold tracking-tight dark:text-white">
                        Comics tagged with <span className="text-primary">"{tag.name}"</span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {comics.map((comic) => (
                        <ComicItem key={comic.id} comic={comic} />
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}

export default Show;
