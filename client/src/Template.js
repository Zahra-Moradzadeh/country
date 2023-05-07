import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Figure, Button } from "react-bootstrap/";

function Template(props) {
  console.log(props);
  const data = props.info;
  const country = props.Country;
  //   console.log(data);
  //   console.log(country);
  //   console.log(data[country])
  return (
    <>
      <Header />
      <Container>
        {/* ////////////////////// BACK //////////////////// */}
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col>{<Back />}</Col>
        </Row>
        {/* /////////////////////// IMAGE And INFO //////////////////// */}
        <Row>
          <Col md={12} lg={6}>
            <Figure.Image src={data[country].flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data[country].name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data[country].nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data[country].population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data[country].region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data[country].subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data[country].capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data[country].topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data[country].currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data[country].languages[0].name}
                </section>
              </Col>
            </Row>
            <Row>
              <section style={{ margin: 5, marginTop: 50 }}>
                <b>Border Countries : </b>
              </section>
              <section style={{ margin: 5 }}>
                {data[country].borders ? data[country].borders.map((name) => (
                  <>
                    <Button variant="outline-secondary" style={{ margin: 2 }}>
                      {name}
                    </Button>
                    <span> </span>
                  </>
                )):"----"}
              </section>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Template;
