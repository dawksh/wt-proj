// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs';
import connectDb from '../../lib/utils';
import User from '../../models/User';

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await connectDb();

    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
        username,
        password: hashedPassword,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error in saving user' });
    }
}