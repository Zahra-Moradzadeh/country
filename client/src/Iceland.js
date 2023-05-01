import Header from "./Header";
import Back from "./Back";
import { Container, Row, Col, Figure } from "react-bootstrap/";

function Iceland(props) {
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
            <Figure.Image src={data.iceland.flag} />
          </Col>
          <Col style={{ margin: 30 }}>
            <Row>
              <h1>{data.iceland.name}</h1>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Native Name :</b> {data.iceland.nativeName}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Population :</b> {data.iceland.population}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Region :</b> {data.iceland.region}
                </section>

                <section style={{ margin: 5 }}>
                  <b>Sub Region :</b> {data.iceland.subregion}
                </section>
              </Col>
              <Col>
                <section style={{ margin: 5 }}>
                  <b>Capital :</b> {data.iceland.capital}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Top Level Domain :</b> {data.iceland.topLevelDomain}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Currency :</b> {data.iceland.currencies[0].name}
                </section>
                <section style={{ margin: 5 }}>
                  <b>Languages :</b> {data.iceland.languages[0].name}
                </section>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Iceland;
