'use client'

import ButtonCard from "@/components/reusable/ClickMe"
import ClickPlaseCard from "@/components/reusable/ClickPlase"
import { ButtonProps } from "@/types/buttonProp"

const Page = ()=>{

    function handleButton1(){
        console.log("Clicked Me")
    }

    const s1:ButtonProps = {
        text:"Click Me",
        disable:false,
        onClick:handleButton1
    }

    function handleButton2(){
        console.log("Clicked Plase")
    }

    const s2:ButtonProps = {
        text:"Click Plase",
        disable:false,
        onClick:handleButton2
    }

    return (
        <div>
            <ButtonCard btn={s1}/>
            <hr />
            <ClickPlaseCard btn={s2}/>
        </div>
    )
}
export default Page