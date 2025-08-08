'use client';

import { GuideBanner, HomeBanner, MeetProductsBanner, RenewalBanner, ToTestBanner } from '@/app/ui/shop/banners';
import AnnouncementBoard from './ui/announcements';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col mt-8">
      <HomeBanner/>
      <div className="px-[360px] mb-40">
        <Center/>
        <div className="flex flex-row justify-between mt-7 w-full gap-7">
            <div className="flex w-full"><GuideBanner/></div>
            <div className="flex w-full"><ToTestBanner/></div>
        </div>
        <MeetProductsBanner/>
      </div>
    </main>
  );
}


export function Center() {
  return (
    <div className="flex mt-7 desktop:mt-0">
      <div className="pr-8"><RenewalBanner/></div>
      <div className="flex flex-[1] h-12 px1">
          <AnnouncementBoard/>
      </div>
    </div>
  )
}