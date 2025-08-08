import Link from "next/link";

export default function AnnouncementBoard() {
  const items = [
    {id: 0, title: '공지사항 택배 발송', pin: true, date: '2001-11-20'},
    {id: 1, title: '공지사항 택배 발송', pin: true, date: '2000-11-20'},
    {id: 2, title: '공지사항 택배 발송', pin: true, date: '1999-11-20'},
    {id: 3, title: '공지사항 택배 발송', pin: true, date: '1998-11-20'},
    {id: 4, title: '공지사항 택배 발송', pin: true, date: '1997-11-20'},
    {id: 5, title: '공지사항 택배 발송', pin: true, date: '1996-11-20'},
    {id: 6, title: '공지사항 택배 발송', pin: false, date: '1995-11-20'},
    {id: 7, title: '공지사항 택배 발송', pin: false, date: '1994-11-20'},
    {id: 8, title: '공지사항 택배 발송', pin: false, date: '1993-11-20'},
    {id: 9, title: '공지사항 택배 발송', pin: false, date: '1992-11-20'},
    {id: 10, title: '공지사항 택배 발송', pin: false, date: '1991-11-20'},
    {id: 11, title: '공지사항 택배 발송', pin: false, date: '1990-11-20'},
  ]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-between border-b-2 border-b-gray-600 px-1 pb-3">
        <p className="text-xl text-[#292929] desktop:text-lg font-bold">공지사항</p>
        <Link href="/shop/support" className="text-sm text-gray-500"> 더보기 </Link>
      </div>
      <AnnouncementsHome items={items}/>
    </div>
  )
}

export function Announcements({ items }: { items: {id: number, title: string, pin: boolean, date: string}[] }) {
  const reordered = [...items].sort((a, b) => {
    if (a.pin !== b.pin) {
      return Number(b.pin) - Number(a.pin);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex w-full flex-col">
        {reordered.map((item, i) => (
            <Link href={`/shop/support/${item.id}`} key={i}>
                <div className={`flex w-full items-center justify-between py-4 px-4 border-b ${item.pin ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="flex flex-row items-center justify-center">
                            {item.pin && (
                                <p className="flex text-xs text-blue-500 bg-blue-50 mr-3 px-2 py-1 mx-1 rounded-xl">공지</p>
                            )}
                            <p className={`text-lg ${item.pin ? 'font-semibold' : ''}`}>{item.title}</p>
                    </div>
                    <p className="">{item.date}</p>
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

  return days;
}