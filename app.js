import express from 'express';
import { create } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { env } from 'process';
import expressSession from 'express-session';
import authRouter from './src/routes/auth.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const hbs = create();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    expressSession({
        secret: env.JWT_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home', {
        loadThreeJS: true,  
    });
}
);

app.get('/profile', (req, res) => {
    res.locals.user = req.session.user;
    res.locals.message = req.session.message;

    if (req.session.message) {
        req.session.message = null; // Hapus pesan setelah ditampilkan
    }

    res.render('home');
}
);

app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000, url : http://localhost:3000');
});
