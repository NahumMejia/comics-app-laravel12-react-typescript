import ComicItem from '@/components/App/ComicItem';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Comic, PaginationProps } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({comics}:{comics:PaginationProps<Comic>}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="flex flex-col flex-1 gap-4 bg-background p-4 rounded-xl h-full">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                {comics.data.map((comic) => (
                    <ComicItem comic={comic} key={comic.id} />
                ))}
            </div>
        </div>
    </AppLayout>
    
    );
}
