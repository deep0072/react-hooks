import { useEffect } from "react";

export  const Hello = ()=>{
    useEffect(()=>{

        // when hell is showed on screen ,then render will show 
        console.log("render")

        // otherwise unmount will shown in  console

        return ()=>{
            console.log("unmount")
        }
    })
    return <div> hello </div>
}