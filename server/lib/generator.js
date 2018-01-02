const { drawSVG, importSVGDefs } = require('./svg_utils');
const SVGtoPDF = require('svg-to-pdfkit');

const generateSVG = cardText =>
  // Creates an SVG of the specified width/height and executes the instructions
  drawSVG(1000, 500, (svg) => {
    // Import the sample icon defs
    importSVGDefs(svg, './assets/sample_icons.svg');

    // Use svg.js as normal
    svg.rect(100, 100).fill('red').move(50, 50);
    svg.use('fish').x(75).y(75).fill('#d83');
    svg.use('beaker').fill('#45e');
  });

const generatePDF = (pdfDoc, cardText) => {
  const svg = generateSVG(cardText);
  // Convert the SVG to a PDF, positioning it at the specified location
  SVGtoPDF(pdfDoc, svg, 0, 0);
  return pdfDoc;
};

module.exports = {
  generateSVG,
  generatePDF,
};
