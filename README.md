# Welcome to FileUploader Backend
It is a simple MERN webapp using REST API and MVC file structure. This is use to share any kind of file.

# Concept : 
There is only two routes :
- http://localhost:5000/fileUpload : To upload the file
- http://localhost:5000/document_Model/:id : To download the file
  
Multer : I have use multer for save all files in local machine temorarily.

MongoDB : Here we simple record all the file's name, local machine store path, file Id [default], count of download that file.

Node-cron : We dont have unlimited storage in our loacl machine we do a automate task that is clear all files and collection of those files from Database, once everyday at 04:30pm.

Frontend Link: https://github.com/Sunanda01/FileSharing_Frontend.git
