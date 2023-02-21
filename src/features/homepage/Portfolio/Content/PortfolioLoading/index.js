import { Paragraph, Spinner, Wrapper } from "./styled";

const PortfolioLoading = () => (
  <Wrapper>
    <Paragraph>Please wait, projects are&nbsp;being&nbsp;loaded...</Paragraph>
    <Spinner />
  </Wrapper>
);

export default PortfolioLoading;
