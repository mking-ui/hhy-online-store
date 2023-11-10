

import MongoDb from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

//GET For All Products
export async function GET(req, { params: { id } }) {
  try {
    const allNewPrd = await Product.findOne({ _id: id });
    await MongoDb();
    return NextResponse.json({ data: allNewPrd });
  } catch (error) {
    return NextResponse.json({ msg: "Error occured!!!!" });
  }
}
