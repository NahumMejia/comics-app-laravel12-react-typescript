import AppLayout from '@/layouts/app-layout';
import { Comic } from '@/types';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface FavoritesProps {
    favorites: {
        data: Comic[];
    };
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
    return (
        <AppLayout>
            <Head title="Favorites" />
            <div className="mx-auto py-8 container">
                <h1 className="mb-6 font-bold text-3xl">Your Favorite Comics</h1>
                {favorites.data.length > 0 ? (
                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {favorites.data.map((comic) => (
                            <div key={comic.id} className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
                                <Link href={`/comics/${comic.slug}`}>
                                    <img src={comic.cover} alt={comic.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h2 className="font-semibold text-black dark:text-white text-lg">{comic.title}</h2>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{comic.category?.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">You have no favorite comics yet.</p>
                )}
            </div>
        </AppLayout>
    );
};

export default Favorites;
