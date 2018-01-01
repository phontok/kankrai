// returns a window with a document and an svg root node
const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVGtoPDF = require('svg-to-pdfkit');

const { document } = window;

// create svg.js instance
const draw = SVG(document.documentElement);

const generateSVG = (cardText) => {
  // use svg.js as normal
  draw.rect(100, 100).fill('green').move(50, 50);

  // get your svg as string
  return draw.svg();
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
