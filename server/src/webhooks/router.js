const router = require('express').Router();
const paddleHandler = require('./paddle');
const { generatePDF, generateSVG } = require('../../lib/generator');
const PDFDocument = require('pdfkit');

router.post('/paddle', paddleHandler);
router.get('/card/:format', (req, res) => {
  const { cardText, format } = req.params;
  if (format === 'pdf') {
    const pdf = new PDFDocument();
    res.setHeader('Content-disposition', 'inline');
    res.setHeader('Content-type', 'application/pdf');
    const generatedCard = generatePDF(pdf, cardText);
    generatedCard.pipe(res);
    generatedCard.end();
  } else {
    const generatedCard = generateSVG(cardText);
    res.send(generatedCard);
  }
});

module.exports = router;
