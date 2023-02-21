import { ButtonLink } from "../../../../../common/ButtonLink";
import { username } from "../../githubData";
import { ErrorIcon, ErrorText, Paragraph, Wrapper } from "./styled";

const PortfolioError = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went&nbsp;wrong... </ErrorText>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink
      href={`https://github.com/${username}`}
      title="github.com/bartekdbc"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </ButtonLink>
  </Wrapper>
);

export default PortfolioError;
