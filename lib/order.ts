import mongoose, { Document, Schema } from 'mongoose';

interface IOrderItem {
  title: string;
  price: number;
  quantity: number;
}

interface IOrder extends Document {
  tableNumber: number;
  kitchen: string;
  items: IOrderItem[];
}

const OrderItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const OrderSchema: Schema = new Schema({
  tableNumber: { type: Number, required: true },
  kitchen: { type: String, required: true },
  items: { type: [OrderItemSchema], required: true }
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;