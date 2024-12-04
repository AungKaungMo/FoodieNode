import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import { MONGODB_URL } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", routes);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send({ message: "Internal Server Error" });
  }
);

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  } as ConnectOptions)
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => console.log(err, "error"));

app.listen(8000, () => {
  console.log("Our application is running.");
});
