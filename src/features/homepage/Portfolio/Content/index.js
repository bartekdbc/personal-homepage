import PortfolioFail from "./PortfolioFail/";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioSuccess from "./PortfolioSuccess";

const Content = ({ state, portfolio }) => {
  switch (state) {
    case "initial":
      return null;

    case "loading":
      return <PortfolioLoading />;

    case "success":
      return <PortfolioSuccess portfolio={portfolio} />;

    case "error":
      return <PortfolioFail />;

    default:
      throw new Error(`incorrect state: ${state}`);
  }
};

export default Content;
