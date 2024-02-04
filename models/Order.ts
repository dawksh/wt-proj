import mongoose, { Document, Schema, Model } from 'mongoose';
import { IUser } from './User';

export interface IOrder extends Document {
    title: string;
    price: number;
    user: IUser['_id'];
    table: string;
}

const OrderSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    table: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },

});

// Define the type of the Order variable
let Order: Model<IOrder>;

// Check if the model is already compiled
if (mongoose.models.Order) {
    Order = mongoose.model<IOrder>('Order');
} else {
    Order = mongoose.model<IOrder>('Order', OrderSchema);
}

export default Order;