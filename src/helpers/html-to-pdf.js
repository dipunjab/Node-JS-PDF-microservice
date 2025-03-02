import puppeteer from "puppeteer"

const defaultOptions = {
    format: 'A4',
    printBackground: true,
}

async function htmlToPdf(html, options = defaultOptions) {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();  
    await page.setContent(html, {waitUntil: 'domcontentloaded'})   
    
    const pdfbuffer = await page.pdf(options)

    return pdfbuffer;
}

export default htmlToPdf;