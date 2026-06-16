import { ButtonProps } from "@/types/buttonProp"

type prop = {
    btn:ButtonProps;
}

const ClickPlaseCard = ({btn}:prop) =>{
    return(
        <button disabled={btn.disable} onClick={btn.onClick}>{btn.text}</button>
    )
}
export default ClickPlaseCard