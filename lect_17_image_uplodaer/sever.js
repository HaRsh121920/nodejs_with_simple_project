import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs"); // Set EJS as the view engine

// Cloudinary Configuration
cloudinary.config({
  cloud_name: "dpvwbltor",
  api_key: "667655349574561",
  api_secret: "iWu0992AVCln2NALMMOdt6EdUFk",
});

// MongoDB Connection
mongoose
  .connect("mongodb+srv://harshdidwana2004:fvZ8fpkdPUXdcEob@cluster0.evrnz.mongodb.net/", {
    dbName: "mongodb",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Image Schema & Model
const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imageUrl: String,
});

const File = mongoose.model("File", imageSchema);

// GET Route - Render Upload Page
app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// POST Route - Upload Image
app.post("/upload", upload.single("avatar"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const filePath = req.file.path;

    // Upload to Cloudinary
    const cloudinaryRes = await cloudinary.uploader.upload(filePath, {
      folder: "Node_js_mastery",
    });

    // Save to Database
    const db = await File.create({
      filename: req.file.originalname,
      public_id: cloudinaryRes.public_id, // Fixed typo
      imageUrl: cloudinaryRes.secure_url,
    });

    res.render("index.ejs", { url: cloudinaryRes.secure_url });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start Server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
