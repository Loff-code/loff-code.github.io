const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.$eval("title", (el) => el.textContent);
  const firstParagraph = await page.$eval("p", (el) => el.textContent);
  console.log(title);
  console.log(firstParagraph);
  await browser.close();
})();
