import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="header-text">
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                <Image
                  src="/logo-ipsum.png"
                  alt="Grouparoo Logo"
                  width={150}
                  height={80}
                />
              </a>
            </Link>
            <span className="d-none">Company</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              <Nav.Link>
                <Link href="/events">
                  <a className="nav-link" role="button">
                    Events
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/menu">
                  <a className="nav-link" role="button">
                    Menu
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    Pricing
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    Blog
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/community">
                  <a className="nav-link d-md-none d-lg-block" role="button">
                    Community
                  </a>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
