// pages/api/orders.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/utils";
import Order, { IOrder } from "../../models/Order";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const order = req.body;
        // Find the user
        console.log("kitchen = ", order[0].kitchen);
        const user = await User.findOne({
          username: order[0].kitchen,
        }).exec();
        console.log("user", user);
        if (!user) {
          return res
            .status(400)
            .json({ success: false, message: "User not found" });
        }

        // Create the orders
        const createdOrders = await Order.insertMany(
          order.map((order: IOrder) => ({ ...order, user: user._id }))
        );

        res.status(201).json({ success: true, data: createdOrders });
      } catch (error) {
        res.status(400).json({
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "An error occurred",
        });
      }
      break;
    case "GET":
      try {
        // Find the user
        const username = req.query.username;
        // Get the user's orders
        const orders = await Order.find({ username }).exec();
        // Map _id to id for each order
        const ordersWithId = orders.map((order) => ({
          id: order._id.toString(),
          title: order.title,
          price: order.price,
          user: order.user,
          table: order.table
        }));
        res.status(200).json({ success: true, data: ordersWithId });
      } catch (error) {
        res.status(400).json({
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "An error occurred",
        });
      }
      break;
    case "DELETE":
      try {
        // Get the ID of the order to delete from the request
        const { id } = req.body;

        // Find the order and delete it
        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
          return res
            .status(400)
            .json({ success: false, message: "Order not found" });
        }

        res.status(200).json({ success: true, data: deletedOrder });
      } catch (error) {
        res.status(400).json({
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "An error occurred",
        });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
