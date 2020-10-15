import * as secondary from "./secondary"

const SecondaryFonts = `

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url('${secondary.WOFF2_4}') format('woff2'),
       url('${secondary.WOFF_4}') format('woff');
}

@font-face {
  ffont-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  src: local('Roboto Italic'), local('Roboto-Italic'),
       url('${secondary.WOFF2_4I}') format('woff2'),
       url('${secondary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('${secondary.WOFF2_7}') format('woff2'),
       url('${secondary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
       url('${secondary.WOFF2_7I}') format('woff2'),
       url('${secondary.WOFF_7I}') format('woff');
}


@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: local('Roboto Black'), local('Roboto-Black'),
       url('${secondary.WOFF2_9}') format('woff2'),
       url('${secondary.WOFF_9}') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
       url('${secondary.WOFF2_9I}') format('woff2'),
       url('${secondary.WOFF_9I}') format('woff');
}



`

export default SecondaryFonts
