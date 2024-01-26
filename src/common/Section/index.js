import { StyledSection, StyledSectionContainer, StyledSectionTitle } from "./styled";
import { theme } from "../../theme";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection theme={theme}>
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