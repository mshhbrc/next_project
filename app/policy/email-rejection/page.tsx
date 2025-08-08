import { EmailRejectionText } from "@/app/ui/policy/text-data";
import PolicyNav from "@/app/ui/policy/to_policy";

export default function Page() {
    return (
        <div className="flex flex-row min-h-screen pt-10 px-[360px] mb-10">
            <div className="flex mr-7"><PolicyNav/></div>
            <div className="flex flex-col w-full h-full">
                <p className="font-semibold text-[28px] pt-[26px] pb-8">이메일무단수집거부</p>
                <EmailRejectionText/>
            </div>
        </div>
    )
}