import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const authController = {
    async register(req, res) {
        const { email, password, name } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.users.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    },

    async login(req, res) {
        const { email, password } = req.body;



        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            res.locals.error = 'Email not found';
            return res.render('login');
        }

        // Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.locals.error = 'Invalid credentials';
            return res.render('login');
        }

        const expiresIn = 604800;

        const token = jwt.sign(
            { id: user.id.toString(), email: user.email },
            process.env.JWT_SECRET,
            { expiresIn }
        );


        res.cookie('auth_token', token, { httpOnly: true });

        if (user && user.id) {
            user.id = user.id.toString();
        }

        req.session.user = user;
        req.session.message = 'You have successfully Logged in';

        res.redirect('/');
    },

    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to logout' });
            }
            res.redirect('/');
        });
    }
};
