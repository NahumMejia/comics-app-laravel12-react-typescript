import ComicItem from '@/components/App/ComicItem';
import AppLayout from '@/layouts/app-layout';
import { Comic, PaginationProps, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ comics }: { comics: PaginationProps<Comic> }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="bg-background flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {comics.data.map((comic) => (
                        <ComicItem comic={comic} key={comic.id} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
