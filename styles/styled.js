export const lightShadow = `0px 0px 32px -20px rgb(0, 0, 0)`

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const devices = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  laptop: `only screen and (min-width: ${deviceSizes.laptop})`,
  laptopL: `only screen and (min-width: ${deviceSizes.laptopL})`,
  desktop: `only screen and (min-width: ${deviceSizes.desktop})`,
  desktopL: `only screen and (min-width: ${deviceSizes.desktop})`,
}
