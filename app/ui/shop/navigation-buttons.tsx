'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const links = [
  { name: '회사소개', href: '/shop/about'},
  { name: '구매', href: '/products/neuro/'},
  { name: '워크숍 / 강의', href: '/shop/'},
  { name: '고객지원', href: '#'},
  { name: '검사 솔루션', href: '/shop'},
];

export default function NavigationButtons() {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setIsOpen(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggle = (name: string) => {
    setIsOpen((prev) => (prev === name ? null : name))
  }
  
  return (
    <div className="flex h-full w-full flex-row items-center justify-between">
      <nav className="flex gap-4 h-full items-stretch">
        {links.map((link) => {
          const isDropdown = link.name === '고객지원'
          const opened = isOpen === link.name

          return (
            <div key={link.name}
              className="relative flex items-center h-full"
              ref={isDropdown ? dropdownRef : undefined}>
                {isDropdown ? (
                  <button onClick={() => toggle(link.name)}
                    className="h-full px-2 font-semibold w-24 text-[#292929] after:content-[''] after:absolute
                      after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-[#292929] after:scale-x-0
                      after:opacity-50 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:opacity-100 relative">
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex w-24 h-full px-2 items-center justify-center font-semibold text-[#292929] after:content-[''] after:absolute
                      after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-[#292929] after:scale-x-0
                      after:opacity-50 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:opacity-100 relative">
                    {link.name}
                  </Link>
                )}

                {isDropdown && isOpen && (
                  <div className="absolute top-full items-center flex flex-col w-32 left-[-16px] 
                    shadow-[0_4px_6px_rgba(0,0,0,0.1),_-4px_4px_6px_rgba(0,0,0,0.05),4px_4px_6px_rgba(0,0,0,0.05)]">
                    <Link href="/shop/support" className="py-6">공지사항</Link>
                    <Link href="" className="pb-6">1:1 문의하기</Link>
                  </div>
                )}
            </div>
          );
        })}
      </nav>
      <div className="flex flex-row h-5">
        <Link
          href=""
          className="flex h-full px-2 items-center justify-center font-semibold border-r text-[#292929] relative">
          로그인
        </Link>
        <Link
          href=""
          className="flex h-full px-2 items-center justify-center font-semibold text-[#292929] relative">
          회원가입
        </Link>
      </div>
    </div>
  );
}