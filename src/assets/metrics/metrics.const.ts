const deviceWidths = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const Metrics = {
  mediaQueries: {
    mobileS: `(min-width: ${deviceWidths.mobileS})`,
    mobileM: `(min-width: ${deviceWidths.mobileM})`,
    mobileL: `(min-width: ${deviceWidths.mobileL})`,
    tablet: `(min-width: ${deviceWidths.tablet})`,
    laptop: `(min-width: ${deviceWidths.laptop})`,
    laptopL: `(min-width: ${deviceWidths.laptopL})`,
    desktop: `(min-width: ${deviceWidths.desktop})`,
    desktopL: `(min-width: ${deviceWidths.desktop})`,
  },

  desktopMargin: '3vw',
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};

export default Metrics;
