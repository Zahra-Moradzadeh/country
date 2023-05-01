import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Darkmode from "./Darkmode";



function Header() {
  return (
    <div className=" border" style={{padding:15}}>
    <Navbar>
      <Container>
        <Navbar.Brand  style={{fontWeight:"bolder",fontSize:24}}>Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              <Darkmode/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
