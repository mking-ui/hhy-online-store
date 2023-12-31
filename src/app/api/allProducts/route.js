
import MongoDb from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await MongoDb()
    const allPrd = await Product.find();
    return NextResponse.json(allPrd);
  } catch (error) {
    return NextResponse.json({ msg: "Error Occured", error });
  }
}
