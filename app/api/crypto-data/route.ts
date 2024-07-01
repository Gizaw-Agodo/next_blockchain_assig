import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.js";
import Asset from "@/models/assets.js";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const assets = await Asset.find({});

    return NextResponse.json(assets);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
