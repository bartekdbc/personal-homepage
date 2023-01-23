const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  shipCove: "#6D93BE",
  dodgerBlue: "#2188FF",
  dodgerBlueLight: "rgba(33, 136, 255, 0.4)",
  dodgerBlueLightHover: "rgba(33, 136, 255, 0.8)",
  scienceBlue: "#0366D6",
  scienceBlueLight: "rgba(3, 102, 214, 0.2)",
  scienceBlueLightHover: "rgba(3, 102, 214, 0.8)",
  scienceBlueLightDarkMode: "rgba(3, 102, 214, 0.5)",
  anakiwa: "#8cc2ff",
  transparentGray: "rgba(209, 213, 218, 0.3)",
  transparentGrayDarkMode: "rgba(209, 213, 218, 0.1)",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  mineShaftLight: "rgba(54, 54, 54, 0.72)",
  mineShaft: "#252525",
};

const common = {
  breakpoint: {
    small: "767px",
    medium: "991px",
    large: "1199px",
  },
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    content: {
      text: colorNames.slateGray,
      background: colorNames.whiteLilac,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.transparentGray,
      shadowHover: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    titleUnderline: colorNames.transparentGray,
    themeSwitcher: {
      text: colorNames.slateGray,
      background: colorNames.mercury,
      border: colorNames.transparentGray,
      icon: colorNames.white,
    },
    tile: {
      header: colorNames.scienceBlue,
      border: colorNames.transparentGray,
      borderHover: colorNames.scienceBlueLight,
      link: colorNames.scienceBlue,
      linkUnderline: colorNames.scienceBlueLight,
      linkUnderlineHover: colorNames.scienceBlueLightHover,
    },
    portfolio: {
      text: colorNames.mineShaft,
      spinner: colorNames.transparentGray,
      spinnerColor: colorNames.scienceBlue,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    content: {
      text: colorNames.white,
      background: colorNames.mineShaft,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.transparentGray,
      shadowHover: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLight,
    titleUnderline: colorNames.transparentGrayDarkMode,
    themeSwitcher: {
      text: colorNames.white,
      background: colorNames.mineShaftLight,
      border: colorNames.white,
      icon: colorNames.mineShaft,
    },
    tile: {
      header: colorNames.white,
      border: colorNames.transparentGrayDarkMode,
      borderHover: colorNames.scienceBlueLightDarkMode,
      link: colorNames.dodgerBlue,
      linkUnderline: colorNames.dodgerBlueLight,
      linkUnderlineHover: colorNames.dodgerBlueLightHover,
    },
    portfolio: {
      text: colorNames.white,
      spinner: colorNames.mineShaft,
      spinnerColor: colorNames.dodgerBlue,
    },
  },
};
