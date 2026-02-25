const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

// Verhoeff Algorithm Tables
const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

function validateVerhoeff(array) {
    let c = 0;
    const invertedArray = array.reverse();

    for (let i = 0; i < invertedArray.length; i++) {
        c = d[c][p[i % 8][invertedArray[i]]];
    }

    return c === 0;
}

async function verifyAadhaar(imagePath) {
    if (!fs.existsSync(imagePath)) {
        console.log(JSON.stringify({ success: false, message: "File not found: " + imagePath }));
        return;
    }

    try {
        const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');

        // Remove spaces and find 12-digit patterns
        const cleanedText = text.replace(/\s/g, '');
        const matches = cleanedText.match(/\d{12}/g);

        if (!matches) {
            console.log(JSON.stringify({ success: false, message: "No 12-digit number found in OCR result" }));
            return;
        }

        for (const aadhaar of matches) {
            const digits = aadhaar.split('').map(Number);
            if (validateVerhoeff(digits)) {
                // Return masked version
                const masked = `XXXX-XXXX-${aadhaar.slice(-4)}`;
                console.log(JSON.stringify({
                    success: true,
                    id_found: masked,
                    message: "Valid Aadhaar"
                }));
                return;
            }
        }

        console.log(JSON.stringify({ success: false, message: "Aadhaar found but failed mathematical validation" }));

    } catch (error) {
        console.log(JSON.stringify({ success: false, message: "OCR processing failed", error: error.message }));
    }
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log(JSON.stringify({ success: false, message: "Image path argument missing" }));
} else {
    verifyAadhaar(args[0]);
}
