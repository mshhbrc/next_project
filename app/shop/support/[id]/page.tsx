import ToBackButton from '@/app/ui/shop/to_back_button';
import React from 'react';

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
    const { id } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return (
        <main className="base-page">
            <div className="flex w-full flex-col justify-start pt-7 pb-3">
                <p className="flex font-semibold text-2xl pb-3">{data.title}</p>
                <p className="text-sm text-gray-400">작성일 2002-10-11</p>
                <div className="flex w-full h-full border-t mt-[30px] mb-12"/>
                <div className="flex w-full h-full border p-7">
                    {data.body}
                </div>
            </div>
            <ToBackButton/>
        </main>
    );
}