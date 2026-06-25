'use client';

import { Form } from "lucide-react";
import { useState } from "react";
import Button from "./button";
import  { loginUser }  from "@/app/actions/login";
import { useRouter } from "next/navigation";


export default function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await loginUser(user, password);
    console.log(res);
  }


    return (
        <div
            className="
         bg-white
         px-15
         md:px-30
         py-12
         rounded-2xl
         
         ">

    <form onSubmit={handleSubmit}>
            <div className="text-black gap-2 flex flex-col">
               <div className=" py-7 text-3xl font-bold"> 
                    <h1>Login</h1>
                </div>
                <div className="">
                    <h1 className="font-bold"  >User</h1>
                    <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                        className="
                    border
                    p-2
                    rounded"
                    />
                </div>

                <div className="py-4">
                    <h1 className="font-bold" >Password</h1>
                    <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                   value={password}
                    className="
                    border
                    p-2
                    rounded"
                    />
                </div>

          <button
                  type="submit"
   
        className="
        bg-yellow-300
        hover:bg-yellow-500
        px-20 
        py-2
        rounded
        text-white
        font-bold
        
        ">
            login
          </button>

            </div>
        </form>     
     




        </div>
    )
}