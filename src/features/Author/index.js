import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
  <Container>
    <Header
      title="O Autorze"
    />
    <Section
      title="Krzysztof Broniszewski"
      body={
        <>Tu będą jakieś dane w przyszłości...</>
      }   
    />
    <Section
      title="CURRICULUM VITAE"
    />
  </Container>
);

export default Author