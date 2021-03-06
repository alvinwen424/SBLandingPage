const path = require('path')
const express = require('express')
const morgan = require('morgan')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const bodyParser = require('body-parser')

const app = express()
//aws.config.update must be above s3 instantiation for credentials to load when uploading
aws.config.update({
  secretAccessKey: process.env.secretAccessKey,
  accessKeyId: process.env.accessKeyId,
  region: 'us-east-1'
})

const s3 = new aws.S3()

//secretkey and accesskey is hidden for safety purposes

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './public')))

//uses multer for uploading to aws s3
// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: 'sd-landing-page',
//     key: (req, file, cb) => {
//       console.log(file)
//       cb(null, file.originalname)
//     }
//   })
// })

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
})

app.post('/upload', (req, res) => {
  // req.file is the 'userdata' file
  console.log('backend')
  const Key = 'user_' + req.body.email
  s3.putObject({
      Bucket: 'sd-landing-page',
      Key, //this needs to change based on req input or else it will overwrite existing users
      Body: JSON.stringify(req.body),
      ACL: 'public-read', // your permisions
    }, (err) => {
      if (err) return res.status(400).send(err);
      res.send('File uploaded to S3')
  })
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// app.post('/upload', upload.array('photos', 1), (req, res, next) => {
//   upload(req, res, function (error) {
//     if (error) {
//       console.log(error);
//      res.send('error', error)
//     }
//     console.log('File uploaded successfully.');
//     res.send('uploaded sucessfully')
//   });
// })

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || "Internal server error")
})

let port_number = process.env.PORT || 1337
app.listen(port_number, () => {
  console.log('Now listening on port 1337')
})
