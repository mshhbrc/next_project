import { AboutUsPart } from "@/app/ui/shop/about_us";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4 } from "@/app/ui/shop/images";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col pt-10">
      <div className="w-full h-full bg-gradient-to-b from-white to-blue-50 my-6">
        <div className="flex px-[360px] py-10 items-center flex-col">
          <div>
            <p className="font-semibold text-[#1865CD] pb-1">About Us</p>
            <p className="font-bold text-2xl pb-4">휴브알엔씨를 소개합니다</p>
            <p className="font-semibold text-gray-500">휴브알엔씨는 휴먼 (Human) 브레인 (Brain) 리서치 (Research) 앤드 (And) 컨설팅 
              (Consulting)의 약자로서, 인간의 뇌와 뇌에서 관장하는 인간의 모든 행동, 정서, 인지 기능 등에 대해서 연구하고 자문하는 곳입니다. 
              또한 IT 기반 전문 분석 프로그램 개발과 심리 검사 및 이와 관련한 분야의 책을 출간하는 출판사업부도 함께 합니다.</p>
          </div>
          <div className="flex h-full w-full mt-8">
            <AboutUsPart title="Publishing" subTitle="출판" margin="mr-7"
              description="심리, 언어 검사 도구를 출판하고, 전문 서적을 번역 및 출간하고 있습니다."
            >
              <div><AboutUs1/></div>
            </AboutUsPart>
            <AboutUsPart title="IT" subTitle="프로그램 개발" margin="mr-7"
              description="심리, 언어 검사와 관련된 IT 기반 채점 및 분석 프로그램을 개발하고 있습니다."
            >
              <div><AboutUs2/></div>
            </AboutUsPart>
            <AboutUsPart title="Research" subTitle="연구" margin="mr-7"
              description="인간의 인지 기능, 정서, 행동 문제에 대한 신경심리학적 연구를 진행하며, 
                뇌 손상 환자의 인지 재활 프로그램과 아동의 언어, 인지 기능 진단 및 향상 프로그램을 
                개발하고 있습니다."
            >
              <div><AboutUs3/></div>
            </AboutUsPart>
            <AboutUsPart title="Consulting" subTitle="컨설팅" margin=""
              description="법적 문제 또는 신약 개발 임상 시험과 관련된 신경심리학적 자문과 더불어, 
                연구 설계 및 통 계 방법에 대한 자문을 제공하고 있으며, 신경심리 관련 인력 교육 및 
                수련을 담담하고 있습니다."
            >
              <div><AboutUs4/></div>
            </AboutUsPart>
          </div>
        </div>
      </div>
    </main>
  );
}
