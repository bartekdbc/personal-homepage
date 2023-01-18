import { ButtonLink } from "../../../../../common/ButtonLink";
import { ErrorIcon, ErrorText, Paragraph, Wrapper } from "./styled";

const PortfolioFail = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went wrong... </ErrorText>
    <Paragraph>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Paragraph>
    <ButtonLink>Go to Github</ButtonLink>
  </Wrapper>
);

export default PortfolioFail;
