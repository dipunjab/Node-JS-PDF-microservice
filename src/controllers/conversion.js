import express from 'express'
import htmlToPdf from '../helpers/html-to-pdf.js';


const router = express.Router();

router.post('/', async(req,res) => {
    const {html} = req.body;

    if(!html){
        res.status(400).send('Request Should Contain an html property')
    }

    const pdf = await htmlToPdf(html)
    
    res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': pdf.length
    });

    res.send(Buffer.from(pdf))
});


export default router;