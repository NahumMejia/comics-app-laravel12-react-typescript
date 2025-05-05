import AppLayout from '@/layouts/app-layout';
import { Comic, type BreadcrumbItem } from '@/types';
import { Button } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
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
    console.log(comic.characters);
    return (
        <AppLayout breadcrumbs={breadcrumbs.map((b) => (b.title === 'Comics' ? b : { ...b, title: comic.title, href: `/${comic.slug}` }))}>
            <Head title={comic.title} />
            <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-black dark:text-slate-200">
                {/* Hero Section */}
                <div className="relative h-80 overflow-hidden md:h-screen">
                    {comic.pages.length > 0 && (
                        <div className="absolute inset-0">
                            <img
                                src={comic.pages[0].url}
                                alt={comic.title}
                                className="h-full w-full object-cover opacity-20"
                                onLoad={handleImageLoad}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-black dark:via-black/70" />
                        </div>
                    )}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div className="max-w-4xl">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl dark:text-white">
                                {comic.title}
                            </h1>
                            <div className="mb-6 flex flex-wrap justify-center gap-3">
                                <Button className="flex transform items-center space-x-2 rounded-md border border-zinc-300 bg-zinc-200 px-6 py-3 text-black shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-white dark:hover:bg-zinc-800">
                                    <Heart size={20} className="text-red-700" />
                                    <span>Favorite</span>
                                </Button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-slate-400">
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
                    <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-8">
                    {/* Synopsis Section */}
                    <section id="synopsis" className="group mb-12">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="flex items-center text-2xl font-medium md:text-3xl">
                                <Book className="mr-3 text-zinc-500" size={24} />
                                <span className="relative">Synopsis</span>
                            </h2>
                        </div>

                        <div className="rounded-lg border border-zinc-300 bg-zinc-100 p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                            <p
                                className="wysiwyg-output mx-auto mb-8 line-clamp-3 max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-slate-300"
                                dangerouslySetInnerHTML={{ __html: comic.synopsis }}
                            ></p>
                        </div>
                    </section>
                    {/* Comic Pages Section */}
                    <section id="pages" className="mb-16">
                        <h2 className="group mb-6 flex items-center text-2xl font-medium md:text-3xl">
                            <Eye className="mr-3 text-zinc-500" size={24} />
                            <span className="relative">
                                Comic Pages
                                <span className="absolute -bottom-1 left-0 w-0 bg-zinc-500"></span>
                            </span>
                        </h2>

                        <div className="space-y-8">
                            {comic.pages.map((page, index) => (
                                <div key={index} className="overflow-hidden border bg-zinc-100 shadow-xl hover:shadow-2xl dark:bg-zinc-900">
                                    <img
                                        src={page.url}
                                        alt={page.name || `Comic page ${index + 1}`}
                                        className="h-auto w-full"
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
                        className="mt-16 rounded-lg border border-zinc-300 bg-zinc-100 p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <h2 className="group mb-8 flex items-center text-2xl font-medium md:text-3xl">
                            <Tag className="mr-3 text-zinc-500" size={24} />
                            <span className="relative">
                                Comic Information
                                <span className="absolute -bottom-1 left-0 w-0 bg-zinc-500"></span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Category Section */}
                            <div className="rounded-lg border border-zinc-300 bg-zinc-200 p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                                <h3 className="mb-4 flex items-center border-b border-zinc-300 pb-2 text-xl font-medium dark:border-zinc-800">
                                    <Tag className="mr-2 text-zinc-500" size={20} /> Category
                                </h3>
                                <div className="inline-block rounded-md border border-zinc-300 bg-zinc-100 px-4 py-2 text-lg text-black hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                                    {comic.category.name}
                                </div>
                            </div>

                            {/* Tags Section */}
                            <div className="rounded-lg border border-zinc-300 bg-zinc-200 p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                                <h3 className="mb-4 flex items-center border-b border-zinc-300 pb-2 text-xl font-medium dark:border-zinc-800">
                                    <Tag className="mr-2 text-zinc-500" size={20} /> Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {comic.tags.map((tag) => (
                                        <Link
                                            href={`/tags/${tag.slug}`}
                                            key={tag.id}
                                            className="text-md rounded-md border border-zinc-300 bg-zinc-100 px-4 py-2 text-black hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                                        >
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Characters Section */}
                            <div className="rounded-lg border border-zinc-300 bg-zinc-200 p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                                <h3 className="mb-4 flex items-center border-b border-zinc-300 pb-2 text-xl font-medium dark:border-zinc-800">
                                    <UserPlus className="mr-2 text-zinc-500" size={20} /> Characters
                                </h3>
                                <div className="space-y-2">
                                    {comic.characters.map((character) => (
                                        <Link
                                            key={character.id}
                                            href={`/characters/${character.slug}`}
                                            className="flex cursor-pointer items-center justify-between rounded-md border border-zinc-300 bg-zinc-100 px-3 py-2 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                                        >
                                            <span>{character.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Authors Section */}
                            <div className="rounded-lg border border-zinc-300 bg-zinc-200 p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                                <h3 className="mb-4 flex items-center border-b border-zinc-300 pb-2 text-xl font-medium dark:border-zinc-800">
                                    <Users className="mr-2 text-zinc-500" size={20} /> Authors
                                </h3>
                                <div className="space-y-3">
                                    {comic.authors.map((author) => (
                                        <div
                                            key={author.id}
                                            className="flex transform cursor-pointer items-center rounded-md border border-zinc-300 bg-zinc-100 p-3 transition-all hover:scale-[1.02] hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                                        >
                                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-black">
                                                {author.name.charAt(0)}
                                            </div>
                                            <div>
                                                <span className="block font-medium">{author.name}</span>
                                            </div>
                                        </div>
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
                        className="fixed right-8 bottom-8 z-50 rounded-full border border-zinc-300 bg-zinc-200 p-3 text-black shadow-lg transition-all hover:scale-110 hover:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                    >
                        <ChevronUp size={20} />
                    </Button>
                )}
            </div>
        </AppLayout>
    );
}

export default Show;
