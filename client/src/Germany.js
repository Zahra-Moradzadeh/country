import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Button, Figure } from "react-bootstrap/";

function Germany(props) {
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
            <Figure.Image src={data.german.flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data.german.name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data.german.nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data.german.population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data.german.region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data.german.subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data.german.capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data.german.topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data.german.currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data.german.languages[0].name}
                </section>
              </Col>
            </Row>
            <Row>
              <section style={{ margin: 5, marginTop: 50 }}>
                <b>Border Countries : </b>
              </section>
              <section style={{ margin: 5 }}>
                {data.german.borders.map((name) => (
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
export default Germany;
