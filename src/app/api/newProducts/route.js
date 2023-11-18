import MongoDb from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

//GET
export async function GET(req) {
  try {
    await MongoDb()
    const prod = await Product.find({}, null, {
      sort: { _id: -1 },
      limit: 12,
    });
    return NextResponse.json(prod);
  } catch (error) {
    return NextResponse.json({ msg: "Error occured" });
  }
}
