import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const author = () => (
  <Container>
    <Header
      title="O autorze"
    />
    <Section
      title="Krzysztof Broniszewski"
      body={
        <>nanana</>
      }   
    />
    <Section
      title="Opis"
    />
  </Container>
);

export default author