import { FaSearch } from "react-icons/fa";
import "./Style.css"
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap/";
import Header from "./Header";
import { Link } from "react-router-dom";
// /////////////////////


function HomePage(props) {
  const data = props.data;
// ///////////////////

  return (
    <>
      <Header />
      <div>
        <Container >
          {/* //////////////////////////////////////////////////////////////////// */}
          <Row style={{ margin: 20, marginTop: "5rem" }}>
            <Col>
              <Form className="d-flex , justify-content-start">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <FaSearch />
                </Button>
              </Form>
            </Col>
            <Col>
              <Dropdown className="d-flex , justify-content-end">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Filter By Region
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ margin: 20, marginTop: "5rem" }}>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.german.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Germany"} style={{textDecoration:"none"}}>{data.german.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.german.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.german.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.german.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="Button" src={data.usa.flags.svg } />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/USA"} style={{textDecoration:"none"}}>{data.usa.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.usa.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.usa.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.usa.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.brazil.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Brazil"} style={{textDecoration:"none"}}>{data.brazil.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.brazil.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.brazil.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.brazil.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.iceland.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/IceLand"} style={{textDecoration:"none"}}>{data.iceland.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.iceland.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.iceland.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.iceland.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* ///////////////////////////////////////////////////////////////// */}
          <Row style={{ margin: 20, marginTop: "5rem" }}>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.afghanistan.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Afghanistan"} style={{textDecoration:"none"}}>{data.afghanistan.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.afghanistan.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.afghanistan.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.afghanistan.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.aland.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Aland"} style={{textDecoration:"none"}}>{data.aland.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.aland.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.aland.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.aland.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.albania.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Albania"} style={{textDecoration:"none"}}>{data.albania.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.albania.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.albania.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.albania.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "24rem" }}>
                <Card.Img variant="top" src={data.algeria.flags.svg} />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/Algeria"} style={{textDecoration:"none"}}>{data.algeria.name}</Link>
                  </Card.Title>
                  <Card.Text style={{ marginTop: 20, marginBottom: 20 }}>
                    <section style={{ margin: 5 }}>
                      <b>Population :</b> {data.algeria.population}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Region :</b> {data.algeria.region}
                    </section>
                    <section style={{ margin: 5 }}>
                      <b>Capital :</b> {data.algeria.capital}
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}
export default HomePage;
