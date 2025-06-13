"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/_utils/auth-context";
import tryCatch from "@/app/_utils/try-catch";
import { useRouter } from "next/navigation";
import Welcome from "@/app/_components/welcome";
import Navigation from "@/app/_components/navigation";

const testNavItems = [
  { label: "Homepage", href: "#home" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Q&A", href: "#qa" },
  { label: "About", href: "#about" }
];

export default function Home() {

  const { user, customer, signOut } = useContext(AuthContext);

  const route = useRouter();

  const signOutStaff = async () => {
    if(user){
      const [data, error] = await tryCatch(() => signOut());
      if(error){
        console.error(error);
      }
    }
    route.push('/client-side');
  };

  const signOutCustomer = async () => {
    if(customer){
      const [data, error] = await tryCatch(() => signOut());
      if(error){
        console.error(error);
      }
    }
    route.push('/staff');
  };

  const [isNarrow, setIsNarrow] = useState(false);

  const scrolled = () => {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 0){
        setIsNarrow(true);
      } else {
        setIsNarrow(false);
      }
    })
  };

  useEffect(() => {
    scrolled();
    return () => {
      window.removeEventListener('scroll', scrolled);
    };
  }, []);

  return (
    <>
      <header className="w-full fixed left-0 shadow-sm z-10">
        <Navigation navItems={testNavItems} isNarrow={isNarrow} />
      </header>
      <div className="w-full flex flex-col justify-start items-center gap-2">
        <Welcome />
          <footer className="w-full bg-white border-t border-gray-200 text-gray-700 px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
              <aside>
                <h3 className="text-lg font-serif text-gray-900 mb-2">Tiana Young Photography</h3>
                <p>Capturing authentic stories with heart.</p>
              </aside>
              <nav>
                <h6 className="uppercase text-xs text-gray-500 mb-2">Services</h6>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:text-black">Photography</Link></li>
                  <li><Link href="#" className="hover:text-black">Photo Editing</Link></li>
                </ul>
              </nav>
              <nav>
                <h6 className="uppercase text-xs text-gray-500 mb-2">Company</h6>
                <ul className="space-y-1">
                  <li><Link href="/about" className="hover:text-black">About Me</Link></li>
                  <li><Link href="#" className="hover:text-black">Testimonials</Link></li>
                </ul>
              </nav>
            </div>
          </footer>
      </div>
    </>
  );
}
