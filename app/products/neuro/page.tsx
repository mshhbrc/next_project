import { Cart } from "@/app/ui/images";
import ProductSheet from "@/app/ui/products/products";

export default function Page() {
  return (
    <main>
      <div className="base-page">
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full flex-row items-center justify-start mt-12">
            <div><Cart/></div>
            <p className="text-[40px] font-semibold py-3">구매</p>
          </div>
          <p className="text-3xl font-semibold">휴브알엔씨가 제공하는 신경심리 및 언어 검사 도구와 도서입니다.</p>
        </div>
        <div className="flex w-full items-center justify-normal">
          <ProductSheet/>
        </div>
      </div>
    </main>
  );
}
