import express from 'express';
import router from './routes/route.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

router.route(app);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
 
app.listen(process.env.PORT);