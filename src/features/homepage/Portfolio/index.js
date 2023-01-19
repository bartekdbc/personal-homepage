import { Header, Icon, Section, Subheader, Title } from "./styled";
import { useEffect } from "react";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPortfolio,
  selectPortfolioList,
  selectPortfolioState,
} from "./portfolioSlice";

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
      <Content state={portfolioState} portfolio={portfolio} />
    </Section>
  );
};

export default Portfolio;
