import { Container, Nav, NavLink, Navbar as NavbarBs } from 'react-bootstrap'

const Navbar = () => {
  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
  )
}

export default Navbar