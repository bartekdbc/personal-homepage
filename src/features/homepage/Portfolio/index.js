import { Header, Icon, Section, Subheader, Title } from "./styled";
import Content from "./Content/PortfolioSuccess";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPortfolio,
  selectPortfolioList,
  selectPortfolioState,
} from "./portfolioSlice";
import { useEffect } from "react";

const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(selectPortfolioList);
  const portfolioState = useSelector(selectPortfolioState);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <Icon />
        <Subheader>Portfolio</Subheader>
        <Title>My recent projects</Title>
      </Header>
      <Content portfolio={portfolio} state={portfolioState} />
    </Section>
  );
};

export default Portfolio;
