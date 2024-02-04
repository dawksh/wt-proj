// pages/api/orders.ts
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/utils'
import Order,{ IOrder } from '../../models/Order'
import User from '../../models/User'


export default async function handler(
  
    req: NextApiRequest,
    res: NextApiResponse
) {
  
    const { method } = req

    await dbConnect()

    console.log("backend = ",req.body)

    switch (method) {
        case 'POST':
          try {
            const  order  = req.body
            // Find the user
            const user = await User.findOne({username:"Gautam"})
            console.log("user",user)
            if (!user) {
              return res.status(400).json({ success: false, message: 'User not found' })
            }
    
            // Create the orders
            const createdOrders = await Order.insertMany(order.map((order: IOrder) => ({ ...order, user:user._id })))
            console.log("createdOrders = ",createdOrders)
    
            res.status(201).json({ success: true, data: createdOrders })
          } catch (error) {
            res.status(400).json({ success: false, error: error instanceof Error ? error.message : 'An error occurred' })
          }
          break
    case 'GET':
      try { 
       

        // Find the user
        const userId = "65b12e7bec15d121f7d6fa4d"
        // Get the user's orders
        const orders = await Order.find({ user: userId }).exec()
        console.log(orders)
        res.status(200).json({ success: true,  data: orders })
      } catch (error) {
        res.status(400).json({ success: false, error: error instanceof Error ? error.message : 'An error occurred' })
      }
      break
        default:
            res.status(400).json({ success: false })
            break
    }
}