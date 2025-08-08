import ProductSheet, { ProductHeader } from "@/app/ui/products/products";

export default function Page() {
  return (
    <main>
      <div className="base-page">
        <ProductHeader/>
        <div className="flex w-full items-center justify-normal">
          <ProductSheet/>
        </div>
      </div>
    </main>
  );
}
