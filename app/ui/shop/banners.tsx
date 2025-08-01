import { GuideImg, ToTestImg } from "./images"


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
		<div className="flex w-full h-full items-center justify-between mx-auto rounded-3xl border bg-blue-50 px-11 py-2">
            <div className="max-w-screen-desktop">
				<p className="font-bold text-xl">
					휴브알엔씨가<span className="text-[#1865CD]">처음</span>이신가요?<br/>
					<span className="text-[#1865CD]">이용 가이드</span>를 확인해주세요.
				</p>
				<button
					className="!w-[148px] !h-[48px] mt-3 rounded-[100px] bg-[#1865CD]"
					onClick={() => {}}>
                    <p className="text-white">이용 가이드 확인</p>
                </button>
			</div>
            <div className="ml-6"><GuideImg/></div>
		</div>
    )
}

export function ToTestBanner() {
    return (
		<div className="flex w-full h-full items-center justify-between mx-auto rounded-3xl border bg-blue-50 px-11 py-2">
            <div className="max-w-screen-desktop">
				<p className="font-bold text-xl">
					<span className="text-[#1865CD]">검사 시스템</span>이 필요해요!<br/>
					휴브알엔씨 온라인 검사 이용하기
				</p>
				<button
					className="!w-[148px] !h-[48px] mt-3 rounded-[100px] bg-[#1865CD]"
					onClick={() => {}}>
                    <p className="text-white">검사사이트 가기</p>
                </button>
			</div>
            <div className="ml-6"><ToTestImg/></div>
		</div>
    )
}
