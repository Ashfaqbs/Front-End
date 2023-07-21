const express = require("express");
const path = require("path");
const app = express();
const port = 8001;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { mergerPDF } = require("./TestPDFmerge");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  //   res.send('Hello World2')
  res.sendFile(path.join(__dirname, "Templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log(req.files);

  let date = await mergerPDF(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  //we will redirect
  res.redirect(`http://localhost:8001/static/${date+'merged'}.pdf`);

  //   we will not send  res.send({ data: req.files });
  //   mergerPDF();
  //   if we see this   destination: 'uploads/',
  //   filename: '45ecda78e2db49fbe8a6510a9d13cad0',
  //   path: 'uploads\\45ecda78e2db49fbe8a6510a9d13cad0',

  // the files are uploaded in uploades section
  //   o/p {
  //     "data": [
  //     {
  //     "fieldname": "pdfs",
  //     "originalname": "Naukri_SumitSourav[2y_3m].pdf",
  //     "encoding": "7bit",
  //     "mimetype": "application/pdf",
  //     "destination": "uploads/",
  //     "filename": "5ed9ae48b8dfb266eb963ec520542fbe",
  //     "path": "uploads\\5ed9ae48b8dfb266eb963ec520542fbe",
  //     "size": 164800
  //     },
  //     {
  //     "fieldname": "pdfs",
  //     "originalname": "aadhaar-cardNP.pdf",
  //     "encoding": "7bit",
  //     "mimetype": "application/pdf",
  //     "destination": "uploads/",
  //     "filename": "4fe86c68850dceb739c07b5c710a3dc4",
  //     "path": "uploads\\4fe86c68850dceb739c07b5c710a3dc4",
  //     "size": 906738
  //     }
  //     ]
  //     }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
