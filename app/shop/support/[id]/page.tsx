'use client';

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

  return (
    <main className="base-page">
        <div className="flex w-full flex-col justify-start pt-7 pb-3">
            <p className="flex font-semibold text-2xl pb-3">공지사항</p>
            <p className="text-sm text-gray-400">작성일 2002-10-11</p>
            <div className="flex w-full h-full border-t mt-[30px] mb-12"/>
            <div className="flex w-full h-full border p-7">
                공지사항 내용
            </div>
        </div>
        <button onClick={() => router.back()} className="bg-blue-500 text-white">
            목록으로
        </button>
    </main>
  );
}