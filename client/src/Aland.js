import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Figure } from "react-bootstrap/";

function Aland(props) {
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
            <Figure.Image src={data.aland.flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data.aland.name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data.aland.nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data.aland.population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data.aland.region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data.aland.subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data.aland.capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data.aland.topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data.aland.currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data.aland.languages[0].name}
                </section>
              </Col>
            </Row>
   
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Aland;
