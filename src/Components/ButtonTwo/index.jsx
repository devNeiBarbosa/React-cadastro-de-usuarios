import { ButtonTwo } from './style'

function ButtonViewUser({ children, ...props}) {

    return (
        <ButtonTwo {...props}>{children}</ButtonTwo>
    )
}

export default ButtonViewUser