'use client';

import { ReactNode, isValidElement, cloneElement } from "react";
import Link from "next/link";
import { PrivacyIcon, RejectEmailIcon, TermsIcon } from "@/app/ui/policy/images";
import { usePathname } from 'next/navigation';
import Privacy from '@/public/icons/user_select.svg';

interface ToPolicyProps {
    children: ReactNode;
    label: string;
    link: string;
}

export function ToPolicy({children, label, link}: ToPolicyProps) {
    const pathName = usePathname();
    const active = pathName === link;

    return (
        <div className={`flex flex-row items-center justify-start h-12 w-[170px] pl-2 gap-1 rounded-xl
            hover:bg-blueGray-50 ${active ? 'bg-blue-50' : 'bg-white'}`}>
            <div>{children}</div>
            <Link href={link} className={`${active ? 'text-blue-400' : 'text-black'}`}>{label}</Link>
        </div>
    )
}

export default function PolicyNav() {
    return (
        <div className="flex flex-col items-start w-full h-full gap-[10px]">
            <p className="font-semibold text-lg px-3 pt-5 pb-4">이용안내</p>
            <ToPolicy link="/policy/privacy" label="개인정보처리방침"><Privacy/></ToPolicy>
            <ToPolicy link="/policy/terms" label="이용약관"><TermsIcon/></ToPolicy>
            <ToPolicy link="/policy/email-rejection" label="이메일무단수집거부"><RejectEmailIcon/></ToPolicy>
        </div>
    )
}