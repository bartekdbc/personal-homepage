import { ButtonLink } from "../../../../../common/ButtonLink";
import { username } from "../../githubData";
import { ErrorIcon, ErrorText, Paragraph, Wrapper } from "./styled";

const PortfolioFail = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went wrong... </ErrorText>
    <Paragraph>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Paragraph>
    <ButtonLink
      href={`https://github.com/${username}`}
      title="Github"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </ButtonLink>
  </Wrapper>
);

export default PortfolioFail;
