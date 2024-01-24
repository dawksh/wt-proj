import mongoose, { Document, Model } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

let UserModel: Model<IUser>;

if (mongoose.models.User) {
    UserModel = mongoose.model('User') as Model<IUser>;
} else {
    UserModel = mongoose.model<IUser>('User', UserSchema) ;
}

export default UserModel;