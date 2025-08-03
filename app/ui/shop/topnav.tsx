import Link from 'next/link';
import TopNavLogo from '@/app/ui/shop/topnav-logo';
import NavigationButtons from '@/app/ui/shop/navigation-buttons';

export default function TopNav() {
  return (
    <section className="flex w-full items-center justify-center bg-[#FFFFFFCC] border-b-[1px]
            border-[#E7E7E7] fixed top-0 left-0 right-0 z-[55]">
      <header className="flex w-full items-center h-[72px] desktop:h-[74px] 
      mobile:w-min-mobile desktop:w-min-desktop justify-between mx-[360px]">
        <Link href="/shop/home">
          <div className="w-32"><TopNavLogo/></div>
        </Link>
        <div className="flex items-center h-full space-x-4 ml-9 grow">
          <NavigationButtons/>
        </div>
      </header>
    </section>
  );
}
