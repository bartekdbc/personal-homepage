import { socialsData } from "./socialsData";
import { Item, StyledSocialIcon, Icon, Link } from "./styled";

const Socials = () => (
  <StyledSocialIcon>
    {socialsData.map(({ name, address, icon }) => (
      <Item key={name}>
        <Link
          href={address}
          title={name}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon src={icon} />
        </Link>
      </Item>
    ))}
  </StyledSocialIcon>
);

export default Socials;
