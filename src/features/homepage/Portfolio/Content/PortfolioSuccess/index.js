import {
  Description,
  Header,
  Link,
  LinksRow,
  LinksTitle,
  List,
  Tile,
} from "./styled";

const PortfolioSuccess = ({ portfolio }) => {
  const filteredPortfolio = portfolio.filter(
    ({ name }) => name !== "bartekdbc"
  );

  const sortedByCreateDayPortfolio = filteredPortfolio.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <List>
      {sortedByCreateDayPortfolio.map(
        ({ id, name, description, homepage, html_url }) => (
          <Tile key={id}>
            <Header>{name.replaceAll("-", " ")}</Header>
            <Description>{description}</Description>
            {!!homepage && (
              <LinksRow>
                <LinksTitle>Demo:</LinksTitle>
                <Link
                  href={homepage}
                  target="_blank"
                  rel="noreferrerr noopener"
                >
                  Project Demo
                </Link>
              </LinksRow>
            )}
            <LinksRow>
              <LinksTitle>Code:</LinksTitle>
              <Link href={html_url} target="_blank" rel="noreferrerr noopener">
                Github Repository
              </Link>
            </LinksRow>
          </Tile>
        )
      )}
    </List>
  );
};

export default PortfolioSuccess;
