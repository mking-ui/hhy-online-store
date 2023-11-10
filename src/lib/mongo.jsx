import mongoose from "mongoose";

export default async function MongoDb() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  });
}
