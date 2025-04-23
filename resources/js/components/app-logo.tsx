import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex justify-center items-center bg-sidebar-primary rounded-md size-8 aspect-square text-sidebar-primary-foreground">
                <AppLogoIcon className="fill-current size-5 text-white dark:text-black" />
            </div>
            <div className="flex-1 grid ml-1 text-sm text-left">
                <span className="mb-0.5 lg:p-2 font-semibold truncate leading-none">Elementor</span>
            </div>
        </>
    );
}
