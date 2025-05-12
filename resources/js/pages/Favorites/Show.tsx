import ComicItem from '@/components/App/ComicItem';
import AppLayout from '@/layouts/app-layout';
import { Comic } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Heart } from 'lucide-react';

function Show({ favorites }: { favorites: { data: Comic[] } }) {
    return (
        <AppLayout>
            <Head title="Favorites" />

            <div className="bg-white dark:bg-black min-h-screen text-neutral-900 dark:text-slate-200 transition-colors duration-300">
                {/* Header */}
                <div className="mt-7 mb-8 px-4 text-center">
                    <h1 className="font-bold text-black dark:text-white text-4xl tracking-tight">Favorite Comics</h1>
                    <div className="flex justify-center items-center gap-2 mt-2 text-neutral-600 dark:text-slate-400">
                        <Heart size={22} className="text-red-700" />
                        <span className="text-lg">{favorites.data.length} Comics</span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative mx-auto px-4 max-w-6xl">
                    {favorites.data.length > 0 ? (
                        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {favorites.data.map((comic) => (
                                <ComicItem key={comic.id} comic={comic} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-zinc-100 dark:bg-zinc-900/50 shadow-xl p-12 border border-zinc-300 dark:border-zinc-800 rounded-lg text-center">
                            <div className="flex justify-center mx-auto mb-6">
                                <Heart size={64} className="text-zinc-400 dark:text-zinc-600" />
                            </div>
                            <h2 className="mb-4 font-medium text-black dark:text-white text-2xl">No Favorite Comics Yet</h2>
                            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                                Start adding comics to your favorites collection by clicking the heart icon on comic pages.
                            </p>
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center space-x-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 shadow-lg px-6 py-3 rounded-md text-black dark:text-white hover:scale-105 transition-all transform"
                            >
                                Browse Comics
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

export default Show;
