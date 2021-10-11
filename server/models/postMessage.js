import mongoose from "mongoose";
//creating mongoose schema model
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//now we have a schema we will turn it into a model
let PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
