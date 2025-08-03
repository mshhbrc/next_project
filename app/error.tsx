'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col pt-10 items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-3 text-gray-300 cursor-default text-[30px] mb-2 flex font-bold" data-svelte-h="svelte-1s9pq7x">
                    현재 
                    <div className="mx-2 text-primary-200">페이지 준비중</div>입니다
                </div> 
                <div className="text-[14px] desktop:text-[16px]" data-svelte-h="svelte-1dc17c7">보다 나은 서비스 제공을 위해 페이지 준비중에 있습니다.</div> 
                <div className="text-[14px] desktop:text-[16px]" data-svelte-h="svelte-vcx4fm">홈페이지 이용에 불편을 드려 죄송합니다.</div> 
                <div className="mt-[26px] w-[136px]">
                    <button id="" role="button" className="btn !w-full whitespace-nowrap svelte-kr1237" type="button">홈으로 돌아가기</button>
                </div>
            </div>
        </div>
    )
}