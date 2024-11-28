import { Navbar, Title } from './style'

export function Nav(props) {

    return (
        <Navbar>{props.children}</Navbar>
    )
}

export function H1({children}) {

    return (
        <Title>{children}</Title>
    )
}
