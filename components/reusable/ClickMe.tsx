import { ButtonProps } from "@/types/buttonProp"

type Prop = {
    btn:ButtonProps
}
const ButtonCard = ({btn}:Prop) =>{
    return (
        <button disabled={btn.disable} onClick={btn.onClick}>{btn.text}</button>
    )
}
export default ButtonCard