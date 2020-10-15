import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Body copy ONE //
export const B1Base = `
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
`

export const B1Lime = `
  ${B1Base};
  color: ${colors.colorPrimary};
`

export const B1DarkGrey = `
  ${B1Base};
  color: ${colors.greyBrown};
`

export const B1White = `
  ${B1Base};
  color: ${colors.white};
`

// Body copy TWO //
export const B2Base = `
  ${fontSizer(1.8, 2, 76.8, 150, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
`

export const B2Lime = `
  ${B2Base};
  color: ${colors.colorPrimary};
`

export const B2DarkGrey = `
  ${B2Base};
  color: ${colors.greyBrown};
`
