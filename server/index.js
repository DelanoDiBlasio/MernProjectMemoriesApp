import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//app.use for the routes to connect to the server
app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("app is running.");
});

//connection to mongoDB atlas
const CONNECTION_URL =
  "mongodb+srv://DelanoDiBlasio:Gigman3504@cluster0.fupsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
//using mongoose for more security
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`),
    ),
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
