'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { Cart } from "../images";

interface ProductTabProps {
    label: string;
    link: string;
}

export function ProductHeader() {
    return (
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full flex-row items-center justify-start mt-12">
            <div><Cart/></div>
            <p className="text-[40px] font-semibold py-3">구매</p>
          </div>
          <p className="text-3xl font-semibold">휴브알엔씨가 제공하는 신경심리 및 언어 검사 도구와 도서입니다.</p>
        </div>
    )
}

export default function ProductSheet() {
    return (
        <div className="flex w-full flex-col pt-20 gap-5">
            <ProductTab/>
            <ProductItem/>
        </div>
    )
}

export function ProductItem() {
    const items = [
        {name: '서울신경심리검사 2판 (SNSB-Ⅱ)', tag: 'SNSB-II', category: '신경심리'},
        {name: 'Item 2', tag: 'SNSB-C', category: '신경심리'},
        {name: 'Item 3', tag: 'SNSB-II & C', category: '신경심리'},
        {name: 'Item 4', tag: 'SNSB-II', category: '신경심리'},
        {name: 'Item 5', tag: 'SNSB-C', category: '신경심리'},
    ]
    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <Link href="" key={i}>
                        <div className="flex w-full border rounded-3xl items-center justify-center h-[288px] mb-3">
                            image
                        </div>
                        <p className="text-[11px] text-gray-300">{item.tag}</p>
                        <p className="font-semibold text-lg">{item.name}</p>
                        <div className="inline-flex text-xs text-gray-300 bg-gray-50 rounded-2xl px-3 py-2">{item.category}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export function ProductTab() {
    return (
        <div className="flex flex-row gap-2">
            <ProductTabButton label="신경심리" link="/products/neuro"/>
            <ProductTabButton label="언어" link="/products/lang"/>
            <ProductTabButton label="도서" link="/products/book"/>
        </div>
    )
}

export function ProductTabButton({ label, link }: ProductTabProps) {
        const pathName = usePathname();
        const active = pathName === link;

    return (
        <Link href={link}>
            <div className={`${active ? 'bg-warmGray-800 text-white' : 'bg-gray-100 text-gray-400'} 
                rounded-3xl px-[22px] py-[14px] font-semibold items-center`}>
                {label}
            </div>
        </Link>
    )
}