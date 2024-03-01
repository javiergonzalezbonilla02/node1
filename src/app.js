
import express from 'express';
//import ejs from 'ejs';
import {dirname, join}from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
import {PORT} from  './config.js';
//iniciamos express
const app = express();
const __dirname =dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname,'views'))

//configurar motor de plantillas
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));


//configurar el enrutador
app.use(indexRoutes);

//configurar public como statico    
app.use(express.static(join(__dirname,'public')));

//iniciamos servidor
app.listen(PORT);//coge el puerto automatico del sistema
console.log('Escuchando en el puerto ....',PORT);




