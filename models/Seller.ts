import mongoose, { Schema, Document, Model } from "mongoose";

interface SellerDocument extends Document {
  name: string;
  ownerName: string;
  address: string;
  foodType: [string];
  pinCode: string;
  phone: string;
  email: string;
  password: string;
  serviceAvailable: boolean;
  coverImages: [string];
  rating: number;
  //   foods: any;
}

const SellerSchema = new Schema(
  {
    name: { type: String, require: true },
    ownerName: { type: String, require: true },
    address: { type: String },
    foodType: { type: [String] },
    pinCode: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    serviceAvailable: { type: Boolean },
    coverImages: { type: [String] },
    rating: { type: Number },
    // foods: [
    //   {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "food",
    //   },
    // ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v, delete ret.createdAt, delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Seller = mongoose.model<SellerDocument>("seller", SellerSchema);
export { Seller };
