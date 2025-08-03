'use client';

import { GuideBanner, RenewalBanner, ToTestBanner } from '@/app/ui/shop/banners';
import { BrainBannerImg, GuideImg, SearchImg } from '@/app/ui/shop/images';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col pt-10">
      <div className="w-full h-full bg-gradient-to-b from-white to-blue-50 my-3">
        <div className="flex px-[360px] py-12 items-center">
          <div className="flex flex-col w-full">
            <p className="font-bold text-ellipsis-[#292929] mb-2 text-[38px]">
              인간의 <span className="font-bold text-[#1865CD]">뇌</span>와 <span className="font-bold text-[#1865CD]">마음</span>을 연구하는<br/>
              전문기관, 휴브알엔씨
            </p>
            <p className="text-sm text-gray-500 mb-8">
              휴브알엔씨는 인간의 뇌와 마음에 관련된 연구,<br/>
              출판 및 자문, 그리고 검사 프로그램을 제공하는 전문기관입니다.
            </p>

            <button onClick={() => router.push('/shop/about')}
              className="hover:bg-[#1865CD] transition-all duration-200 hover:shadow-button bg-[#292929]
              w-fit h-fit flex px-8 py-4 rounded-[100px]">
              <p className="text-base desktop:text-lg font-semibold text-white">휴브알엔씨 소개</p>
            </button>
          </div>
          <div className="flex mr-14">
            <BrainBannerImg/>
          </div>
        </div>
      </div>
      <div className="px-[360px]">
        <Center/>
        <div className="flex flex-row justify-between mt-7 w-full">
            <div><GuideBanner/></div>
            <div><ToTestBanner/></div>
        </div>
        <div className="flex desktop:hidden">
            <div className="group w-full flex justify-between relative items-center overflow-hidden mt-[34px] px-5 h-28 rounded-3xl bg-gradient-to-r from-[#1F76EB] to-[#1F76EB99]">
              <div className="flex w-full flex-row items-center">
                <p className="text-[#FFFFFF] font-semibold text-xl desktop:text-[22px] ml-[18px] desktop:ml-[38px]">
                  휴브알엔씨의 전문적 제품을 만나보세요 🔍
                </p>
                <Link href="" className="bg-[#3779D3] hover:bg-primary-200 px-[32px] py-[14px] rounded-[100px] ml-[5px] block">
                  <p className="text-white text-[16px] leading-[20px] font-semibold">구매하러 가기</p>
                </Link>
              </div>
              <div className="flex w-96 mr-20"><SearchImg/></div>
            </div>
        </div>
      </div>
    </main>
  );
}

export function Center() {
  return (
    <div className="flex mt-7 desktop:mt-0">
      <div className="pr-8"><RenewalBanner/></div>
      <div className="flex flex-[1] flex-row items-center justify-between h-12 border-b-2 border-b-gray-600 px1">
          <p className="text-xl text-[#292929] desktop:text-lg font-bold">공지사항</p>
          <Link href="/shop/support" className="text-sm text-gray-500"> 더보기 </Link>
      </div>
    </div>
  )
}