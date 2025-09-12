import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AnnouncementBoard() {
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

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-between border-b-2 border-b-gray-600 px-1 pb-3">
        <p className="text-xl text-[#292929] desktop:text-lg font-bold">공지사항</p>
        <Link href="/shop/support" className="text-sm text-gray-500"> 더보기 </Link>
      </div>
      <Announcements items={posts} home={true}/>
    </div>
  )
}

export function Announcements({ items, home }: { items: {id: number, title: string, pin: boolean, date: string}[], home: boolean }) {
  const reordered = [...items].sort((a, b) => {
    if (a.pin !== b.pin) {
      return Number(b.pin) - Number(a.pin);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const announcements = home ? reordered.slice(0, 5) : reordered;

  return (
    <div className="flex w-full flex-col">
        {announcements.map((item, i) => (
            <Link href={`/shop/support/${item.id}`} key={i}>
                <div className={`flex w-full items-center justify-between py-4 px-4 border-b ${item.pin ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="flex flex-row items-center justify-center">
                            {item.pin && (
                                <p className="flex text-xs text-blue-500 bg-blue-50 mr-3 px-2 py-1 mx-1 rounded-xl">공지</p>
                            )}
                            <p className={`text-lg ${item.pin ? 'font-semibold' : ''} ${home ? 'overflow-hidden text-ellipsis w-96 whitespace-nowrap' : ''}`}>{item.title}</p>
                    </div>
                    {
                      home 
                        ? <p className="text-sm text-gray-400">{GetDays(item.date)}일전</p>
                        : <p className="">{item.date}</p>
                    }
                </div>
            </Link>
        ))}
    </div>
  )
}

export function AnnouncementsHome({ items }: { items: {id: number, title: string, pin: boolean, date: string}[] }) {
  const reordered = [...items].sort((a, b) => {
    if (a.pin !== b.pin) {
      return Number(b.pin) - Number(a.pin);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 5);

  return (
    <div className="flex w-full flex-col">
      {reordered.map((item, i) => (
        <Link href={`/shop/support/${item.id}`} key={i}>
          <div className={"flex w-full items-center justify-between py-3 px-1 border-b"}>
            <div className="flex flex-row items-center justify-center">
              {item.pin && (
                  <p className="flex text-xs text-blue-500 bg-blue-50 px-2 py-1 mr-1 rounded-xl">공지</p>
                )}
              <p className="font-semibold">{item.title}</p>
            </div>
            <p className="text-sm text-gray-400">{GetDays(item.date)}일전</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function GetDays(date: string): number {
  const today = new Date();
  const target = new Date(date);

  const timeDiff = today.getTime() - target.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return days || 0;
}