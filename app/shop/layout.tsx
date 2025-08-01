import TopNav from "@/app/ui/shop/topnav";

export const experimental_ppr = true;
export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="overflow-hidden md:overflow-y-auto">
            <div className="flex flex-col h-screen">
                <TopNav/>
                <div className="flex flex-col h-screen w-full mt-10">{children}</div>
            </div>

        </div>
    );
}