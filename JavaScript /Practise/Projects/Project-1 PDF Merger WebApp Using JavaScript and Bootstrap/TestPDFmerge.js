const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergerPDF = async (pdf1, pdf2) => {
  //testing
  //   await merger.add(
  //     "C:/Users/Ashfaq PC/Documents/Front_End/JS/Practise/Projects/Project-1 PDF Merger WebApp Using JavaScript and Bootstrap/PDF/1.pdf"
  //   ); //merge all pages. parameter is the path to file and filename.
  //   await merger.add(
  //     "C:/Users/Ashfaq PC/Documents/Front_End/JS/Practise/Projects/Project-1 PDF Merger WebApp Using JavaScript and Bootstrap/PDF/2.pdf"
  //   );

  await merger.add(pdf1);

  await merger.add(pdf2);

  let d = new Date().getTime();

  await merger.save(
    `C:/Users/Ashfaq PC/Documents/Front_End/JS/Practise/Projects/Project-1 PDF Merger WebApp Using JavaScript and Bootstrap/public/${
      d + "merged"
    }.pdf`
  ); //save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
//we will  use this in server.js
module.exports = { mergerPDF };
