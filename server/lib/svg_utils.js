// returns a window with a document and an svg root node
const window = require('svgdom');
const SVG = require('svg.js')(window);
const fs = require('fs');
const path = require('path');

const { document } = window;

const importSVGDefs = (svg, filename) => {
  // Import the string
  const svgString = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  // Draw the icon defs into the SVG
  svg.svg(svgString);
};

const drawSVG = (width = 500, height = 500, instructions) => {
  // Create the drawing space
  const svg = document.createElement('svg');
  const draw = SVG(svg).size(width, height);

  // Run the instruction set
  instructions(draw);

  // Get SVG as a string
  const svgString = draw.svg();
  document.removeChild(svg);
  return svgString;
};

module.exports = {
  importSVGDefs,
  drawSVG,
};
