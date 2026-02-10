import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure uploads directory exists
// Files are saved to: backEnd/sanad-be/uploads/
const uploadsDir = path.join(__dirname, "..", "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Define where to store the uploaded files
// IMPORTANT: Files are saved to disk in the uploads folder
// Only the path (e.g., "/uploads/filename.jpg") is stored in the database
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // Save file to uploads folder
  },
  filename: function (req, file, cb) {
    // Generate a unique name: timestamp-random-originalname
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${uniqueSuffix}${ext}`);
  },
});

// File filter to accept images and documents (for medical files)
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept image files and common document types (PDF, DOC, DOCX, etc.)
  const allowedMimes = [
    "image/", // All image types
    "application/pdf", // PDF files
    "application/msword", // DOC files
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX files
  ];
  
  const isAllowed = allowedMimes.some((mime) => file.mimetype.startsWith(mime) || file.mimetype === mime);
  
  if (isAllowed) {
    cb(null, true);
  } else {
    cb(new Error("Only image and document files (PDF, DOC, DOCX) are allowed!"));
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Export different upload configurations
export const uploadSingle = upload.single("image"); // For single image upload
export const uploadFile = upload.single("file"); // For single file upload (images or documents)
export const uploadMultiple = upload.array("images", 10); // For multiple images (max 10)

export default upload;