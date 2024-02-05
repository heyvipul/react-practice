const express = require("express")
const path = require("path")
const multer  = require('multer')
const app = express();

app.use(express.urlencoded({extended:false})); // becuase we are working with form data
//                                             //mid helps us to parse form-data
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //cb => call back  
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
  })

const upload = multer({ storage: storage })


app.get("/",(req,res)=>{
    return res.render("homepage")
})

app.post("/upload", upload.single('profileImage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/")
})

app.listen(3000,()=>{
    console.log("port running!");
})