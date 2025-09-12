import Link from 'next/link';
import { MainLogo } from './images';

export default function Footer() {
    return (
        <div className="flex w-full mx-auto mobile:w-min-mobile desktop:w-min-desktop">
            <div className="flex flex-col items-center justify-center w-full mt-9">
                <div className="flex flex-row items-center justify-center h-10 text-xs font-normal text-gray-300">
                    <Link href="/policy/privacy">개인정보처리방침</Link>
                    <Divider/>
                    <Link href="/policy/terms">이용약관</Link>
                    <Divider/>
                    <Link href="/policy/email-rejection">이메일무단수집거부</Link>
                    <Divider/>
                    <Link href="https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/hbrc00">인재채용</Link>
                </div>
                <div className="w-full h-[1px] bg-[#E7E7E7]"></div>
                <div className="flex pt-[8px] desktop:pt-4 pb-6 flex-col w-full desktop:pl-0 mobile:w-min-mobile desktop:w-min-desktop">
                    <div className="flex flex-col w-full items-center justify-center text-gray-300 desktop:text-[#808080] text-center text-[13px] font-normal leading-6">
                        <span className=" text-black leading-6">
                            고객센터 : 02-6332-7446 (FAX : 0505-633-7447), 운영시간 : 09:00-17:30 (12:00~13:00 점심시간)
                        </span>
                        <p className="leading-4">주소 : 서울특별시 송파구 법원로 128 SKV1 C동 705호</p>
                        <span className="flex w-full flex-row items-center justify-center leading-5">
                            사업자등록번호 : 8138801247<Divider/>
                            대표이사 : 유재일<Divider/>
                            통신판매업승인번호 : 제 2020-서울송파-3114호
                        </span>
                        <span className="flex w-full flex-row items-center justify-center leading-5">
                            개인정보관리 책임자 : 허준무<Divider/>
                            호스팅 제공 : Amazon Web Services<Divider/>
                            <Link href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8138801247" target="_blank" rel="noopener noreferrer" className="text-black font-semibold leading-4">
                                사업자 정보 확인
                            </Link>
                        </span>
                        <p className="leading-4">
                            메일문의 : 주문문의 <span className="tracking-[0px]">order@hbrckorea.com/ </span>
                            내용문의 <span className="tracking-[0px]">help@hbrckorea.com/</span> 
                            교육문의 <span className="tracking-[0px]">edu@hbrckorea.com</span>
                        </p>
                        <span className="flex w-full items-center justify-center leading-4"><div className="mobile-hidden w-20"><MainLogo/></div></span>
                        <p className="leading-4">ⓒ 휴브알엔씨. <span className="tracking-[0px]">All rights reserved.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Divider() {
    return (
        <div className="border-l w-0 h-3 mx-2"/>
    )
}