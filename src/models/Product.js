import mongoose, { Schema, model, models } from "mongoose";


const productsSchema = new Schema({
    title: String,
    price: Number,
    category: String,
    catProperties: String,
    description: String,
    noInstocking: Number,
    images_url: String,
    images_asset_id: String,
    },
    {
      timestamps: true,
    });
   
    export const Product = models?.Product || model("Product", productsSchema);
  