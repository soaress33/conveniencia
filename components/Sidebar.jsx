'use client';

import Image from "next/image";

export default function Sidebar(){
    return(
        <div
         className="
         bg-zinc-600
         h-full
         md:w-100
         justify-center
         flex
         ">

         <div className="bg-amber-300 px-50 md:h-20  justify-end flex  ">   
            <Image
            width={80}
            height={80}
            alt={"Icons"}
            src={"/2.png"}
               />   
        
         </div>


        </div>
    )
}