import { socialsData } from "./socialsData";
import { Item, StyledSocialIcon, Link } from "./styled";

const Socials = () => (
  <StyledSocialIcon>
    {socialsData.map(({ name, url, Icon }) => (
      <Item key={name}>
        <Link href={url} title={name} target="_blank" rel="noreferrer noopener">
          <Icon />
        </Link>
      </Item>
    ))}
  </StyledSocialIcon>
);

export default Socials;
