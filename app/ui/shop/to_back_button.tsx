'use client';

import { useRouter } from "next/navigation";

export default function ToBackButton() {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="bg-[#1865CD] text-white px-6 py-3 rounded-3xl">
            목록으로
        </button>
    )
}