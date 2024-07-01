import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;
cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose;
  });

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
