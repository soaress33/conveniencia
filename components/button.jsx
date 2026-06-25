'use client';

export default function Button({
    type,
}){
    return(
        <button 
   
        className="
        bg-yellow-300
        hover:bg-yellow-500
        px-20 
        py-2
        rounded
        text-white
        font-bold
        
        ">
            <h1>Login</h1>
<type/>
        </button>
    )
}