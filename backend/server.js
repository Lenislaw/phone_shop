const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);

// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
