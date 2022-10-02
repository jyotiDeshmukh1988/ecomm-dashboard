import { Link,useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
const Header = () => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/register');
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="mainLogo">
            React-Bootstrap
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {localStorage.getItem("mytoken") ? (
                <>
                  <Link to="/addproduct">Add Product</Link>
                  <Link to="/updateproduct">Update Product</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav>
            <Nav>
            {localStorage.getItem("mytoken") ? (
              <>
              <NavDropdown>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : null
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
