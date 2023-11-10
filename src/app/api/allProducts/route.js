
import MongoDb from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    const allPrd = await Product.find();
    await MongoDb();
    return NextResponse.json({ data: allPrd });
  } catch (error) {
    return NextResponse.json({ msg: "Error Occured", error });
  }
}
