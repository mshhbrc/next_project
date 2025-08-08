import { Announcements } from "@/app/ui/announcements";
import { Announcement } from "@/app/ui/images";

export default function Page() {
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
    <main className="base-page">
      <div className="flex w-full flex-col justify-start pt-16">
        <div className="flex flex-row gap-2">
          <Announcement/>
          <p className="flex text-[40px] font-bold pb-3">공지사항</p>
          </div>
        <p className="text-[32px] font-semibold pb-[30px]">휴브알엔씨 소식을 전달해드립니다.</p>
        <p className="text-sm font-semibold pb-3">총 <span className="text-blue-500">{items.length}</span>건</p>
        <div className="flex w-full h-full border-t">
          <Announcements items={items}/>
        </div>
      </div>
    </main>
  );
}