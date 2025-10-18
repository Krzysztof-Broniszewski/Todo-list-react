import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const AuthorPage = () => (
  <Container>
    <Header
      title="O Autorze"
    />
    <Section
      title="Krzysztof Broniszewski"
      body={
        <><a href="https://krzysztof-broniszewski.github.io/krzysztof-cv/" target="_blank">
          View my online CV / portfolio
        </a></>
      }   
    />
    <Section
      title="CURRICULUM VITAE"
    />
  </Container>
);

export default AuthorPage