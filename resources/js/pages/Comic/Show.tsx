import AppLayout from '@/layouts/app-layout';
import { Comic, type BreadcrumbItem } from '@/types';
import { Button } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { Book, ChevronUp, Eye, Heart, Tag, UserPlus, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Comics',
        href: '/comics',
    },
];

function Show({ comic }: { comic: Comic }) {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [currentImageLoaded, setCurrentImageLoaded] = useState(0);
    const [totalImagesLoaded, setTotalImagesLoaded] = useState(0);
    const [isFavorited, setIsFavorited] = useState(comic.isFavorited || false);

    const toggleFavorite = async () => {
        try {
            const response = await axios.post(route('comics.favorite', comic.id));
            setIsFavorited(response.data.isFavorited);
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTotalImagesLoaded(comic.pages.length);
    }, [comic.pages.length]);

    const handleImageLoad = () => {
        setCurrentImageLoaded((prev) => prev + 1);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs.map((b) => (b.title === 'Comics' ? b : { ...b, title: comic.title, href: `/${comic.slug}` }))}>
            <Head title={comic.title} />
            <div className="bg-white dark:bg-black min-h-screen text-neutral-900 dark:text-slate-200 transition-colors duration-300">
                {/* Hero Section */}
                <div className="relative h-80 md:h-screen overflow-hidden">
                    {comic.pages.length > 0 && (
                        <div className="absolute inset-0">
                            <img
                                src={comic.pages[0].url}
                                alt={comic.title}
                                className="opacity-20 w-full h-full object-cover"
                                onLoad={handleImageLoad}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/70 dark:via-black/70 to-transparent" />
                        </div>
                    )}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                        <div className="max-w-4xl">
                            <h1 className="mb-4 font-bold text-black dark:text-white text-4xl md:text-6xl lg:text-7xl tracking-tight">
                                {comic.title}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-3 mb-6">
                                <Button
                                    onClick={toggleFavorite}
                                    className={`flex items-center space-x-2 ${
                                        isFavorited ? 'bg-red-500 hover:bg-red-600' : 'bg-zinc-200 hover:bg-zinc-300'
                                    } transform rounded-md border border-zinc-300 px-6 py-3 text-black shadow-lg backdrop-blur transition-all hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-white dark:hover:bg-zinc-800`}
                                >
                                    <Heart size={20} className={isFavorited ? 'text-white' : 'text-red-700'} />
                                    <span>{isFavorited ? 'Unfavorite' : 'Favorite'}</span>
                                </Button>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-6 text-neutral-600 dark:text-slate-400 text-sm">
                                <div className="flex items-center gap-1">
                                    <Book size={16} />
                                    <span>{comic.pages.length} Pages</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Tag size={16} />
                                    <span>{comic.category.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-0 left-0 absolute bg-gradient-to-t from-white dark:from-black to-transparent w-full h-24"></div>
                </div>

                <div className="relative mx-auto px-4 max-w-6xl">
                    {/* Comic Pages Section */}
                    <section id="pages" className="mb-16">
                        <h2 className="group flex items-center mb-6 font-medium text-2xl md:text-3xl">
                            <Eye className="mr-3 text-zinc-500" size={24} />
                            <span className="relative">
                                Comic Pages
                                <span className="-bottom-1 left-0 absolute bg-zinc-500 w-0"></span>
                            </span>
                        </h2>

                        <div className="space-y-8">
                            {comic.pages.map((page, index) => (
                                <div key={index} className="bg-zinc-100 dark:bg-zinc-900 shadow-xl hover:shadow-2xl border overflow-hidden">
                                    <img
                                        src={page.url}
                                        alt={page.name || `Comic page ${index + 1}`}
                                        className="w-full h-auto"
                                        onLoad={handleImageLoad}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer Info Section */}
                    <section
                        id="info"
                        className="bg-zinc-100 dark:bg-zinc-900 shadow-xl mt-16 p-8 border border-zinc-300 dark:border-zinc-800 rounded-lg"
                    >
                        <h2 className="group flex items-center mb-8 font-medium text-2xl md:text-3xl">
                            <Tag className="mr-3 text-zinc-500" size={24} />
                            <span className="relative">
                                Comic Information
                                <span className="-bottom-1 left-0 absolute bg-zinc-500 w-0"></span>
                            </span>
                        </h2>

                        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {/* Category Section */}
                            <div className="bg-zinc-200 dark:bg-zinc-950 shadow-lg p-6 border border-zinc-300 dark:border-zinc-800 rounded-lg">
                                <h3 className="flex items-center mb-4 pb-2 border-zinc-300 dark:border-zinc-800 border-b font-medium text-xl">
                                    <Tag className="mr-2 text-zinc-500" size={20} /> Category
                                </h3>
                                <div className="inline-block bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-4 py-2 border border-zinc-300 dark:border-zinc-800 rounded-md text-black dark:text-white text-lg">
                                    <Link
                                        preserveScroll
                                        href={`/categories/${comic.category.slug}`}
                                        className="flex items-center gap-2"
                                        key={comic.category.id}
                                    >
                                        {comic.category.name}
                                    </Link>
                                </div>
                            </div>

                            {/* Tags Section */}
                            <div className="bg-zinc-200 dark:bg-zinc-950 shadow-lg p-6 border border-zinc-300 dark:border-zinc-800 rounded-lg">
                                <h3 className="flex items-center mb-4 pb-2 border-zinc-300 dark:border-zinc-800 border-b font-medium text-xl">
                                    <Tag className="mr-2 text-zinc-500" size={20} /> Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {comic.tags.map((tag) => (
                                        <Link
                                            preserveScroll
                                            href={`/tags/${tag.slug}`}
                                            key={tag.id}
                                            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-4 py-2 border border-zinc-300 dark:border-zinc-800 rounded-md text-black text-md dark:text-white"
                                        >
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Characters Section */}
                            <div className="bg-zinc-200 dark:bg-zinc-950 shadow-lg p-6 border border-zinc-300 dark:border-zinc-800 rounded-lg">
                                <h3 className="flex items-center mb-4 pb-2 border-zinc-300 dark:border-zinc-800 border-b font-medium text-xl">
                                    <UserPlus className="mr-2 text-zinc-500" size={20} /> Characters
                                </h3>
                                <div className="space-y-2">
                                    {comic.characters.map((character) => (
                                        <Link
                                            preserveScroll
                                            key={character.id}
                                            href={`/characters/${character.slug}`}
                                            className="flex justify-between items-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-3 py-2 border border-zinc-300 dark:border-zinc-800 rounded-md transition-colors cursor-pointer"
                                        >
                                            <span>{character.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Authors Section */}
                            <div className="bg-zinc-200 dark:bg-zinc-950 shadow-lg p-6 border border-zinc-300 dark:border-zinc-800 rounded-lg">
                                <h3 className="flex items-center mb-4 pb-2 border-zinc-300 dark:border-zinc-800 border-b font-medium text-xl">
                                    <Users className="mr-2 text-zinc-500" size={20} /> Authors
                                </h3>
                                <div className="space-y-3">
                                    {comic.authors.map((author) => (
                                        <Link
                                            preserveScroll
                                            key={author.id}
                                            className="flex items-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 p-3 border border-zinc-300 dark:border-zinc-800 rounded-md hover:scale-[1.02] transition-all cursor-pointer transform"
                                            href={`/authors/${author.slug}`}
                                        >
                                            <div className="flex justify-center items-center bg-zinc-300 dark:bg-black mr-3 border border-zinc-400 dark:border-zinc-700 rounded-full w-10 h-10">
                                                {author.name.charAt(0)}
                                            </div>
                                            <div>
                                                <span className="block font-medium">{author.name}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Back to Top Button */}
                {showBackToTop && (
                    <Button
                        onClick={scrollToTop}
                        className="right-8 bottom-8 z-50 fixed bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 shadow-lg p-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-black dark:text-white hover:scale-110 transition-all"
                    >
                        <ChevronUp size={20} />
                    </Button>
                )}
            </div>
        </AppLayout>
    );
}

export default Show;
