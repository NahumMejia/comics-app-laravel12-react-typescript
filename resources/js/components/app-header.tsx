import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, Heart, LayoutGrid, LogIn, Menu, Search, UserPlus } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';

const mainNavItems: NavItem[] = [
    {
        title: 'Home Page',
        href: '/',
        icon: BookOpen,
    },
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Favorites',
        href: '/favorites',
        icon: Heart,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository for this project',
        href: 'https://github.com/NahumMejia/comics-app-laravel12-react-typescript',
        icon: Folder,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();

    return (
        <>
            <div className="border-sidebar-border/80 border-b w-full overflow-x-hidden">
                <div className="flex justify-between items-center mx-auto px-2 sm:px-4 w-full max-w-7xl h-16 overflow-x-hidden">
                    <div className="flex items-center">
                        {/* Mobile Menu */}
                        <div className="lg:hidden mr-1">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="w-8 h-8">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="flex flex-col justify-between items-stretch bg-sidebar w-64 min-w-0 h-full overflow-hidden"
                                >
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <SheetHeader className="flex justify-start text-left">
                                        <AppLogoIcon className="fill-current w-6 h-6 text-black dark:text-white" />
                                    </SheetHeader>
                                    <div className="flex flex-col flex-1 space-y-4 p-4 h-full overflow-y-auto">
                                        {auth.user ? (
                                            <div className="flex flex-col justify-between h-full text-sm">
                                                <div className="flex flex-col space-y-4">
                                                    {mainNavItems.map((item) => (
                                                        <Link key={item.title} href={item.href} className="flex items-center space-x-2 font-medium">
                                                            {item.icon && <Icon iconNode={item.icon} className="w-5 h-5" />}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col space-y-4 mt-6">
                                                    {rightNavItems.map((item) => (
                                                        <a
                                                            key={item.title}
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 font-medium"
                                                        >
                                                            {item.icon && <Icon iconNode={item.icon} className="w-5 h-5" />}
                                                            <span>{item.title}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col space-y-6 py-4">
                                                <div className="px-4 text-center">
                                                    <h3 className="mb-2 font-semibold text-lg">Welcome!</h3>
                                                    <p className="mb-6 text-neutral-600 dark:text-neutral-400 text-sm">
                                                        Please sign in to access all content.
                                                    </p>
                                                    <div className="flex flex-col space-y-3">
                                                        <Link
                                                            href={route('login')}
                                                            className="flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-2 rounded-md font-medium text-neutral-800 dark:text-neutral-100 transition-colors"
                                                        >
                                                            <LogIn className="mr-2 w-4 h-4" />
                                                            Sign In
                                                        </Link>
                                                        <Link
                                                            href={route('register')}
                                                            className="flex justify-center items-center bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 px-4 py-2 rounded-md font-medium text-white dark:text-black transition-colors"
                                                        >
                                                            <UserPlus className="mr-2 w-4 h-4" />
                                                            Create Account
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="pt-4 border-neutral-200 dark:border-neutral-700 border-t">
                                                    <p className="text-neutral-500 dark:text-neutral-400 text-xs text-center">
                                                        You can still browse some content without an account
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <Link href="/" prefetch className="flex items-center">
                            <AppLogo />
                        </Link>

                        {/* Desktop Navigation */}
                        {auth.user && (
                            <div className="hidden lg:flex items-center ml-4 h-full">
                                <NavigationMenu className="flex items-stretch h-full">
                                    <NavigationMenuList className="flex items-stretch space-x-1 md:space-x-2 h-full">
                                        {mainNavItems.map((item, index) => (
                                            <NavigationMenuItem key={index} className="relative flex items-center h-full">
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        page.url === item.href && activeItemStyles,
                                                        'h-9 cursor-pointer px-2 md:px-3',
                                                    )}
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="mr-1 md:mr-2 w-4 h-4" />}
                                                    <span className="hidden sm:inline">{item.title}</span>
                                                </Link>
                                                {page.url === item.href && (
                                                    <div className="bottom-0 left-0 absolute bg-black dark:bg-white w-full h-0.5 translate-y-px"></div>
                                                )}
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="group mr-1 sm:mr-2 w-8 h-8">
                            <Search className="opacity-80 group-hover:opacity-100 w-4 sm:w-5 h-4 sm:h-5" />
                        </Button>

                        <div className="hidden md:flex mr-2">
                            {rightNavItems.map((item) => (
                                <TooltipProvider key={item.title} delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex justify-center items-center bg-transparent hover:bg-accent disabled:opacity-50 ml-1 p-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-8 sm:w-9 h-8 sm:h-9 font-medium text-sm transition-colors text-accent-foreground hover:text-accent-foreground disabled:pointer-events-none"
                                            >
                                                <span className="sr-only">{item.title}</span>
                                                {item.icon && (
                                                    <Icon iconNode={item.icon} className="opacity-80 group-hover:opacity-100 w-4 sm:w-5 h-4 sm:h-5" />
                                                )}
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>

                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="p-1 rounded-full w-8 sm:w-10 h-8 sm:h-10">
                                        <Avatar className="rounded-full w-6 sm:w-8 h-6 sm:h-8 overflow-hidden">
                                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                            <AvatarFallback className="bg-neutral-200 dark:bg-neutral-700 rounded-lg text-black dark:text-white text-xs sm:text-sm">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <UserMenuContent user={auth.user} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex items-center">
                                <Link
                                    href={route('login')}
                                    className="flex items-center bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 mr-2 px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 rounded-md font-medium text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm whitespace-nowrap transition-colors"
                                >
                                    <LogIn className="mr-1.5 w-3.5 h-3.5" />
                                    Log In
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="flex items-center bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 px-3 py-1.5 rounded-md font-medium text-white dark:text-black text-xs sm:text-sm whitespace-nowrap transition-colors"
                                >
                                    <UserPlus className="mr-1.5 w-3.5 h-3.5" />
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {breadcrumbs.length > 1 && (
                <div className="flex border-sidebar-border/70 border-b w-full">
                    <div className="flex justify-start items-center mx-auto px-2 sm:px-4 w-full max-w-7xl h-10 sm:h-12 overflow-hidden text-neutral-500">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
