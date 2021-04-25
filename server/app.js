import express from 'express';
import router from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

router.route(app);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
 
app.listen(process.env.PORT);