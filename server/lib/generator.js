// returns a window with a document and an svg root node
const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVGtoPDF = require('svg-to-pdfkit');

const { document } = window;

const generateSVG = (cardText) => {
  // create svg.js instance
  const svg = document.createElement('svg');
  const draw = SVG(svg);

  // use svg.js as normal
  draw.rect(100, 100).fill('red').move(50, 50);

  // get your svg as string
  const svgString = draw.svg();
  document.removeChild(svg);
  return svgString;
};

const generatePDF = (pdfDoc, cardText) => {
  const svg = generateSVG(cardText);

  SVGtoPDF(pdfDoc, svg, 0, 0);

  return pdfDoc;
};

module.exports = {
  generateSVG,
  generatePDF,
};
