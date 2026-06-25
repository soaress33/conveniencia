'use client';

import FormLogin from "@/components/FormLogin";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1  justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex   bg-white dark:bg-black ">
        <div className="bg-[#1A1A1A] md:flex hidden items-center justify-center w-full h-screen">
          <Image
          width={400}
          height={400}
          src={"/2.png"}
          alt="logo"
          />

         </div>
         <div className="bg-[#FFD400] md:w-full flex items-center justify-center  w-full h-screen">
          <FormLogin/>
         </div>
       </main>
    </div>
  );
}
