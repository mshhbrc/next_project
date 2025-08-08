'use client';

import { useEffect } from 'react';
import { ErrorImg } from './ui/images';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {}, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-start">
            <div className="flex flex-col items-center mt-20">
                <ErrorImg/>
                <div className="flex text-3xl mt-3 text-gray-300 mb-2 font-bold">
                    현재 <span className="mx-2 text-[#1865CD]">페이지 준비중</span>입니다
                </div> 
                <p className="text-sm">보다 나은 서비스 제공을 위해 페이지 준비중에 있습니다.</p>
                <p className="text-sm">홈페이지 이용에 불편을 드려 죄송합니다.</p> 
                <div className="w-40 h-14 mt-10">
                    <Link className="bg-[#1865CD] text-white px-3 py-5 rounded-xl"
                        href="/">
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        </div>
    )
}