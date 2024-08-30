import mongoose, { Schema, Document } from 'mongoose';

export interface ICrypto extends Document {
  name: string;
  symbol: string;
  price: number;
}

const CryptoSchema: Schema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export default mongoose.model<ICrypto>('Crypto', CryptoSchema);
