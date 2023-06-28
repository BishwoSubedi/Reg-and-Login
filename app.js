import express, { urlencoded } from 'express'
import flash from 'connect-flash';
import {join} from 'path'
import web from './routes/web.js'
import connectDb from './db/connect.js'
const app = express()
const port = process.env.PORT||'3000'
const Uri= process.env.Uri||'mongodb://127.0.0.1:27017'
 
//Receiving Data from FronEnd
app.use(express.urlencoded({ extended: false }));
 
//To display Alert Messages
app.use(flash())

//Loading Routes
app.use('/',web)
 
//DataBase Connection
connectDb(Uri)

//Setting Up Template Endine
app.set('view engine','ejs')

//Serving Static file
app.use('/',express.static(join(process.cwd(),"public")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})