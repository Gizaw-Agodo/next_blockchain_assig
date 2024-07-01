import mongoose from "mongoose";


const Asset = mongoose.models.Asset || mongoose.model('Asset', {
  asset: { type: String, required: true },
  imageUrl: { type: String, required: true },
  lastTrade: { type: String, required: true },
  change24hPercent: { type: String, required: true },
  change24hDecimal: { type: Number, required: true },
});

export default Asset;