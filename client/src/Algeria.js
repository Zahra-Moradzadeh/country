import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Button, Figure } from "react-bootstrap/";

function Algeria(props) {
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
            <Figure.Image src={data.algeria.flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data.algeria.name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data.algeria.nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data.algeria.population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data.algeria.region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data.algeria.subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data.algeria.capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data.algeria.topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data.algeria.currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data.algeria.languages[0].name}
                </section>
              </Col>
            </Row>
            <Row>
              <section style={{ margin: 5, marginTop: 50 }}>
                <b>Border Countries : </b>
              </section>
              <section style={{ margin: 5 }}>
                {data.algeria.borders.map((name) => (
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
export default Algeria;
