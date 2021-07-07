// Import components, functions, types, and variables
import { Navbar, Nav } from 'react-bootstrap'

// Component
export default function NavigationBar() {
    return (
        <Navbar sticky="top" expand="md" collapseOnSelect>
            <Navbar.Brand className="ml-2">
                <b>Mayflower</b> Kicker
            </Navbar.Brand>
            <Navbar.Toggle className="mr-2" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-2 ml-md-0 mr-md-2">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/matches/">Meetings</Nav.Link>
                    <Nav.Link href="/matches/">Matches</Nav.Link>
                    <Nav.Link href="/players/">Players</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
