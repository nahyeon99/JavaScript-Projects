import mongoose from "mongoose";

export const formatHashtags = (hashtags) =>
  hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));

// video가 가진 데이터 형식 지정
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, minLength: 20 },
  createdAt: { type: Date, required: true },
  hashtags: [{ type: String, trim: true }],
  views: { type: Number, default: 0 },
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
