import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Headline Styles #1 //
export const H1Base = `
${fontSizer(2.8, 4, 76.8, 150, 2.6)};
  font-family: ${fonts.fontSecondary};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
`
export const H1Lime = `
  ${H1Base};
  color: ${colors.colorPrimary};
`

export const H1DarkGrey = `
  ${H1Base};
  color: ${colors.greyBrown};
`

// Headline Styles #2 //
export const H2Base = `
  ${fontSizer(1.8, 2.4, 76.8, 150, 2)};
  font-family: ${fonts.fontSecondary};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`
export const H2Lime = `
  ${H2Base};
  color: ${colors.colorPrimary};
`
export const H2DarkGrey = `
  ${H2Base};
  color: ${colors.greyBrown};
`

// Headline Styles #3 //
export const H3Base = `
  ${fontSizer(4, 6, 76.8, 150, 3)}
  font-family: ${fonts.fontSecondary};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.87;
  letter-spacing: normal;
`

export const H3Lime = `
  ${H3Base};
  color: ${colors.colorPrimary};
`

// Headline Styles #4 //
export const H4Base = `
  ${fontSizer(1.8, 2.2, 76.8, 160, 2)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`

export const H4Lime = `
  ${H4Base};
  color: ${colors.colorPrimary};
`
export const H4DarkGrey = `
  ${H4Base};
  color: ${colors.greyBrown};
`
