// pages/api/signin.ts
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import dbConnect from '../../lib/utils'
import User, { IUser } from '../../models/User'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const { username, password } = req.body

                // Find the user by username
                const user: IUser | null = await User.findOne({ username })

                if (!user) {
                    return res.status(400).json({ success: false, message: 'Invalid username or password' })
                }

                // Check the password
                const isMatch = await bcrypt.compare(password, user.password)

                if (!isMatch) {
                    return res.status(400).json({ success: false, message: 'Invalid username or password' })
                }
                res.status(200).json({ success: true, message: 'Sign in successful' })
            } catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ success: false, error: error.message });
                  } else {
                    res.status(400).json({ success: false });
                  }
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}