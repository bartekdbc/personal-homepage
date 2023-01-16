import { ReactComponent as GitHubIcon } from "./images/github.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./images/facebook.svg";
import { styleIcon } from "./styled";

export const socialsData = [
  {
    name: "GitHub",
    url: "https://github.com/bartekdbc",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bartek-d%C4%99biec-819333261/",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/bartekdbc",
    Icon: styleIcon(FacebookIcon),
  },
];
