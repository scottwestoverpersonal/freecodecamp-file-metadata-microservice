# API Basejump: File Metadata Microservice

A NodeJS App that allows users to upload a file and find out the meta data of the file. The app will respond with a JSON response with the relavant data. This app uses the multer library.

You can view the live demo here: https://guarded-oasis-98110.herokuapp.com/

### The Web App Does the Following:
* I can submit a FormData object that includes a file upload.
* When I submit something, I will receive the file size in bytes within the JSON response

Link to the freecodecamp project - https://www.freecodecamp.com/challenges/file-metadata-microservice

## Deploy On Heroku

To deploy the app to Heroku just click on this button here: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Example output:
<code>
{
  "fieldname": "fileToUpload",
  "originalname": "test.txt",
  "encoding": "7bit",
  "mimetype": "text/plain",
  "destination": "uploads/",
  "filename": "dfe6a25ac7ea79f2ee1253037fc27536",
  "path": "uploads/dfe6a25ac7ea79f2ee1253037fc27536",
  "size": 4
}
</code>