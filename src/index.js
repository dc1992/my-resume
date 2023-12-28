const puppeteer = require('puppeteer');
const path = require('path');

const convertToPdf = async (fileToConvertPath) => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();

  await page.goto(`file://${fileToConvertPath}`, {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    format: 'A4',
    path: path.resolve(__dirname, '..', 'cv.pdf'),
    printBackground: true
  });

  await browser.close();
}

convertToPdf(`${__dirname}/resume/index.html`);