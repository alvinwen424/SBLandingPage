const path = require('path')
const express = require('express')
const morgan = require('morgan')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const bodyParser = require('body-parser')
const { secretAccessKey, accessKeyId} = require('./secrets')

const app = express()
const s3 = new aws.S3()

//secretkey and accesskey is hidden for safety purposes
aws.config.update({
  secretAccessKey,
  accessKeyId,
  region: 'us-east-1'
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './public')))

//uses multer for uploading to aws s3
const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'bucket-name',
    key: (req, file, cb) => {
      console.log(file)
      cb(null, file.originalname)
    }
  })
}).array('upload', 1)

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.post('/upload', (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      console.log(error);
     res.send('error', error)
    }
    console.log('File uploaded successfully.');
    res.send('uploaded sucessfully')
  });
})

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || "Internal server error")
})

app.listen('1337', () => {
  console.log('Now listening on port 1337')
})
