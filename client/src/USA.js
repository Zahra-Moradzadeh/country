import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Button, Figure } from "react-bootstrap/";

function USA(props) {
  const data = props.data;
  return (
    <>
      <Header />
      <Container>
        {/* ////////////////////// BACK //////////////////// */}
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col>
            {<Back />}
          </Col>
        </Row>
        {/* /////////////////////// IMAGE And INFO //////////////////// */}
        <Row>
          <Col md={12} lg={6}>
            <Figure.Image src={data.usa.flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data.usa.name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data.usa.nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data.usa.population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data.usa.region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data.usa.subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data.usa.capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data.usa.topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data.usa.currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data.usa.languages[0].name}
                </section>
              </Col>
            </Row>
            <Row>
              <section style={{ margin: 5, marginTop: 50 }}>
                <b>Border Countries : </b>
              </section>
              <section style={{ margin: 5 }}>
                {data.usa.borders.map((name) => (
                  <>
                    <Button variant="outline-secondary" style={{margin:2}}>{name}</Button>
                    <span> </span>
                  </>
                ))}
              </section>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default USA;
