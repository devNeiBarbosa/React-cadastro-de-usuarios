import { ButtonOne } from './style'

function ButtonRegister({ children, ...props}) {

    return (
        <ButtonOne {...props}>{children}</ButtonOne>
    )
}

export default ButtonRegister