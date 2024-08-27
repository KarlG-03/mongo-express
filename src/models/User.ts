import mongoose from 'mongoose';

export type TUser = Document & {
  name: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<TUser>('User', UserSchema);
