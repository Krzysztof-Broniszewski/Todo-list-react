import "./style.css";
import { StyledSection, StyledSectionContainer, StyledSectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionContainer>
            <StyledSectionTitle>
                {title}
            </StyledSectionTitle>
            {extraHeaderContent}
        </StyledSectionContainer>
        <StyledSectionContainer>
            {body}
        </StyledSectionContainer>
    </StyledSection>
);

export default Section;