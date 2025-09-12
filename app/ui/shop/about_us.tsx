import { AboutUs1, AboutUs2, AboutUs3, AboutUs4 } from "@/app/ui/images";
import { ReactNode } from "react";

interface AboutUsProps {
    children: ReactNode;
    title: string;
    subTitle: string;
    description: string;
    margin: string;
}

export function AboutUsCard({children, title, subTitle, description, margin: margin = ''}: AboutUsProps) {
    return (
        <div className={`flex flex-col w-full h-full items-center justify-center ${margin}`}>
            <div className="flex w-full h-full items-center justify-center 
                rounded-3xl border border-gray-100 bg-[#F8F8F8] py-6">
                <div className="flex items-center justify-center h-40">
                    {children}
                </div>
            </div>
            <div>
                <div className="flex w-full flex-row mt-8 mb-2">
                    <p className="font-bold text-2xl mr-2">
                        {title}
                    </p>
                    <p className="font-bold text-xl text-gray-300">
                        {subTitle}
                    </p>
                </div>
                <p className="text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    )
}