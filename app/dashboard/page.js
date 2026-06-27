'use client';

import FormLogin from "@/components/FormLogin";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-col  w-full   bg-white dark:bg-black sm:items-start">
         <div className="bg-blue-300 flex   w-full h-screen">
            <Sidebar/>
         </div>
       </main>
    </div>
  );
}
