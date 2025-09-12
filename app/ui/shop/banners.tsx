import { GuideImg, ToTestImg, BrainBannerImg, SearchImg } from "@/app/ui/images"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function HomeBanner() {
	const router = useRouter();
	
	return (
		<div className="w-full h-full bg-gradient-to-b from-white to-blue-50 my-3">
		<div className="flex px-[360px] py-12 items-center">
			<div className="flex flex-col w-full">
			<p className="font-bold text-ellipsis-[#292929] mb-2 text-[42px]">
				인간의 <span className="font-bold text-[#1865CD]">뇌</span>와 <span className="font-bold text-[#1865CD]">마음</span>을 연구하는<br/>
				전문기관, 휴브알엔씨
			</p>
			<p className="text-gray-500 mb-8">
				휴브알엔씨는 인간의 뇌와 마음에 관련된 연구,<br/>
				출판 및 자문, 그리고 검사 프로그램을 제공하는 전문기관입니다.
			</p>

			<button onClick={() => router.push('/shop/about')}
				className="hover:bg-[#1865CD] transition-all duration-200 hover:shadow-button bg-[#292929]
				w-fit h-fit flex px-8 py-4 rounded-[100px]">
				<p className="text-lg desktop:text-lg font-semibold text-white">휴브알엔씨 소개</p>
			</button>
			</div>
			<div className="flex mr-14">
			<BrainBannerImg/>
			</div>
		</div>
		</div>
	)
}

export function RenewalBanner() {
    return (
        <section className="flex">
            <img src="/images/main_renewal_banner_pc.svg"
                className="h-80"/>
        </section>
    )
}

export function GuideBanner() {
    return (
		<div className="flex w-full h-full items-center justify-center rounded-3xl border bg-blue-50 px-10">
            <div className="flex flex-[2] flex-col max-w-screen-desktop">
				<p className="font-bold text-xl">
					휴브알엔씨가 <span className="text-[#1865CD]">처음</span>이신가요?<br/>
					<span className="text-[#1865CD]">이용 가이드</span>를 확인해주세요.
				</p>
				<button
					className="!w-[148px] !h-[48px] mt-3 rounded-3xl bg-[#1865CD]"
					onClick={() => {}}>
                    <p className="text-white">이용 가이드 확인</p>
                </button>
			</div>
            <div className="my-3"><GuideImg/></div>
		</div>
    )
}

export function ToTestBanner() {
    return (
		<div className="flex w-full h-full items-center justify-center rounded-3xl border bg-blue-50 px-10">
            <div className="flex flex-[2] flex-col max-w-screen-desktop">
				<p className="font-bold text-xl">
					<span className="text-[#1865CD]">검사 시스템</span>이 필요해요!<br/>
					휴브알엔씨 온라인 검사 이용하기
				</p>
				<button
					className="!w-[148px] !h-[48px] mt-3 rounded-3xl bg-[#1865CD]"
					onClick={() => {}}>
                    <p className="text-white">검사사이트 가기</p>
                </button>
			</div>
            <div className="my-3"><ToTestImg/></div>
		</div>
    )
}

export function MeetProductsBanner() {
	return (
	<div className="flex desktop:hidden">
		<div className="group w-full flex justify-between relative items-center overflow-hidden mt-[34px] px-5 h-28 rounded-3xl bg-gradient-to-r from-[#1F76EB] to-[#1F76EB99]">
			<div className="flex w-full flex-row items-center">
			<p className="text-[#FFFFFF] font-semibold text-[22px] desktop:text-[22px] ml-[18px] desktop:ml-[38px]">
				휴브알엔씨의 전문적 제품을 만나보세요 🔍
			</p>
			<Link href="" className="bg-[#3779D3] hover:bg-primary-200 px-[32px] py-[14px] rounded-[100px] ml-[5px] block">
				<p className="text-white text-[16px] leading-[20px] font-semibold">구매하러 가기</p>
			</Link>
			</div>
			<div className="flex w-96 mr-20"><SearchImg/></div>
		</div>
	</div>
	)
}