import express from 'express';
import router from './routes/route.js';

const app = express();

router.route(app);
 
app.listen(4000);