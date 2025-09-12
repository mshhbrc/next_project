'use client';

import { Announcements } from "@/app/ui/announcements";
import { Announcement } from "@/app/ui/images";
import React, { useState, useEffect } from "react";

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network Response not Ok");
          }
          return response.json();
        }).then((data) => {
          setPosts(data);
          setLoading(false);
        });
      }, []
    );

  return (
    <main className="base-page">
      <div className="flex w-full flex-col justify-start pt-16">
        <AnnouncmentPageHead length={posts.length}/>
        <div className="flex w-full h-full border-t">
          {loading && (
            <div className="flex w-full items-center justify-center p-20 text-2xl font-semibold">공지사항 불러오는 중..</div>
          )}
          {!loading && (
            <Announcements items={posts} home={false}/>
          )}
        </div>
      </div>
    </main>
  );
}

export function AnnouncmentPageHead({ length }: { length: number }) {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Announcement/>
        <p className="flex text-[40px] font-bold pb-3">공지사항</p>
      </div>
      <p className="text-[32px] font-semibold pb-[30px]">휴브알엔씨 소식을 전달해드립니다.</p>
      <p className="text-sm font-semibold pb-3">총 <span className="text-blue-500">{length}</span>건</p>
    </div>
  )
}