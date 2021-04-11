import express from 'express';
import router from './routes/route.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

router.route(app);
 
app.listen(4000);