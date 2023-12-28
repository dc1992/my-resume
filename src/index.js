const puppeteer = require('puppeteer');

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
    path: `${__dirname}/cv.pdf`
  });

  await browser.close();
}

convertToPdf(`${__dirname}/resume/index.html`);