import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Heart, MessageCircleMore, Search } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a] min-h-screen">
                <main className="flex flex-col flex-1 justify-center items-center px-6 py-12">
                    <div className="mb-12 w-full max-w-3xl text-center">
                        <div className="inline-block mb-6">
                            <h1 className="font-bold text-[#1b1b18] dark:text-[#EDEDEC] text-4xl md:text-5xl tracking-tight">
                                Elementor Comics
                            </h1>
                        </div>
                        <p className="mx-auto max-w-lg text-[#555] dark:text-[#aaa] text-lg md:text-xl">
                            Welcome to Elementor Comics, where you can see your favorite comics.
                        </p>
                    </div>

                    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-12 w-full max-w-4xl">
                        {[
                            {
                                title: 'Search',
                                description: 'Explore the best comics and find your favorite one.',
                                icon: Search,
                            },
                            {
                                title: 'Comment',
                                description: 'Share your opinion with the community.',
                                icon: MessageCircleMore,
                            },
                            {
                                title: 'Like',
                                description: 'Save your favorite comics.',
                                icon: Heart,
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white dark:bg-[#111] shadow-sm p-6 border border-[#eee] dark:border-[#222] rounded-lg">
                                <div className="mb-2 text-[#1b1b18] dark:text-[#EDEDEC] text-xl">
                                    <feature.icon/>
                                </div>
                                <h3 className="mb-1 font-medium text-[#1b1b18] dark:text-[#EDEDEC] text-lg">{feature.title}</h3>
                                <p className="text-[#555] dark:text-[#aaa] text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-16 w-full max-w-4xl">
                        <div className="relative bg-[#f4f4f2] dark:bg-[#1a1a1a] shadow-md p-8 border border-[#ddd] dark:border-[#333] rounded-lg overflow-hidden text-[#1b1b18] dark:text-white">
                        <div className="top-0 right-0 absolute opacity-10 dark:opacity-5 mt-6 pr-12 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1b1b18] dark:text-white">
                                <path fill="currentColor" d="M11 3.925L8.925 6H6v2.925L3.925 11L6 13.075V16h2.925L11 18.075l2.5-2.5l4.2 2.125l-2.15-4.175L18.075 11L16 8.925V6h-2.925zm0-1.402l2.483 2.483h3.51v3.51L19.478 11l-2.708 2.708l2.49 4.861l-.69.69l-4.861-2.49L11 19.477l-2.483-2.483h-3.51v-3.51L2.522 11l2.483-2.483v-3.51h3.51zM11 11" />
                            </svg>
                        </div>
                            <div className="z-10 relative">
                                <h2 className="mb-3 font-bold text-2xl md:text-3xl">
                                    Ready to Start Your Comic Journey?
                                </h2>
                                <p className="opacity-90 mb-6 max-w-lg">
                                    Join thousands of comic enthusiasts and discover your next favorite series today.
                                </p>
                                <Link
                                    href={auth.user ? route('dashboard') : route('register')}
                                    className="inline-block bg-[#1b1b18] dark:bg-white hover:opacity-90 shadow-md px-6 py-2.5 rounded-md font-medium text-white dark:text-[#1b1b18] transition"
                                >
                                    {auth.user ? 'Go to Dashboard' : 'Get Started'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}
